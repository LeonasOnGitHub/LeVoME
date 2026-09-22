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
        details: {
            problem:
                'Nutzer sollen jeden Tag neue Challenges erhalten und ihren Fortschritt mit anderen vergleichen können.',
            contribution:
                'Ich habe das Frontend und Backend entwickelt sowie Nutzerverwaltung, Sicherheitskonzept und Leaderboards umgesetzt.',
            implementation:
                'Das Backend basiert auf Java und Spring Boot. Das React-Frontend kommuniziert über APIs mit dem Backend; PostgreSQL speichert Nutzer-, Challenge- und Fortschrittsdaten.',
            outcome:
                'Ich habe gelernt, eine Fullstack-Anwendung mit Authentifizierung, persistenter Datenhaltung und einer klaren Trennung von Frontend und Backend umzusetzen.',
            liveUrl:
                'https://daily-challenge-app.example.com',
            githubUrl:
                'https://github.com/LeonasOnGitHub/daylenge'
        },
    },
    {
        title: 'Rechnungspositionsbearbeitungstool',
        category: 'Bachelorarbeit',
        description:
            'Ein Tool zur positionsgenauen Korrektur von Rechnungen, angebunden an Backend-APIs.',
        stack: ['Angular', 'TypeScript', 'REST APIs'],
        details: {
            problem:
                'Nutzer sollen jeden Tag neue Challenges erhalten und ihren Fortschritt mit anderen vergleichen können.',
            contribution:
                'Ich habe das Frontend und Backend entwickelt sowie Nutzerverwaltung, Sicherheitskonzept und Leaderboards umgesetzt.',
            implementation:
                'Das Backend basiert auf Java und Spring Boot. Das React-Frontend kommuniziert über APIs mit dem Backend; PostgreSQL speichert Nutzer-, Challenge- und Fortschrittsdaten.',
            outcome:
                'Ich habe gelernt, eine Fullstack-Anwendung mit Authentifizierung, persistenter Datenhaltung und einer klaren Trennung von Frontend und Backend umzusetzen.',

        },
    },
    {
        title: 'Online Comic Book Shop',
        category: 'Microservices',
        description:
            'Ein Online-Shop für Comics mit einer Microservice-Architektur und asynchroner Kommunikation.',
        stack: ['Java', 'Spring Boot', 'React', 'RabbitMQ', 'Docker'],
        details: {
            problem:
                'Nutzer sollen jeden Tag neue Challenges erhalten und ihren Fortschritt mit anderen vergleichen können.',
            contribution:
                'Ich habe das Frontend und Backend entwickelt sowie Nutzerverwaltung, Sicherheitskonzept und Leaderboards umgesetzt.',
            implementation:
                'Das Backend basiert auf Java und Spring Boot. Das React-Frontend kommuniziert über APIs mit dem Backend; PostgreSQL speichert Nutzer-, Challenge- und Fortschrittsdaten.',
            outcome:
                'Ich habe gelernt, eine Fullstack-Anwendung mit Authentifizierung, persistenter Datenhaltung und einer klaren Trennung von Frontend und Backend umzusetzen.',
        },
    },
    {
        title: 'News Analyse Tool',
        category: 'Datenanalyse',
        description:
            'Analysiert Newsartikel automatisch und ordnet Berichterstattung als positiv, negativ oder neutral ein.',
        stack: ['Scala', 'MongoDB', 'React'],
        details: {
            problem:
                'Nutzer sollen jeden Tag neue Challenges erhalten und ihren Fortschritt mit anderen vergleichen können.',
            contribution:
                'Ich habe das Frontend und Backend entwickelt sowie Nutzerverwaltung, Sicherheitskonzept und Leaderboards umgesetzt.',
            implementation:
                'Das Backend basiert auf Java und Spring Boot. Das React-Frontend kommuniziert über APIs mit dem Backend; PostgreSQL speichert Nutzer-, Challenge- und Fortschrittsdaten.',
            outcome:
                'Ich habe gelernt, eine Fullstack-Anwendung mit Authentifizierung, persistenter Datenhaltung und einer klaren Trennung von Frontend und Backend umzusetzen.',
            githubUrl:
                'https://github.com/NewsAnalyseTool',
            screenshots: [
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung',
                },
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung'
                },
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung'
                },
            ],
        },
    },
    {
        title: 'LookUp Andriod App',
        category: 'App Development',
        description:
            'Visualisiert Flugdaten in deiner nähe. Die Flugdaten von Flugzeugen in deiner Sichtweite können Angeschaut und gesammelt werden. Wie PokenGO nur mit Flugzeugen.',
        stack: ['Android', 'Kotlin', 'REST APis', 'OpenStreetMap', 'TDD'],
        details: {
            problem:
                'Nutzer sollen jeden Tag neue Challenges erhalten und ihren Fortschritt mit anderen vergleichen können.',
            contribution:
                'Ich habe das Frontend und Backend entwickelt sowie Nutzerverwaltung, Sicherheitskonzept und Leaderboards umgesetzt.',
            implementation:
                'Das Backend basiert auf Java und Spring Boot. Das React-Frontend kommuniziert über APIs mit dem Backend; PostgreSQL speichert Nutzer-, Challenge- und Fortschrittsdaten.',
            outcome:
                'Ich habe gelernt, eine Fullstack-Anwendung mit Authentifizierung, persistenter Datenhaltung und einer klaren Trennung von Frontend und Backend umzusetzen.',
            githubUrl:
                'https://github.com/LeonasOnGitHub/LookUP',
            screenshots: [
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung',
                },
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung'
                },
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung'
                },
            ],
        },
    },
]

export const skills = ['React', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java', 'SQL', 'Git & GitHub', 'Scala', 'Kotlin', 'PHP', 'Spring Boot', 'Azure DevOps', 'MongoDB', 'MySQL', 'PostgeSQL']