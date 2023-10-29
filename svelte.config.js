import adapter from 'sveltekit-adapter-fastly';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({ static_publish_config: { kvStoreName: 'clay-frrs-dev-assets' } })
  }
};

export default config;
