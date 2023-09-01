import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();
const posts = await getCollection('posts');

export function GET(context) {
  return rss({
    // `<title>` campo en el xml generado
    title: 'sabhz',
    // `<description>` campo en el xml generado
    description: 'Blog de antropología, filosofía y tecnología' ,
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: posts.map((post) => ({
	title: post.data.title,
	pubDate: post.data.createdAt,
	content: sanitizeHtml(parser.render(post.body)),
	link: post.slug
    	})),
    stylesheet: 'rss/pretty-feed-v3.xsl',
    // (opcional) inyecta xml personalizado
    customData: `<language>es-MX</language>`,
  });
}
