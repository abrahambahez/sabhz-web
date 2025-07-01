import { defineConfig } from "astro/config";
import addClasses from "./add-classes.mjs";
import rehypeCitation from "rehype-citation";
import sidenotes from "remark-sidenotes";

// https://astro.build/config
export default defineConfig({
  site: "https://sabhz.com",
  // Enable Custom Markdown options, plugins, etc.
  markdown: {
    remarkPlugins: [
      "remark-code-titles",
      sidenotes,
      ["remark-toc", { heading: "Contenido" }],
    ],
    rehypePlugins: [
      "rehype-slug",
      [addClasses, { "h1,h2,h3": "title" }],
      [
        rehypeCitation,
        {
          // for local dev migrate file to this path: 'public/references.json',
          bibliography: "public/references.json",
          csl: "chicago",
          linkCitations: true,
          inlineClass: ["citation"],
          lang: "public/locales-es-MX.xml",
        },
      ],
    ],
  },
});
