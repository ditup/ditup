import { expect, Page, test } from "@playwright/test";
import { v7 } from "css-authn";
import { randomUUID } from "node:crypto";
import strict_uri_encode from "strict-uri-encode";

interface User extends Awaited<ReturnType<typeof v7.createAccount>> {
  fetch: typeof globalThis.fetch;
}

const createRandomAccount = async (): Promise<User> => {
  const uuid = randomUUID();
  const user = await v7.createAccount({
    username: uuid,
    email: `${uuid}@example`,
    password: "correcthorsebatterystaples",
    oidcIssuer: "http://localhost:4000",
  });
  return { ...user, fetch: await v7.getAuthenticatedFetch(user) };
};

test.describe("Sign in", () => {
  test("sign in", async ({ page, context }) => {
    const user = await createRandomAccount();
    await signin({ page, user, url: "/", clientId: "/clientid.jsonld" });
    await expect(page.locator("dtp-router")).toContainText("home");
  });

  test("use static clientId", async ({ page }) => {
    const user = await createRandomAccount();
    const url = `/profile/${strict_uri_encode(user.webId)}`;
    await signin({ page, user, url, clientId: "/clientid.jsonld" });
    await expect(page).toHaveURL(url);
  });

  test("redirect to the same page after login", async ({ page }) => {
    const user = await createRandomAccount();
    const url = `/profile/${strict_uri_encode(user.webId)}`;
    await signin({ page, user, url });
    await expect(page).toHaveURL(url);
  });

  test("redirect to the same page after refresh", async ({ page }) => {
    const user = await createRandomAccount();
    const url = `/profile/${strict_uri_encode(user.webId)}`;
    await signin({ page, user, url });
    await expect(page).toHaveURL(url);
    await page.reload();
    await expect(page).toHaveURL(url);
  });

  test("go directly to a url", async ({ page }) => {
    const user = await createRandomAccount();
    const url = `/profile/${strict_uri_encode(user.webId)}`;
    await signin({ page, user });
    await page.goto(url);
    await expect(page).toHaveURL(url);
  });

  test("remember last selected login", async ({ page }) => {
    const user = await createRandomAccount();
    const url = `/profile/${strict_uri_encode(user.webId)}`;
    await signin({ page, user });
    await page.getByRole("button", { name: "sign out" }).click();
    await page.goto("/");
    await page.getByRole("button", { name: "sign in" }).click();
    await expect(page.getByRole("textbox")).toHaveValue(user.oidcIssuer);
  });
});

const signin = async ({
  page,
  user,
  url = "/",
  clientId,
}: {
  page: Page;
  user: User;
  url?: string;
  clientId?: string;
}) => {
  await page.goto(url);
  await page.getByRole("button", { name: "sign in" }).click();
  await page.getByRole("textbox").fill(user.oidcIssuer);
  await page.getByRole("button", { name: "continue" }).click();
  await expect(page).toHaveURL(
    "http://localhost:4000/.account/login/password/"
  );
  await page.getByRole("textbox", { name: "Email" }).fill(user.email);
  await page.getByRole("textbox", { name: "Password" }).fill(user.password);
  await page.getByRole("button", { name: "Log in" }).click();
  if (clientId) await expect(page.locator("#client")).toContainText(clientId);
  await page.getByRole("button", { name: "Authorize" }).click();
  await expect(page).toHaveURL(url);
};
