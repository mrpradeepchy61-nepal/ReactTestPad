
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Workforce Management System",
      desc: "Desktop application for managing employee and workforce information.",
      tech: ["Java", "Swing", "MySQL", "JDBC"]
    },
    {
      id: 2,
      name: "Smart Contact Manager",
      desc: "Web application for managing contacts with CRUD functionality.",
      tech: ["React", "Java", "Spring Boot", "MySQL"]
    },
    {
      id: 3,
      name: "AWS DevOps Application",
      desc: "Cloud-based application deployed using AWS, Docker and Kubernetes.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      id: 4,
      name: "Shopping Cart",
      desc: "React shopping cart application demonstrating global state management.",
      tech: ["React", "Redux Toolkit", "JavaScript", "CSS"]
    }
  ];

  return (
    <section className="container">
      <h1>My Projects</h1>
      <p className="subtitle">
        Some of the projects I have built using different technologies.
      </p>

      <div className="cards">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <span className="project-number">
              {String(p.id).padStart(2, "0")}
            </span>

            <h2>{p.name}</h2>
            <p>{p.desc}</p>

            {p.tech.map((t) => (
              <span className="tech" key={t}>{t}</span>
            ))}

            <br />

            <Link to={`/projects/${p.id}`}>
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
