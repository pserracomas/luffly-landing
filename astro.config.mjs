// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://luffly.app',
	trailingSlash: 'always',
	i18n: {
		locales: ['en', 'es', 'ca'],
		defaultLocale: 'en',
		routing: { prefixDefaultLocale: false },
	},
});
