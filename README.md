# RoboGyaan — Robotics for Indian Classrooms

> **From empty lab to robot demo day.** RoboGyaan brings hands-on robotics, coding, and 3D design programs directly into Indian schools — no fancy infrastructure required.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88ce02?logo=greensock)](https://gsap.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-000?logo=three.js)](https://threejs.org/)

---

## 🎯 What is RoboGyaan?

RoboGyaan is a **complete robotics education platform** designed for Indian schools. We visit your school, assess existing computer-lab infrastructure, and deliver a structured, grade-wise curriculum — from Class 5 (first sparks with 3D puzzles & block coding) to Class 8 (Arduino sensor projects & showcase bots).

**Key differentiators:**
- 🏫 **Works with what you have** — no new lab build-outs
- 👨‍🏫 **Trained instructors included** — we teach, you don't need specialist staff
- 📊 **Tracked outcomes** — attendance & progress per student
- 🎪 **Demo days & competitions** — terms end with student showcases

---

## ✨ Features

### 🎨 Modern Tech Stack
| Technology | Purpose |
|------------|---------|
| **Next.js 15 (App Router)** | React framework with server components & Turbopack |
| **React 19** | Latest concurrent features |
| **TypeScript** | Full type safety |
| **Tailwind CSS v4** | Utility-first styling with new engine |
| **GSAP + ScrollTrigger** | High-performance scroll animations |
| **Three.js (r185)** | Interactive 3D WebGL robot scene |

### 🤖 Interactive 3D Hero
- Real-time WebGL scene with **6 animated microcontroller boards** orbiting a glowing core
- Boards modeled: **micro:bit, Raspberry Pi, Arduino Uno, ESP32, Banana Pi**
- Mouse-parallax interaction, animated rings, particle stars
- Fully responsive — scales down on mobile

### 🎬 GSAP-Powered Animations
- Staggered text reveals in Hero
- Scroll-triggered step cards in "How It Works"
- Progress line scrub animation
- Smooth card entrance/exit with `gsap.context` for cleanup

### 📚 Grade-Wise Curriculum (Classes 5–8)
| Grade | Focus | Tools |
|-------|-------|-------|
| **Class 5** | First sparks | 3D magnetic puzzles, Code Monkey Jr., RoboCodo |
| **Class 6** | Making things move | micro:bit, Avishkaar RC builds, Minecraft/Code.org, App Inventor |
| **Class 7** | Serious circuits | micro:bit → Arduino Uno, Blockly, Avishkaar advanced |
| **Class 8** | Engineers at work | Arduino sensor projects, Codeblocks capstone, showcase bots |

### 🧩 Additional Sections
- **Trust Bar** — partner logos & stats
- **Offer** — program packages
- **Gallery** — student project showcase
- **Testimonials** — school feedback carousel
- **CTA Section** — demo booking
- **Footer** — contact, links, newsletter

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm / pnpm / yarn / bun

### Installation
```bash
# Clone the repo
git clone https://github.com/your-org/robogyaan-web.git
cd robogyaan-web

# Install dependencies
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
# Opens at http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

---

## 📁 Project Structure

```
robogyaan-web/
├── app/
│   ├── page.tsx           # Home page — composes all sections
│   ├── layout.tsx         # Root layout, fonts, metadata
│   ├── globals.css        # Tailwind v4 imports + custom CSS
│   └── favicon.svg
├── components/
│   ├── Hero.tsx           # Landing hero with 3D scene + GSAP
│   ├── RobotScene.tsx     # Three.js interactive 3D scene
│   ├── Navbar.tsx         # Sticky navigation
│   ├── TrustBar.tsx       # Partner logos & metrics
│   ├── Offer.tsx          # Program packages
│   ├── HowItWorks.tsx     # 4-step process with scroll animations
│   ├── Curriculum.tsx     # Grade-wise curriculum tabs
│   ├── Gallery.tsx        # Student project gallery
│   ├── Testimonials.tsx   # School testimonials carousel
│   ├── CTASection.tsx     # Call-to-action for demo booking
│   ├── Footer.tsx         # Site footer
│   └── ContactForm.tsx    # Demo request form
├── public/
│   ├── og-image.svg       # Open Graph image
│   └── favicon.svg
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

---

## 🎨 Design System

### Colors (CSS Custom Properties via Tailwind v4)
```css
/* Primary brand */
--neon-400: #22d3ee;    /* Cyan accent */
--grape-500: #a78bfa;   /* Purple accent */
--zap-400: #facc15;     /* Yellow accent */
--rose-400: #f472b6;    /* Pink accent */

/* Dark theme base */
--ink: #0a0a12;         /* Near-black background */
--ink-2: #11111a;       /* Card backgrounds */
```

### Typography
- **Headlines:** `Inter` (via `next/font`)
- **Body:** `Inter`
- **Code/Mono:** `JetBrains Mono` / `ui-monospace`

### Utilities
- `.glass` — backdrop-blur card style
- `.glow-card` — subtle neon border glow
- `.text-gradient` — cyan→purple gradient text
- `.blob-grid-bg` — animated background pattern

---

## 🔧 Customization

### Adding a New Grade to Curriculum
Edit `components/Curriculum.tsx`:
```tsx
const GRADES = [
  // ...existing grades
  {
    band: "Class 9",
    tagline: "Advanced systems",
    color: "border-cyan-400/60 bg-cyan-400/10 text-cyan-400",
    modules: [
      { topic: "IoT", detail: "ESP32 + sensors + cloud dashboards" },
      { topic: "AI/ML", detail: "TinyML on microcontrollers" },
    ],
  },
];
```

### Modifying the 3D Scene
Edit `components/RobotScene.tsx`:
- Add new board models in `create*()` functions
- Register in `boards` array with `radius`, `angle`, `speed`, `color`
- Adjust `ringConfigs` for orbital rings

### Animation Tweaks
All GSAP animations use `gsap.context(rootRef)` for automatic cleanup on unmount. Timing, easing, and triggers are inline — search for `gsap.from`, `gsap.fromTo`, `gsap.to`.

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Auto-detects Next.js, builds with Turbopack.

### Docker
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

> Add `output: 'standalone'` to `next.config.js` for Docker.

---

## 📝 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for SEO/OG |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://robogyaan.in
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ♿ Accessibility

- Semantic HTML5 (`<section>`, `<main>`, `<nav>`, `<footer>`)
- `aria-hidden="true"` on decorative 3D canvas
- Focus-visible outlines on all interactive elements
- Sufficient color contrast (WCAG AA)
- Reduced-motion respected via `@media (prefers-reduced-motion)`
- Alt text on all content images

---

## 🧪 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 110+ |
| Firefox | 110+ |
| Safari | 16+ |
| Edge | 110+ |

Requires: `WebGL2`, `IntersectionObserver`, `CSS Grid`, `CSS Custom Properties`

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push: `git push origin feat/amazing-feature`
5. Open a Pull Request

### Code Style
- **ESLint** (`eslint-config-next`) — runs on `npm run lint`
- **Prettier** — format on save recommended
- **TypeScript strict mode** — no `any` without justification

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- **GSAP** — buttery-smooth animations
- **Three.js** — 3D on the web
- **Tailwind CSS** — rapid styling
- **Vercel** — Next.js & hosting
- **Inter font** — by Rasmus Andersson
- **Indian schools & students** — the real inspiration

---

## 📞 Contact

**RoboGyaan Team**  
🌐 [robogyaan.in](https://robogyaan.in)  
📧 hello@robogyaan.in  
🐦 [@RoboGyaan](https://twitter.com/RoboGyaan)

---

> Built with ❤️ for the next generation of Indian makers.