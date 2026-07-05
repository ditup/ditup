import { randomUUID } from 'node:crypto'
import { v7 } from 'css-authn'
import { Page, expect } from '@playwright/test'

export interface User extends Awaited<ReturnType<typeof v7.createAccount>> {
  fetch: typeof globalThis.fetch
}

export const createRandomAccount = async (): Promise<User> => {
  const uuid = randomUUID()
  const user = await v7.createAccount({
    username: uuid,
    email: `${uuid}@example`,
    password: 'correcthorsebatterystaples',
    oidcIssuer: 'http://localhost:4000',
  })
  return { ...user, fetch: await v7.getAuthenticatedFetch(user) }
}

export const signin = async ({
  page,
  user,
  url = '/',
  clientId,
}: {
  page: Page
  user: User
  url?: string
  clientId?: string
}) => {
  await page.goto(url)
  await page.getByRole('button', { name: 'sign in' }).click()
  await page.getByRole('textbox').fill(user.oidcIssuer)
  await page.getByRole('button', { name: 'continue' }).click()
  await expect(page).toHaveURL('http://localhost:4000/.account/login/password/')
  await page.getByRole('textbox', { name: 'Email' }).fill(user.email)
  await page.getByRole('textbox', { name: 'Password' }).fill(user.password)
  await page.getByRole('button', { name: 'Log in' }).click()
  if (clientId) await expect(page.locator('#client')).toContainText(clientId)
  await page.getByRole('button', { name: 'Authorize' }).click()
  await expect(page).toHaveURL(url)
}
