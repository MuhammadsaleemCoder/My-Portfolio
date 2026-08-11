# Muhammad Saleem — Portfolio (MERN Stack)

Full-stack portfolio website built with MongoDB, Express, React (JSX), and Node.js.

## Project Structure

```
portfolio-mern/
├── client/        # React + Vite frontend (JSX)
└── server/        # Express + MongoDB backend
```

## Quick Start

### 1. Backend Setup

```bash
cd server
npm install
cp .env.example .env        # Edit MONGODB_URI if needed
npm run dev                 # Starts on http://localhost:5000
```

### 2. Frontend Setup

```bash
cd client
npm install
npm run dev                 # Starts on http://localhost:5173
```

Open **http://localhost:5173** in your browser.

## Environment Variables (server/.env)

| Variable       | Default                                  | Description            |
|----------------|------------------------------------------|------------------------|
| `PORT`         | `5000`                                   | Express server port    |
| `MONGODB_URI`  | `mongodb://localhost:27017/portfolio`    | MongoDB connection URL |

## API Endpoints

| Method | Endpoint        | Description                  |
|--------|-----------------|------------------------------|
| POST   | /api/contact    | Save contact form submission |
| GET    | /api/health     | Health check                 |

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide React, React Icons
- **Backend**: Node.js, Express 4, Mongoose 8
- **Database**: MongoDB
