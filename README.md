# Zerodha 

**[Project Overview Video](https://youtu.be/rbR2rZqGqhI)** - This video is a complete overview of this project.


A comprehensive full-stack web application that replicates the core functionalities of the Zerodha trading platform. This project is divided into three main components: a user-facing frontend, an interactive trading dashboard, and a robust backend API.

## 🚀 Project Architecture

The repository is structured as a multi-package repository with three distinct applications:

- **Frontend**: The main landing and informational website.
- **Dashboard**: The interactive trading terminal/dashboard where users can view charts, manage their portfolios, and simulate placing orders.
- **Backend**: The REST API that powers both the frontend and the dashboard, handling user authentication, data management, and business logic.

## 🛠️ Technologies Used

### Backend (`/backend`)
- **Node.js & Express.js**: Core server and RESTful API framework.
- **MongoDB & Mongoose**: NoSQL database and object data modeling.
- **Authentication**: JWT (JSON Web Tokens), Passport.js, and bcrypt for secure user registration, login, and session management.
- **Other Utilities**: CORS, cookie-parser, dotenv.

### Frontend (`/frontend`)
- **React 19 & Vite**: Fast, modern frontend framework and build tool.
- **React Router DOM**: Client-side routing for seamless navigation.
- **Styling & UI**: FontAwesome for icons, React Toastify for intuitive user notifications.
- **HTTP Client**: Axios for fetching data from the backend API.
- **Testing**: Vitest and React Testing Library.

### Dashboard (`/dashboard`)
- **React 19 & Vite**: Core framework and bundler.
- **Material UI (MUI) & Emotion**: Comprehensive UI component library for building a sleek, professional, and responsive trading interface.
- **Charting**: Chart.js and `react-chartjs-2` for rendering dynamic financial charts and real-time data visualizations.
- **Routing & Networking**: React Router DOM and Axios.

## 📂 Folder Structure

```text
zerodha/
├── backend/       # Node.js Express API server (Authentication, Database Models, Routes)
├── dashboard/     # React application for the trading terminal (Charts, Portfolio, Orders)
└── frontend/      # React application for the main landing page (Home, About, Pricing, etc.)
```

## ⚙️ How to Run Locally

To run the full application, you will need to start all three servers concurrently. Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### 1. Setup and Start the Backend
```bash
cd backend
npm install
npm start
```
The backend server will start using nodemon for automatic restarts on file changes.

### 2. Setup and Start the Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The Vite development server will start the frontend application.

### 3. Setup and Start the Dashboard
Open another new terminal window:
```bash
cd dashboard
npm install
npm run dev
```
The Vite development server will start the dashboard application.

## 🔐 Environment Variables

You will need to configure environment variables for the backend to connect to your database and handle authentication. Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
# Add other required environment variables (e.g., JWT_SECRET) here
```
