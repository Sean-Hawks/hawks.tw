
import { getCollection } from "astro:content";

export async function getSortedPosts() {
  const all = await getCollection("posts", ({ data }) => !data.draft);
  return all.sort((a, b) => +b.data.publishDate - +a.data.publishDate);
}
