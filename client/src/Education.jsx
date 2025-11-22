export default function Education(){
  const items = [
    { year: "2027 (expected)", credential: "B.Com, Accounting (York University)", details: "Coursework in web development, HRM, and cybersecurity."},
    { year: "2025", credential: "Comp courses & labs", details: "Projects in Java, Python, and web applications."},
  ]

  return (
    <div className="container">
      <h2>Education</h2>
      <div className="card-grid">
        {items.map((e, i) => (
          <div className="card" key={i}>
            <h3>{e.credential}</h3>
            <p><strong>Year:</strong> {e.year}</p>
            <p>{e.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
