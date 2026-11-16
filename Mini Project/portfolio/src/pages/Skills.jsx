
function Skills() {
  const skills = [
    ["React", "Advanced", 80],
    ["JavaScript", "Advanced", 85],
    ["HTML & CSS", "Advanced", 80],
    ["Java", "Intermediate", 80],
    ["MySQL", "Intermediate", 85],
    ["AWS", "Intermediate", 80],
    ["Docker", "Intermediate", 80],
    ["Kubernetes", "Intermediate", 85],
    ["Terraform", "Intermediate", 80]
  ];

  return (
    <section className="container">
      <h1>My Skills</h1>
      <p className="subtitle">
        Technologies and tools that I use to build
        applications and solve technical problems.
      </p>

      <div className="cards">
        {skills.map((skill) => (
          <div className="skill-card" key={skill[0]}>
            <h3>{skill[0]}</h3>
            <p>{skill[1]}</p>

            <div className="progress">
              <span style={{ width: skill[2] + "%" }}></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
