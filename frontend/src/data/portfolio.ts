export const profile = {
  name: 'Leonas Freiherr von Medem',
  role: 'Fullstack Developer & Software Engineer',
  intro:
    'Leidenschaftlicher Entwickler, Teamplayer und stets bereit, neue Herausforderungen anzunehmen und dazuzulernen.',
  background: [
    'Ausbildung zum Informationstechnischen Assistenten für Telekommunikations- und Informationstechnische Systeme',
    'Bachelor in Angewandter Informatik',
    'Drei Jahre Berufserfahrung als Werkstudent im Fullstack Development',
    'Ein Jahr Erfahrung als Sales Manager im Vertrieb eines Softwareprodukts',
  ],
  email: 'leonas.medem@gmx.de',
  github: 'https://github.com/LeonasOnGitHub',
  linkedin: 'https://www.linkedin.com/in/leonas-von-medem-8a763b286/',
}

export const projects = [
  {
    title: 'Daily Challenge App',
    category: 'Fullstack Web App',
    description:
      'Eine Anwendung mit täglichen Challenges, Nutzerverwaltung, Sicherheitsfunktionen und Leaderboards.',
    stack: ['Java', 'Spring Boot', 'React', 'JavaScript', 'PostgreSQL'],
    details: [
      'Implementierung von REST APIs für die Verwaltung von Challenges und Nutzerprofilen.',
      'Integration von Sicherheitsfunktionen wie Authentifizierung und Autorisierung.',
      'Entwicklung eines Leaderboards zur Anzeige der besten Nutzerleistungen.',
    ],
  },
  {
    title: 'Rechnungspositionsbearbeitungstool',
    category: 'Bachelorarbeit',
    description:
      'Ein Tool zur positionsgenauen Korrektur von Rechnungen, angebunden an Backend-APIs.',
    stack: ['Angular', 'TypeScript', 'REST APIs'],
    details: [
      'Entwicklung einer benutzerfreundlichen Oberfläche zur Bearbeitung von Rechnungspositionen.',
      'Integration von Backend-APIs zur Datenverarbeitung und -speicherung.',
      'Implementierung von Validierungsmechanismen zur Sicherstellung der Datenintegrität.',
    ],
  },
  {
    title: 'Online Comic Book Shop',
    category: 'Microservices',
    description:
      'Ein Online-Shop für Comics mit einer Microservice-Architektur und asynchroner Kommunikation.',
    stack: ['Java', 'Spring Boot', 'React', 'RabbitMQ', 'Docker'],
    details: [
      'Entwicklung von Microservices für Produktverwaltung, Bestellabwicklung und Nutzerverwaltung.',
      'Implementierung von asynchroner Kommunikation zwischen den Microservices mittels RabbitMQ.',
      'Bereitstellung der Anwendung in Docker-Containern für eine einfache Skalierbarkeit.',
    ],
  },
  {
    title: 'News Analyse Tool',
    category: 'Datenanalyse',
    description:
      'Analysiert Newsartikel automatisch und ordnet Berichterstattung als positiv, negativ oder neutral ein.',
    stack: ['Scala', 'MongoDB', 'React'],
    details: [
      'Entwicklung eines Tools zur automatischen Analyse von Newsartikeln.',
      'Implementierung von Algorithmen zur Sentiment-Analyse und Kategorisierung der Berichterstattung.',
      'Visualisierung der Analyseergebnisse in einer benutzerfreundlichen Oberfläche.',
    ],
  },
]

export const skills = ['React', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java', 'SQL', 'Git & GitHub', 'Scala']