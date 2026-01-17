import { visit } from 'unist-util-visit';

export default function wrapMedia() {
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (node.tagName === 'img' && parent && parent.tagName === 'p') {
				parent.children[index] = {
					type: 'element',
					tagName: 'figure',
					properties: {},
					children: [node]
				};
			}
		});
	};
}
