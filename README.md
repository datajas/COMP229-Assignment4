# Assignment 3

**Student:** *Jasmine Sidhu 301320742*  
**Course:** COMP229 – Web Application Development

---

##  Overview  
This project is a **full-stack MERN portfolio website** that includes:

### Public Pages  
- Home  
- About  
- Education  
- Services  
- Projects  
- Contact Form  

### Admin Portal (Protected)  
- Admin Login / Signup  
- Manage Projects  
- Manage Qualifications  
- View Contact Messages  

Only authenticated **admin** users can access `/admin/*` routes.

---

## Technologies Used  
### **Frontend (React + Vite)**
- React  
- React Router  
- Axios  
- CSS / Custom Styling  

### **Backend (Node.js + Express + MongoDB)**
- Node.js  
- Express  
- Mongoose  
- JWT Authentication  
- MongoDB Atlas  
- Helmet, CORS, Morgan  

---

## Project Structure  
```
Assignment2_JasmineSidhu-1/
 ├── client/         (React frontend)
 ├── server/         (Express backend)
 ├── server.js       (API entry)
 ├── .env
 └── README.md
```

---

## How to Run the Application

### **1. Install Dependencies**
```
cd Assignment2_JasmineSidhu-1
npm install
cd client
npm install
```

### **2. Start Backend**
```
npm run server
```
Backend runs at:
```
http://localhost:5000
```

### **3. Start Frontend (in /client)**
```
npm run dev
```
Frontend runs at:
```
http://localhost:5173
```

---

## Admin Credentials  
You can create an admin using the signup page:  
```
http://localhost:5173/signup
```
Or manually insert into MongoDB.

---

## API Endpoints Summary  

### **Auth**
| Method | Route | Description |
|------|--------|-------------|
| POST | `/api/auth/signup` | Register admin |
| POST | `/api/auth/signin` | Login |
| POST | `/api/auth/signout` | Logout |

### **Projects**
| Method | Route |
|------|--------|
| GET | `/api/projects` |
| POST | `/api/projects` |
| PUT | `/api/projects/:id` |
| DELETE | `/api/projects/:id` |

### **Qualifications**
| Method | Route |
|------|--------|
| GET | `/api/qualifications` |
| POST | `/api/qualifications` |
| PUT | `/api/qualifications/:id` |
| DELETE | `/api/qualifications/:id` |

### **Contact Messages**
| Method | Route |
|------|--------|
| POST | `/api/contacts` |
| GET | `/api/contacts` |

---

## Screenshots  

1. **Home Page Loaded**
2. **Admin Login Page**
3. **Admin Dashboard**
4. **Manage Projects Page**
5. **Manage Qualifications Page**
6. **Contact Messages Page (showing “No messages yet.” which is valid)**
7. **MongoDB Cluster showing your collections**
8. **Backend terminal showing "MongoDB Connected"**
9. **Frontend terminal showing Vite running**

---

