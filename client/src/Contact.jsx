import { useState } from "react";
import api from "./api/axios";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        message: form.message
      };

      await api.post("/api/contacts", payload);

      setStatus("Message sent!");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  }

  return (
    <div className="container" style={{ padding: "40px", color: "white" }}>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px", maxWidth: "500px" }}>
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
