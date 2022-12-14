import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["bulma"]
    }
  },
  markdown: {
    drafts: true
  },
  integrations: [mdx({
    drafts: true
  })],
  output: "server",
  adapter: netlify()
});