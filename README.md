# luffly-landing

Website for [Luffly](https://luffly.app), the maintenance logbook for sailboats: landing page, privacy
policy, terms of use and support, in English (`/`), Spanish (`/es/`) and Catalan (`/ca/`). Built with
[Astro](https://astro.build) as a fully static site, on the same setup as monibo-landing.

## URLs for App Store Connect

| Field | URL |
|---|---|
| Marketing URL | https://luffly.app/ |
| Support URL | https://luffly.app/support/ (`/es/support/`, `/ca/support/`) |
| Privacy Policy URL | https://luffly.app/privacy/ (`/es/privacy/`, `/ca/privacy/`) |
| Terms of Use (EULA) | Apple's standard EULA, summarised and extended at https://luffly.app/terms/ |

The app's `AppLinks.privacyPolicy` already points at `https://luffly.app/privacy`.

## Develop

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview
```

## Where things are

| Path | What |
|---|---|
| `src/consts.ts` | Contact email, **App Store id** (null shows "Coming soon" and no Smart App Banner), Pro prices, legal date |
| `src/i18n/ui.ts` | Languages, URL helpers and the shape of the texts |
| `src/i18n/strings/*.ts` | Landing page texts, one file per language |
| `src/legal/*.md` | Privacy policy, terms and support/FAQ, one Markdown file per page and language |
| `src/views/` | Home and legal page templates shared by every language |
| `src/styles/global.css` | Styles, with the app's palette (light and dark) at the top |
| `brand/icon-1024.png` | **The app icon**, source of every icon on the site |
| `brand/make-icons.sh` | Regenerates the favicon, Apple touch icon, `icon-512.png`, `og.jpg` and `src/assets/icon.png` from it |
| `public/fonts/` | Big Shoulders Display ExtraBold (OFL), the app's wordmark font, self-hosted |
| `src/assets/shots/` | App Store screenshots per language, `src/assets/shots/<lang>/01-….png` (none yet: the hero shows the icon instead and the gallery is hidden) |
| `public/` | Favicon, Apple touch icon, Open Graph image, robots.txt, CNAME |

The logo isn't final: the wordmark is plain text ("Luffly" in Big Shoulders Display). To change the
icon, replace `brand/icon-1024.png` and run `sh brand/make-icons.sh`.

When the privacy policy or terms change, edit the Markdown in every language and update
`LEGAL_UPDATED` in `src/consts.ts`. When the lifetime launch price ends, update `PRICES` in
`src/consts.ts` (the comment there explains how).

The content comes from the app repo (tillerlog-ios): `docs/DECISIONS.md` 0.1 (Free and Pro, prices),
`docs/PRIVACY_POLICY.md` (privacy) and `Luffly/Resources/Localizable.xcstrings` (wording in Spanish
and Catalan).

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). `public/CNAME` holds the custom domain, `luffly.app`, whose
DNS points at GitHub Pages:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www | pserracomas.github.io |

In the GitHub repo, Settings › Pages › Source must be "GitHub Actions".
