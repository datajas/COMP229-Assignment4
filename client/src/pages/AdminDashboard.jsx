import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Admin Dashboard</h1>

      <p>Welcome, Admin! Choose what you want to manage:</p>

      <div style={{
        display: "grid",
        gap: "20px",
        marginTop: "30px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
      }}>
        
        <Link to="/admin/projects" className="admin-card">
          <div style={cardStyle}>
            <h2>Manage Projects</h2>
            <p>View, add, and edit your portfolio projects.</p>
          </div>
        </Link>

        <Link to="/admin/qualifications" className="admin-card">
          <div style={cardStyle}>
            <h2>Manage Qualifications</h2>
            <p>Edit education and certifications.</p>
          </div>
        </Link>

        <Link to="/admin/contacts" className="admin-card">
          <div style={cardStyle}>
            <h2>Contact Messages</h2>
            <p>View messages submitted through your portfolio.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  backdropFilter: "blur(5px)",
  color: "white",
  cursor: "pointer"
};
