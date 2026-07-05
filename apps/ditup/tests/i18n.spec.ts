import { test, expect, Page } from '@playwright/test'
import { createRandomAccount, signin } from './helpers/account'
import { foaf, solid } from 'rdf-namespaces'
import { mockWikidata } from './helpers/wikidata'

async function switchLanguage({ page, lang }: { page: Page; lang: string }) {
  await page.getByTestId('language-selector').selectOption(lang)
}

test.describe('Localization', () => {
  test('switch language', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.getByRole('button', { name: 'sign in' })).toBeVisible()
    await expect(
      page.getByRole('button', { name: 'přihlásit se' }),
    ).not.toBeVisible()
    await switchLanguage({ page, lang: 'cs' })
    await expect(
      page.getByRole('button', { name: 'sign in' }),
    ).not.toBeVisible()
    await expect(
      page.getByRole('button', { name: 'přihlásit se' }),
    ).toBeVisible()

    await expect(page.locator('html')).toHaveAttribute('lang', 'cs')
  })

  test('change language of topics', async ({ page }) => {
    await mockWikidata({ page })
    const user = await createRandomAccount()
    const response = await user.fetch(user.webId, {
      method: 'PATCH',
      body: `
        <#this> a <${solid.InsertDeletePatch}>;
          <${solid.inserts}> {
            <${user.webId}> <${foaf.topic_interest}>
              <http://www.wikidata.org/entity/Q1>,
              <http://www.wikidata.org/entity/Q188961>,
              <http://www.wikidata.org/entity/Q55408718>.
          } .`,
      headers: { 'content-type': 'text/n3' },
    })
    expect(response.ok).toBe(true)

    await signin({ user, page })
    await page.goto(`/profile/${encodeURIComponent(user.webId)}`)

    await expect(page.getByRole('button', { name: 'universe' })).toBeVisible()
    await expect(
      page.getByRole('button', { name: 'wszechświat' }),
    ).not.toBeVisible()

    await switchLanguage({ page, lang: 'pl' })

    await expect(
      page.getByRole('button', { name: 'universe' }),
    ).not.toBeVisible()
    await expect(
      page.getByRole('button', { name: 'wszechświat' }),
    ).toBeVisible()
  })
})
