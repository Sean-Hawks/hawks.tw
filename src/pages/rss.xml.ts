import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = async () => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return rss({
    title: "hawks.tw",
    description: "技術筆記與觀後感",
    site: "https://hawks.tw",
    items: posts.map((p) => ({
      link: `/posts/${p.slug}/`,
      title: p.data.title,
      pubDate: p.data.publishDate,
      description: p.data.summary ?? "",
    })),
    stylesheet: true,
  });
};
