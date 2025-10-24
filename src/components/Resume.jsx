import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "30px",
          color: "#111",
        }}
      >
        Resume
      </h2>

      {/* Resume Download Button */}
      <a
        href="/Ganesh_Mandave_Resume.pdf"
        download
        style={{
          display: "inline-block",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          marginBottom: "40px",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "#007bff")}
      >
        Download Resume
      </a>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Education Section */}
        <h3 style={{ color: "#007bff", marginBottom: "10px" }}>Education</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <strong>Bachelor of Computer Engineering</strong> — Savitribai Phule Pune University (2023)
          </li>
          <li style={{ marginTop: "8px" }}>
            Relevant Coursework: Web Development, Data Structures, Databases, Cloud Computing
          </li>
        </ul>

        <hr style={{ margin: "30px 0" }} />

        {/* Experience Section */}
        <h3 style={{ color: "#007bff", marginBottom: "10px" }}>Experience</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <strong>Frontend Developer Intern</strong> — XYZ Tech (Jan 2024 - Apr 2024)
            <p style={{ marginTop: "5px" }}>
              • Built responsive React interfaces and optimized component performance.  
              • Collaborated with backend team to integrate REST APIs.  
              • Enhanced UX using React Router and context-based state management.
            </p>
          </li>
        </ul>

        <hr style={{ margin: "30px 0" }} />

        {/* Skills Section */}
        <h3 style={{ color: "#007bff", marginBottom: "10px" }}>Technical Skills</h3>
        <p>
          <strong>Languages:</strong> JavaScript, Java, Python  
          <br />
          <strong>Frontend:</strong> React, HTML5, CSS3, Bootstrap, Tailwind  
          <br />
          <strong>Backend:</strong> Node.js, Express  
          <br />
          <strong>Database:</strong> MongoDB, MySQL  
          <br />
          <strong>Tools:</strong> Git, GitHub, VS Code, Postman
        </p>
      </div>
    </section>
  );
};

export default Resume;
