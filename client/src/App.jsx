import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminQualifications from "./pages/AdminQualifications";
import AdminContacts from "./pages/AdminContacts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route 
            path="/admin/projects" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminProjects />
              </ProtectedRoute>
            }
          />

          <Route 
            path="/admin/qualifications" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminQualifications />
              </ProtectedRoute>
            }
          />

          <Route 
            path="/admin/contacts" 
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminContacts />
              </ProtectedRoute>
            }
          />

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
