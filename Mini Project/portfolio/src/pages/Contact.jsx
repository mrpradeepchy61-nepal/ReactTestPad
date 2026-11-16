
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.includes("@") || !message.trim()) {
      alert("Please enter valid details!");
      return;
    }

    alert("Message submitted successfully!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="container">
      <h1>Contact Me</h1>
      <p className="subtitle">Let's connect and work together.</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
