import { useState, useEffect } from "react";
import api from "../api/axios";

export default function AdminProjects() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [projects, setProjects] = useState([]);

  // Fetch existing projects on load
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.log("Error loading projects");
    }
  };

  const addProject = async () => {
    try {
      await api.post("/api/projects", {
        title,
        description,
        link,
      });

      setTitle("");
      setDescription("");
      setLink("");
      fetchProjects();
    } catch (err) {
      alert("Failed to add project");
    }
  };

  const deleteProject = async (id) => {
    try {
      await api.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Manage Projects</h1>

      <div>
        <input placeholder="Project Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input placeholder="Project Link" value={link} onChange={e => setLink(e.target.value)} />
        <button onClick={addProject}>Add Project</button>
      </div>

      <h2 style={{ marginTop: "40px" }}>Existing Projects</h2>

      {projects.length === 0 ? <p>No projects yet.</p> : null}

      {projects.map((p) => (
        <div key={p._id} style={{
          background: "rgba(255,255,255,0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "10px"
        }}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <a href={p.link} target="_blank" rel="noreferrer">Visit Project</a>
          <br /><br />
          <button onClick={() => deleteProject(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
