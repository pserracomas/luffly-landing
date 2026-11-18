export const SITE_URL = 'https://luffly.app';

/** Contact for support, privacy requests and App Review. */
export const CONTACT_EMAIL = 'hola@luffly.app';
export const OWNER = 'Pedro Serra Comas';

/** Luffly's App Store id. Set it to null to show "Coming soon" instead of the download buttons. */
export const APP_STORE_ID: string | null = null;

/** Country-neutral App Store link: Apple opens the visitor's own storefront. */
export const APP_STORE_URL: string | null = APP_STORE_ID ? `https://apps.apple.com/app/id${APP_STORE_ID}` : null;

/** Apple's Standard Licensed Application End User License Agreement. */
export const APPLE_EULA_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

/**
 * Luffly Pro prices in euros, as set in App Store Connect (tillerlog-ios docs/DECISIONS.md 0.1).
 * The lifetime purchase sells at a launch price during the first season and then goes up to
 * `lifetimeRegular`: when that happens, set `lifetime` to the regular price and `lifetimeRegular` to null.
 */
export const PRICES = {
	yearly: 34.99,
	trialDays: 14,
	lifetime: 59.99,
	lifetimeRegular: 89.99 as number | null,
};

/** Date shown on the privacy policy and terms (update it when they change). */
export const LEGAL_UPDATED = '2026-11-19';
