import React, { Suspense, lazy } from "react";
import "./App.css";

// Lazy load major sections for performance (code-splitting)
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      {/* Suspense adds a fallback while components lazy-load */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Navbar />
        <main>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
