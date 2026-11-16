
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="hello">Hello, I'm</p>
        <h1>Pradeep</h1>
        <h2>React Developer</h2>

        <p>
          I build responsive and user-friendly web applications
          using React, JavaScript and modern web technologies.
          I also have experience with Java, AWS and DevOps tools.
        </p>

        <Link to="/projects" className="btn">
          View My Projects
        </Link>

        <Link to="/contact" className="btn btn-outline">
          Contact Me
        </Link>
      </div>

      <div className="profile">P</div>
    </section>
  );
}

export default Home;
