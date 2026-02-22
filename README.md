# Anuj Gupta | Portfolio

Production-ready portfolio for a Backend and AI Systems Engineer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For faster compilation during development, use Turbopack:

```bash
npm run dev:turbo
```

## Deploy (Vercel)

```bash
npm run build
```

Connect the repo to Vercel for automatic deployments.

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Add your resume PDF here
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ProfessionalSummary.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── TechnicalSkills.tsx
│       ├── Achievements.tsx
│       ├── ArchitecturePhilosophy.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Customization

- **Resume**: Place your PDF at `public/resume.pdf`
- **Contact links**: Update email, LinkedIn, GitHub, LeetCode URLs in `src/components/Contact.tsx`
- **Contact form**: Wire to your backend or use a service like Formspree
