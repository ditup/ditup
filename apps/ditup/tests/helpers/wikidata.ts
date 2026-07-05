import { type Page } from '@playwright/test'
import fs from 'node:fs/promises'
import merge from 'lodash/merge.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export async function mockWikidata({ page }: { page: Page }) {
  await page.route(
    'https://www.wikidata.org/w/api.php*',
    async (route, request) => {
      const url = new URL(request.url())
      const ids = url.searchParams.get('ids')?.split('|') ?? []
      const languages = url.searchParams.get('languages')?.split('|') ?? []

      const result = {}

      for (const id of ids) {
        for (const language of languages) {
          const data = await readMockWikidata({ id, language, fallback: true })
          merge(result, data)
        }
      }

      await route.fulfill({
        status: 200,
        json: result,
      })
    },
  )
}

const readMockWikidata = async ({
  id,
  language,
  fallback = false,
}: {
  id: string
  language: string
  fallback?: boolean
}) => {
  try {
    return await readData(`${id}-${language}`)
  } catch (e) {
    if (e instanceof Error && 'code' in e && e.code === 'ENOENT') {
      return fallback ? await readFallback(id) : undefined
    } else throw e
  }
}

const readFallback = async (id: string) => {
  const data = await readData('default-entity')

  return {
    entities: {
      [id]: {
        ...data,
        title: id,
        id,
      },
    },
    success: 1,
  }
}

const readData = async (identifier: string) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filepath = path.resolve(__dirname, `./wikidata-data/${identifier}.json`)

  return JSON.parse(await fs.readFile(filepath, 'utf8'))
}
