import createNodeAdapter from "@sveltejs/adapter-node";
import {vitePreprocess as createVitePreprocessor} from "@sveltejs/vite-plugin-svelte";
const vitePreprocessor = createVitePreprocessor();
const nodeAdapter = createNodeAdapter();

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
	kit: {
		adapter: nodeAdapter,
		files: {},
	},
	preprocess: [vitePreprocessor],
};

export default svelteConfig;
