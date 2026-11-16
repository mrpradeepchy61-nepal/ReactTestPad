
import { useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      name: "Workforce Management System",
      desc: "A desktop application to manage employee records and workforce information.",
      tech: "Java, Swing, MySQL, JDBC"
    },
    {
      id: 2,
      name: "Smart Contact Manager",
      desc: "A web application that allows users to add, update, delete and manage contacts.",
      tech: "React, Java, Spring Boot, MySQL"
    },
    {
      id: 3,
      name: "AWS DevOps Application",
      desc: "A cloud application using AWS and DevOps technologies.",
      tech: "AWS, Docker, Kubernetes, Terraform"
    },
    {
      id: 4,
      name: "Shopping Cart",
      desc: "An online shopping application with product listing and cart management.",
      tech: "React, Redux Toolkit, JavaScript, CSS"
    }
  ];

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <h1 className="container">Project Not Found!</h1>;
  }

  return (
    <section className="container">
      <h1>{project.name}</h1>
      <p className="subtitle">{project.desc}</p>
      <div className="card">
        <h2>Technologies Used</h2>
        <p>{project.tech}</p>
      </div>
      <br />
      <Link to="/projects" className="btn">
        Back to Projects
      </Link>
    </section>
  );
}

export default ProjectDetails;
