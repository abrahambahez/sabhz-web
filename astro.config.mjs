import { defineConfig } from 'astro/config';
import addClasses from './add-classes.mjs';
import rehypeCitation from 'rehype-citation';

// custom function to inject a layout
function defaultLayoutPlugin () {
  return function (tree, file) {
    file.data.astro.frontmatter.layout = '/src/layouts/main.astro'
  }
}

// https://astro.build/config
export default defineConfig({
	site: 'https://sabhz.com',
	// Enable Custom Markdown options, plugins, etc.
	markdown: {
		remarkPlugins: [
			'remark-code-titles',
			defaultLayoutPlugin
		],
		rehypePlugins: [
			'rehype-slug',
			[addClasses, { 'h1,h2,h3': 'title' }],
			[rehypeCitation, { 
				// for local dev migrate file to this path: 'src/content/posts/librero.bib',
				"bibliography":"https://raw.githubusercontent.com/abrahambahez/notas/main/librero.bib",
				"csl":"chicago",
				//"csl": "https://mirror.las.iastate.edu/tex-archive/biblio/citation-style-language/chicago-note-bibliography.csl",
				//"suppressBibliography": true,
				"lang": "https://mirror2.sandyriver.net/pub/ctan/biblio/citation-style-language/csl-locales-es-MX.xml"

			}]
		]
	},
});
