# Assignment 2 – Portfolio API (Node, Express, MongoDB)

**Student:** *Jasmine Sidhu*  
**Course:** COMP229 – Web Application Development

This repository contains the backend REST APIs for the Portfolio application using **Node.js**, **Express**, and **MongoDB (Mongoose)**, plus authentication with **JWT**.

## Getting Started

1. Create `.env` from `.env.example` and set `MONGODB_URI` and `JWT_SECRET`.
2. (Optional) Replace the `client/` placeholder with your Assignment 1 frontend.
3. Install deps:
   ```bash
   npm install
   ```
4. Run concurrently (client + server):
   ```bash
   npm run dev
   ```
   - Backend: http://localhost:5000  
   - Frontend: http://localhost:5173 (if Vite client exists)

## API Base

- Base URL: `http://localhost:${PORT||5000}`

### Contacts
- `GET /api/contacts`
- `GET /api/contacts/:id`
- `POST /api/contacts`
- `PUT /api/contacts/:id`
- `DELETE /api/contacts/:id`
- `DELETE /api/contacts`

### Projects
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `DELETE /api/projects`

### Qualifications
- `GET /api/qualifications`
- `GET /api/qualifications/:id`
- `POST /api/qualifications`
- `PUT /api/qualifications/:id`
- `DELETE /api/qualifications/:id`
- `DELETE /api/qualifications`

### Users
- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `DELETE /api/users`

### Auth
- `POST /api/auth/signup` – name, email, password
- `POST /api/auth/signin` – email, password
- `POST /api/auth/signout`

Use the returned `token` as `Authorization: Bearer <token>` for protected routes.

## Postman
A Postman collection is provided under `postman/Assignment2_JasmineSidhu.postman_collection.json`.
