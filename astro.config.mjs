import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  output: 'static',
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
