import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sveltePhosphorOptimize } from 'phosphor-svelte/vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltePhosphorOptimize(), sveltekit()],
	server: {
		fs: {
			allow: ['.well-known/appspecific/com.chrome.devtools.json']
		}
	}
});
