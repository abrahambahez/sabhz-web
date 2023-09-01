import { defineConfig } from 'astro/config';
import addClasses from './add-classes.mjs';

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
		]
	},
});
