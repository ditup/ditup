import { expect, test } from "@playwright/test";
import { v7 } from "css-authn";
import { randomUUID } from "node:crypto";

test("sign in", async ({ page }) => {
  const uuid = randomUUID();
  const _user = await v7.createAccount({
    username: uuid,
    email: `${uuid}@example`,
    password: "correcthorsebatterystaples",
    provider: "http://localhost:4000",
  });
  const user = { ..._user, provider: _user.idp };

  const authFetch = await v7.getAuthenticatedFetch(user);

  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "sign in" }).click();
  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill(user.provider);
  await page.getByRole("button", { name: "continue" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill(user.email);
  await page.getByRole("textbox", { name: "Password" }).fill(user.password);
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("button", { name: "Authorize" }).click();
  await expect(page).toHaveURL("/");
  await expect(page.locator("dtp-router")).toContainText("home");
});
