export default function Services(){
  const svc = [
    { title: "Web Development", desc: "React SPAs, responsive UI, Vite builds" },
    { title: "Data & Dashboards", desc: "KPIs, trend charts, security metrics" },
    { title: "Automation", desc: "Scripting for scans, reports, notifications" },
  ]

  return (
    <div className="container">
      <h2>Services</h2>
      <div className="card-grid">
        {svc.map((s, i) => (
          <div className="card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
