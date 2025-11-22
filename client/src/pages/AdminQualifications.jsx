import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminQualifications() {
  const [qualifications, setQualifications] = useState([]);
  const [title, setTitle] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState("");

  // Fetch existing qualifications
  const loadQualifications = async () => {
    const res = await api.get("/api/qualifications");
    setQualifications(res.data);
  };

  useEffect(() => {
    loadQualifications();
  }, []);

  const addQualification = async () => {
    if (!title || !institution || !year) {
      alert("Fill all fields");
      return;
    }

    await api.post("/api/qualifications", {
      title,
      institution,
      year
    });

    setTitle("");
    setInstitution("");
    setYear("");
    loadQualifications();
  };

  const deleteQualification = async (id) => {
    await api.delete(`/api/qualifications/${id}`);
    loadQualifications();
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Manage Qualifications</h1>

      <input 
        placeholder="Degree / Certificate" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        placeholder="School / Institution" 
        value={institution}
        onChange={(e) => setInstitution(e.target.value)}
      />
      <input 
        placeholder="Year" 
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button onClick={addQualification}>Add Qualification</button>

      <h2 style={{ marginTop: "40px" }}>Existing Qualifications</h2>

      {qualifications.map((q) => (
        <div 
          key={q._id} 
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "12px",
            marginTop: "10px",
            borderRadius: "8px"
          }}
        >
          <strong>{q.title}</strong> — {q.institution} ({q.year})
          <button 
            style={{ marginLeft: "20px" }}
            onClick={() => deleteQualification(q._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
