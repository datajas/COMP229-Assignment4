import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminContacts() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get("/api/contacts");
        setMessages(res.data || []);
      } catch (err) {
        console.error("Failed to load messages:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Contact Messages</h1>

      {loading && <p>Loading...</p>}

      {!loading && messages.length === 0 && (
        <p>No <strong>messages</strong> yet.</p>
      )}

      <div style={{ marginTop: "30px" }}>
        {messages.map((msg) => (
          <div
            key={msg._id}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h3>{msg.firstName} {msg.lastName}</h3>

            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Phone:</strong> {msg.phone}</p>

            <p><strong>Message:</strong> {msg.message}</p>

            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
