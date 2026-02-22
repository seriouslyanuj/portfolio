# Portfolio - Full Stack (React + Spring Boot)

Restructured from Next.js monolith.

**Live Demo:** https://seriouslyanuj.github.io/portfolio/

## Project Structure

```
portfolio/
├── frontend/   # React + Vite + TypeScript + Tailwind
└── backend/    # Spring Boot 3.3 + Java 17
```

## Quick Start

```bash
# Terminal 1 - Start Spring Boot
cd backend && mvn spring-boot:run

# Terminal 2 - Start React
cd frontend && npm install && npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- Health: http://localhost:8080/api/health

See `frontend/README.md` and `backend/README.md` for detailed docs.
