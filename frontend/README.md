# Portfolio Frontend

React + Vite + TypeScript + Tailwind CSS + Framer Motion

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Axios** - HTTP client for API calls
- **React Router DOM** - Client-side routing

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProfessionalSummary.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── TechnicalSkills.tsx
│   │   ├── Achievements.tsx
│   │   ├── ArchitecturePhilosophy.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── api.ts       # Axios API client (calls Spring Boot backend)
│   ├── App.tsx          # Root app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles + Tailwind directives
├── index.html
├── vite.config.ts       # Vite config (proxy to backend at :8080)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000

> The Vite dev server proxies `/api` requests to `http://localhost:8080` (Spring Boot backend).

### Build for Production

```bash
npm run build
```

Output is in `dist/`.

## Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_BASE_URL=http://localhost:8080
```

For production, set it to your deployed backend URL.

## Contact Form

The `Contact.tsx` component sends form data to the Spring Boot backend at `POST /api/contact`.
Make sure the backend is running before testing the contact form.
