import React, { Suspense } from "react";
const ProjectCard = React.lazy(() => import("./ProjectCard"));

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      link: "https://your-portfolio-link.com",
      image: "/assets/portfolio.png",
    },
    {
      title: "E-commerce App",
      description: "A full-stack MERN e-commerce website with payment integration.",
      link: "https://your-ecom-app-link.com",
      image: "/assets/ecommerce.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <Suspense fallback={<p>Loading projects...</p>}>
        <div className="projects-container">
          {projectList.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Projects;
