import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <div>
          <h1>Hi, I’m Jasmine — Developer • Student • Problem Solver</h1>
          <p>
            Welcome to my personal portfolio. I love building clean, accessible web apps
            and learning by shipping. Have a look around!
          </p>
          <div className="cta-row">
            <Link to="/about" className="button">About Me</Link>
            <Link to="/projects" className="button secondary">View Projects</Link>
          </div>
        </div>
        <div className="card">
          <h3>Mission</h3>
          <p>
            Build user‑centric experiences that are performant, secure, and delightful.
            I value teamwork, iteration, and craftsmanship.
          </p>
        </div>
      </section>
    </div>
  )
}
