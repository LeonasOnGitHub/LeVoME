import {profile, projects} from "./data/portfolio";

const skills = ['React', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java', 'SQL', 'Git & GitHub', 'Scala']

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
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
          </div>
          <div className="prose">
            <p>Ich entwickle moderne Anwendungen mit besonderem Interesse an verständlichen Benutzeroberflächen, wartbarer Software und pragmatischen Lösungen.</p>
            <p>Diese beiden Absätze sind für deinen persönlichen Werdegang gedacht: Ausbildung, Berufserfahrung, Quereinstieg oder Selbststudium. Ersetze sie, sobald du deine Geschichte festgelegt hast.</p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">Ausgewählte Arbeiten</p><h2>Projekte</h2></div>
            <p>Jede Karte erklärt kurz den Nutzen, die Umsetzung und die verwendeten Technologien.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${index + 1}`} aria-hidden="true"><span>{project.category}</span></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags" aria-label={`Technologien für ${project.title}`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links"><a href="#contact">GitHub <ArrowIcon /></a><a href="#contact">Details <ArrowIcon /></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <p className="eyebrow">Technologien</p>
          <h2>Mein Werkzeugkasten</h2>
          <div className="skill-list">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Kontakt</p>
          <h2>Lass uns über dein nächstes Projekt sprechen.</h2>
          <p>Ersetze die Kontaktdaten durch deine beruflichen Profile und eine E-Mail-Adresse.</p>
          <div className="contact-links">
            <a href="mailto:hello@example.com">hello@example.com <ArrowIcon /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
          </div>
        </section>
      </main>
      <footer><span>© 2026 [Dein Name]</span><span>Built with React & TypeScript</span></footer>
    </>
  )
}
