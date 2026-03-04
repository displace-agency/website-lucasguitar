# Lucas Terhaar Guitar

Personal website for Lucas Terhaar — guitar teacher based in Berlin offering personalized lessons for kids and adults.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router (HashRouter)
- Lucide Icons

## Project Structure

```
├── App.tsx                 # Root component with routing
├── contexts/
│   └── LanguageContext.tsx  # EN/DE i18n provider
├── locales/
│   ├── en.json             # English strings
│   └── de.json             # German translations
├── components/
│   ├── Navbar.tsx           # Nav with language toggle
│   ├── Hero.tsx             # Homepage hero with video
│   ├── TrustBar.tsx         # Stats bar
│   ├── AboutSection.tsx     # About Lucas
│   ├── ForKidsPreview.tsx   # Kids lessons preview
│   ├── Testimonials.tsx     # Student testimonials
│   ├── FinalCTA.tsx         # Call to action
│   ├── Footer.tsx           # Site footer
│   ├── CookieBanner.tsx     # Cookie consent
│   ├── WhatsAppButton.tsx   # Floating WhatsApp button
│   ├── LessonHighlights.tsx # Lesson highlights
│   └── ui/Button.tsx        # Reusable button component
├── pages/
│   ├── Home.tsx             # Homepage
│   ├── HowITeach.tsx        # Teaching philosophy & method
│   ├── Pricing.tsx          # Pricing tables & FAQ
│   ├── Contact.tsx          # Multi-step booking wizard
│   ├── ForKids.tsx          # Kids-specific landing page
│   ├── TeachingMethod.tsx   # Detailed teaching method
│   └── NotFound.tsx         # 404 page
├── hooks/
│   └── useScrollAnimation.ts
└── public/assets/           # Images and videos
```

## i18n

Custom context-based solution (no external library). Two JSON locale files with dot-notation lookup via `t('key.path')` and direct dictionary access via `dict` for array data. Language persists in `localStorage`.

Toggle is in the Navbar (EN/DE). Contact form values are submitted in English regardless of display language.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
