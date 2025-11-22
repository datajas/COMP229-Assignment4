import { useEffect, useState } from "react";
import api from "./api/axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error loading projects:", err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((proj) => (
          <div key={proj._id} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.url && (
              <a href={proj.url} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
