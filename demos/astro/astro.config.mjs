// @ts-check
import { defineConfig } from 'astro/config';

import zikojs from '@zikojs/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [zikojs()]
});