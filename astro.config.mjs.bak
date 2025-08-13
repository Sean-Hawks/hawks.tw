import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// 移除 pagefind import

export default defineConfig({
  site: "https://hawks.tw",
  integrations: [
    tailwind({ applyBaseStyles: true }),
    mdx(),
    sitemap(),
    // 移除 pagefind()
  ],
});