import headshot from "./assets/headshot.jpg";

export default function About() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        color: "white",
      }}
    >
      <h1>About Me</h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Profile Image */}
        <img
          src={headshot}
          alt="Jasmine Sidhu Headshot"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid rgba(255,255,255,0.3)",
          }}
        />

        {/* About Text */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
            Hi! I'm <strong>Jasmine Sidhu</strong>, a full-stack MERN developer
            and medical student passionate about building clean, modern web
            applications. My technical background includes JavaScript, React,
            Node.js, Express, MongoDB, REST APIs, UI design, and authentication
            systems.
          </p>

          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
            This portfolio project was developed as part of **COMP229**, where I
            built a complete MERN-stack system that includes:
          </p>

          <ul style={{ marginLeft: "20px", lineHeight: "1.6" }}>
            <li>React frontend with routing</li>
            <li>Admin-protected dashboard</li>
            <li>CRUD management for projects & qualifications</li>
            <li>REST API backend with Node & Express</li>
            <li>MongoDB Atlas database integration</li>
          </ul>

          <p style={{ lineHeight: "1.6", fontSize: "1.1rem" }}>
            I enjoy building intuitive interfaces, automation tools, and backend
            systems that solve real problems. My long-term goals include
            combining my technical and medical background to innovate in
            healthcare technology.
          </p>

          {/* Resume Button */}
          <a
            href="/src/assets/resume.pdf"
            download
            style={{
              marginTop: "20px",
              display: "inline-block",
              padding: "10px 20px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
