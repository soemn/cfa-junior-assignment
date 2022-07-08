import type { Article } from './articles.dto';

const ARTCILES_URL = 'http://localhost:3001/posts'

export async function getArticles(page = 1, limit = 20): Promise<Article[]> {
  const response = await fetch(`${ARTCILES_URL}?_page=${page}&_limit=${limit}`)
  return response.json()
}