// vite.config.js
import { readFileSync, writeFileSync } from "fs";
import { defineConfig, loadEnv } from "vite";

export default defineConfig((config) => ({
  plugins: [
    // serve clientid.jsonld in dev mode
    {
      name: "serve-dev-clientid",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/clientid.jsonld") {
            const template = readFileSync(
              "src/clientid.template.jsonld",
              "utf8"
            );
            const result = template.replace(
              /%BASE_URL%/g,
              `http://localhost:${server.config.server.port}`
            );
            res.setHeader("Content-Type", "application/ld+json");
            res.end(result);
            return;
          }
          next();
        });
      },
    },
    // create clientid.jsonld after build
    {
      name: "build-clientid",
      closeBundle() {
        const env = loadEnv(config.mode, process.cwd());
        const baseUrl = env.VITE_BASE_URL || "http://localhost:4173";
        const template = readFileSync("src/clientid.template.jsonld", "utf8");
        const result = template.replace(/%BASE_URL%/g, baseUrl);
        writeFileSync("dist/clientid.jsonld", result);
      },
    },
  ],
}));
