# khorkovsergey.com

Personal executive landing page for Sergey Khorkov.  
Built with Next.js 14, React, Tailwind CSS. Bilingual (RU/EN).

## Project Structure

```
khorkov-site/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind + custom styles
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page (client component)
│   ├── components/
│   │   ├── Header.tsx           # Sticky nav + language switcher
│   │   ├── Hero.tsx             # First screen / about
│   │   ├── Career.tsx           # Career timeline
│   │   ├── Roles.tsx            # Titles vs real roles (key section)
│   │   ├── Expertise.tsx        # Capability blocks
│   │   ├── Results.tsx          # Metrics and outcomes
│   │   ├── Approach.tsx         # Working philosophy
│   │   ├── Interests.tsx        # Personal interests
│   │   ├── Contact.tsx          # Contact block
│   │   └── Footer.tsx           # Footer
│   ├── content/
│   │   ├── ru.ts                # Full Russian content dictionary
│   │   └── en.ts                # Full English content dictionary
│   └── lib/
│       ├── i18n.tsx             # i18n context + provider + hook
│       └── useScrollReveal.ts   # Intersection Observer for animations
├── public/
│   └── (favicon.ico, CV files, OG images go here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── next.config.js
```

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

## Deploy to Vercel

### Option A: Via CLI
```bash
npm i -g vercel
vercel
# Follow prompts. Set framework to Next.js.
```

### Option B: Via GitHub
1. Push repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js — click Deploy
4. Add custom domain: Settings → Domains → add `khorkovsergey.com`

### Post-deploy checklist
- Add `favicon.ico` and `og-image.png` to `/public`
- Add CV PDF to `/public` and update download links in `ru.ts` / `en.ts`
- Update Telegram, email, and LinkedIn URLs in content files
- Set up custom domain DNS (A record or CNAME to Vercel)

## How to Add / Edit Content

All content lives in two files:
- `src/content/ru.ts` — Russian version
- `src/content/en.ts` — English version

Both files share the exact same TypeScript structure. Edit text directly in these files — no CMS needed.

## How to Complete the English Version

The English version (`src/content/en.ts`) is already fully structured and populated with translated content. To refine it:

1. Open `src/content/en.ts`
2. Review and polish each section's text
3. Ensure the tone is natural English (not translated-from-Russian)
4. The language switcher in the header already works — toggling EN loads this file

The i18n system (`src/lib/i18n.tsx`) uses a React context with a simple dictionary approach. No external i18n library needed for a site this size.

## Design Tokens

Colors, fonts, and spacing are configured in `tailwind.config.js`:
- **Colors**: cream, warm, sand, charcoal, graphite, stone, copper (accent)
- **Fonts**: DM Serif Display (headings), Onest (body — supports Cyrillic)
- **Domain colors**: finance=amber, operations=slate, platform=sky, product=emerald, transformation=violet
