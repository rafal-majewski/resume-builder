import * as SveltejsKitVite from "@sveltejs/kit/vite";
import type * as Vite from "vite";

const svelteKitVitePlugin = SveltejsKitVite.sveltekit();

const viteConfig: Vite.UserConfig = {
	plugins: [svelteKitVitePlugin],
};

export default viteConfig;
