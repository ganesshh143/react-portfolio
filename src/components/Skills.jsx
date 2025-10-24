import React, { useEffect } from "react";


const Skills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Bootstrap / Tailwind", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Git / GitHub", level: 90 },
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-category">{category.title}</h3>
            {category.items.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-name">{skill.name}</div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
