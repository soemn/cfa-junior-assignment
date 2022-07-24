import type { Article } from "./articles.dto";

const ARTCILES_URL = "http://localhost:5000/getData";

export async function getArticles({
  upperlimit,
  lowerlimit,
}: {
  upperlimit: number;
  lowerlimit: number;
}): Promise<Article[]> {
  console.log(upperlimit, lowerlimit);
  const response = await fetch(
    `${ARTCILES_URL}?upperlimit=${upperlimit}&lowerlimit=${lowerlimit}`
  );

  return response.json();
}
