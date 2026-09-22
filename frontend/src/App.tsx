import { profile, projects, skills } from "./data/portfolio";
import { useState, useEffect } from "react";



function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const selectedProject = projects.find(
    (project) => project.title === openProject,
  )
  useEffect(() => {
    if (openProject) {
      document.getElementById('project-details')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [openProject])

  return (
    <>
      <a className="skip-link" href="#content">Zum Inhalt springen</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Startseite">[DN]</a>
        <nav aria-label="Hauptnavigation">
          <a href="#about">Über mich</a>
          <a href="#projects">Projekte</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main id="content">
        <section className="hero section" id="home">
          <p className="eyebrow reveal">{profile.role}</p>
          <h1 className="reveal">Hi, ich bin Leonas</h1>
          <p className="hero-copy reveal">{profile.intro}</p>
          <div className="actions reveal">
            <a className="button button-primary" href="#projects">Projekte ansehen <ArrowIcon /></a>
            <a className="button button-ghost" href="#contact">Kontakt aufnehmen</a>
          </div>
          <div className="hero-meta reveal" aria-label="Schwerpunkte">
            <span>React & TypeScript</span><span>Webentwicklung</span><span>Saubere Architektur</span>
          </div>
        </section>

        <section className="section split" id="about">
          <div>
            <p className="eyebrow">Über mich</p>
            <h2>Technik mit Blick auf Menschen und Ergebnisse.</h2>
            <div className="prose">
              <p>Ich entwickle moderne Anwendungen mit besonderem Interesse an verständlichen Benutzeroberflächen, wartbarer Software und pragmatischen Lösungen.</p>
              <p>Diese beiden Absätze sind für deinen persönlichen Werdegang gedacht: Ausbildung, Berufserfahrung, Quereinstieg oder Selbststudium. Ersetze sie, sobald du deine Geschichte festgelegt hast.</p>
            </div>
          </div>

          <div className="about-photo">
            <img
              src="m1.jpeg"
              alt="Porträt von Leonas Freiherr von Medem"
            />
          </div>

        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">Ausgewählte Arbeiten</p><h2>Projekte</h2></div>
            <p>Jede Karte erklärt kurz den Nutzen, die Umsetzung und die verwendeten Technologien.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const isOpen = openProject === project.title

              return (
                <article className="project-card" key={project.title}>
                  <div className={`project-visual visual-${index + 1}`} aria-hidden="true"><span>{project.category}</span></div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tags" aria-label={`Technologien für ${project.title}`}>
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="project-links">
                      <a href="#contact">GitHub <ArrowIcon /></a>

                      <button
                        type="button"
                        onClick={() => setOpenProject(isOpen ? null : project.title)}
                        aria-expanded={isOpen}
                        aria-controls="project-details"
                      >
                        {isOpen ? 'Details schließen' : 'Details'} <ArrowIcon />
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {selectedProject && (
            <div className="project-details-content"
              id="project-details">
              <p className="eyebrow">{selectedProject.category}</p>
              <h3>{selectedProject.title}</h3>

              <div className="details-grid">
                <section>
                  <h4>Ausgangsproblem</h4>
                  <p>{selectedProject.details.problem}</p>
                </section>

                <section>
                  <h4>Mein konkreter Beitrag</h4>
                  <p>{selectedProject.details.contribution}</p>
                </section>

                <section>
                  <h4>Technische Umsetzung</h4>
                  <p>{selectedProject.details.implementation}</p>
                </section>

                <section>
                  <h4>Ergebnis &amp; Learnings</h4>
                  <p>{selectedProject.details.outcome}</p>
                </section>
              </div>

              {(selectedProject.details.liveUrl ||
                selectedProject.details.githubUrl ||
                selectedProject.details.screenshots?.length) && (
                  <section className="project-resources">
                    <h4>05 — Projekt ansehen</h4>

                    {selectedProject.details.screenshots?.length && (
                      <div className="screenshot-gallery">
                        {selectedProject.details.screenshots.map((screenshot) => (
                          <figure key={screenshot.src}>
                            <img
                              src={screenshot.src}
                              alt={screenshot.alt}
                              loading="lazy"
                            />
                          </figure>
                        ))}
                      </div>
                    )}

                    <div className="resource-links">
                      {selectedProject.details.liveUrl && (
                        <a href={selectedProject.details.liveUrl} target="_blank" rel="noreferrer">
                          Live-Demo <ArrowIcon />
                        </a>
                      )}

                      {selectedProject.details.githubUrl && (
                        <a href={selectedProject.details.githubUrl} target="_blank" rel="noreferrer">
                          GitHub <ArrowIcon />
                        </a>
                      )}
                    </div>
                  </section>
                )}

              <button
                type="button"
                className="details-close"
                onClick={() => setOpenProject(null)}
              >
                Details schließen
              </button>
            </div>
          )}
        </section>

        <section className="section skills-section" id="skills">
          <p className="eyebrow">Technologien</p>
          <h2>Mein Werkzeugkasten</h2>
          <div className="skill-list">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Kontakt</p>
          <div className="contact-links">
            <a href="mailto:{profile.email}">{profile.email} <ArrowIcon /></a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          </div>
        </section>
      </main>
      <footer><span>{profile.name}</span></footer>
    </>
  )
}
