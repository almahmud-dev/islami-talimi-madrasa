# Madrasah Landing Page (Next.js + Tailwind CSS)

## Setup
```bash
npm install
npm run dev
```

## Kalpurush Font (জরুরি)
Kalpurush Google Fonts এ available na, tai local font hisebe load kora hoise.
1. Kalpurush.ttf file ta download koro.
2. `public/fonts/Kalpurush.ttf` path e rekho (already sekhane referred `app/globals.css`-e).
3. Chaile `next/font/local`-o use korte paro, kintu ekhon simple `@font-face` diye kora hoise.

## File Structure
```
app/
  layout.jsx       -> Root layout, Kalpurush font, metadata
  page.jsx          -> Homepage (sob section eksathe)
  globals.css        -> Tailwind v4 import + font-face + theme colors
components/
  ui/Container.jsx   -> Reusable max-width wrapper
  Navbar.jsx          -> Sticky navbar (client component - mobile menu)
  Hero.jsx             -> Banner/hero section
  IntroSection.jsx     -> Madrasah intro + stats
  CourseCard.jsx        -> Single course card
  CoursesSection.jsx    -> Courses grid (reused for "ফ্রি কোর্সসমূহ" o)
  DepartmentsSection.jsx -> শাখা ও বিভাগসমূহ grid
  WhyChooseUs.jsx        -> কেন ভর্তি হবেন reasons grid
  Testimonials.jsx       -> Parent/student quotes
  VideoReports.jsx       -> প্রতিবেদন video thumbnails
  Gallery.jsx             -> গ্যালারী photo grid
  Footer.jsx               -> Footer
helper/
  data.js  -> Shob static content (nav links, courses, departments, testimonials etc.)
```

## Notes
- Sob card/section-er data `helper/data.js` e centralized - shudhu oikhane text/image change korle full site update hoye jabe.
- Image gula ekhon `placehold.co` diye placeholder - real image gula Cloudinary te upload kore `helper/data.js` e URL replace kore dio.
- `Navbar.jsx` chara baki sob component Server Component - performance er jonno bhalo.
- Tailwind v4 use kora hoise (`@import "tailwindcss"` + `@theme inline`), tai `tailwind.config.js` lagbe na.
