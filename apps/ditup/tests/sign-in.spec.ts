import { expect, test } from '@playwright/test'
import strict_uri_encode from 'strict-uri-encode'
import { createRandomAccount, signin } from './helpers/account'

test.describe('Sign in', () => {
  test('sign in', async ({ page }) => {
    const user = await createRandomAccount()
    await signin({ page, user, url: '/', clientId: '/clientid.jsonld' })
    await expect(page.locator('dtp-router')).toContainText('home')
  })

  test('use static clientId', async ({ page }) => {
    const user = await createRandomAccount()
    const url = `/profile/${strict_uri_encode(user.webId)}`
    await signin({ page, user, url, clientId: '/clientid.jsonld' })
    await expect(page).toHaveURL(url)
  })

  test('redirect to the same page after login', async ({ page }) => {
    const user = await createRandomAccount()
    const url = `/profile/${strict_uri_encode(user.webId)}`
    await signin({ page, user, url })
    await expect(page).toHaveURL(url)
  })

  test('redirect to the same page after refresh', async ({ page }) => {
    const user = await createRandomAccount()
    const url = `/profile/${strict_uri_encode(user.webId)}`
    await signin({ page, user, url })
    await expect(page).toHaveURL(url)
    await page.reload()
    await expect(page).toHaveURL(url)
  })

  test('go directly to a url', async ({ page }) => {
    const user = await createRandomAccount()
    const url = `/profile/${strict_uri_encode(user.webId)}`
    await signin({ page, user })
    await page.goto(url)
    await expect(page).toHaveURL(url)
  })

  test('remember last selected login', async ({ page }) => {
    const user = await createRandomAccount()
    await signin({ page, user })
    await page.getByRole('button', { name: 'sign out' }).click()
    await page.goto('/')
    await page.getByRole('button', { name: 'sign in' }).click()
    await expect(page.getByRole('textbox')).toHaveValue(user.oidcIssuer)
  })
})
