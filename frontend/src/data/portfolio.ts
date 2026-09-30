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
    prose: {
        school: 'Programmieren begleitet mich schon seit meiner Schulzeit und hat sich von einem persönlichen Interesse zu meinem beruflichen Weg entwickelt. Nach meiner Ausbildung zum IT-Assistenten habe ich Angewandte Informatik studiert und dabei meine Kenntnisse in der Softwareentwicklung kontinuierlich ausgebaut. Besonders spannend finde ich es, aus einer Idee eine funktionierende Lösung zu entwickeln – egal ob im Backend, im Frontend oder bei der Verbindung beider Welten.',
        work: 'In meiner bisherigen Berufserfahrung als Full-Stack Entwickler konnte ich an echten Anwendungen und Lösungen für die digitale Prozessautomatisierung arbeiten. Gleichzeitig habe ich durch meine aktuelle Tätigkeit im Kundenkontakt gelernt, technische Themen verständlich zu vermitteln und die Perspektive anderer einzubeziehen. Ich arbeite gerne im Team, kommuniziere offen und sehe neue Herausforderungen vor allem als Möglichkeit, dazuzulernen. Jetzt freue ich mich darauf, mein Wissen einzubringen, neue Technologien zu entdecken und an spannenden Projekten zu arbeiten.',
    },
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
                'Ich habe das Frontend und Backend entwickelt sowie Nutzerverwaltung und Sicherheitskonzept umgesetzt.',
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
        stack: ['Angular', 'TypeScript', 'Syncfusion'],
        details: {
            problem:
                'Baurechnungen müssen im Rahmen von Freigabeprozessen großer Bauprojekte häufig auf Positionsebene geprüft und korrigiert werden. Dafür sollte eine übersichtliche und effiziente Anwendung geschaffen werden.',
            contribution:
                'Ich habe das Projekt vollständig eigenständig umgesetzt, von der Problemanalyse und den ersten Konzeptentwürfen über das Prototyping und Architekturdesign bis hin zur Planung von Tasks und Entwicklungsabläufen. Anschließend habe ich die Anwendung selbstständig in Angular entwickelt.',
            implementation:
                'Die Anwendung wurde als reines Angular-Projekt umgesetzt. Bei der Entwicklung habe ich großen Wert auf eine komponentenbasierte Architektur und eine klare Struktur gelegt. Für die UI-Anforderungen kamen größtenteils Komponenten von Syncfusion zum Einsatz. Zusätzlich habe ich verschiedene Design Patterns verwendet, um die Anwendung strukturiert und wartbar aufzubauen.',
            outcome:
                'Durch das Projekt konnte ich den gesamten Entwicklungsprozess einer Anwendung eigenständig durchlaufen, von der Analyse eines konkreten Problems bis zur technischen Umsetzung. Besonders wertvoll waren dabei die Erfahrungen in Architekturdesign, komponentenbasierter Entwicklung und der strukturierten Planung eines Softwareprojekts.',

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
                'Für das Projekt sollte ein moderner Online-Shop für Comics entwickelt werden. Neben der eigentlichen Shop-Funktionalität lag der Fokus darauf, die Anwendung als skalierbare Microservice-Architektur aufzubauen und die einzelnen Komponenten klar voneinander zu trennen.',
            contribution:
                'Ich habe die Anwendung als Fullstack-Projekt umgesetzt und dabei sowohl am React-Frontend als auch am Spring-Boot-Backend mit entwickelt. Dabei habe ich mich insbesondere mit der Strukturierung einer Microservice-Architektur und der Kommunikation zwischen den einzelnen Services beschäftigt.',
            implementation:
                'Das Backend basiert auf mehreren Spring-Boot-Microservices, die über RabbitMQ miteinander kommunizieren. Das React-Frontend ist über REST-APIs an das Backend angebunden. PostgreSQL dient als Datenbank, während Keycloak die Authentifizierung und Nutzerverwaltung übernimmt. Die einzelnen Komponenten werden mit Docker containerisiert.',
            outcome:
                'Das Projekt hat mir einen umfassenden Einblick in die Entwicklung verteilter Anwendungen gegeben. Besonders wertvoll waren die Erfahrungen mit Microservice-Architekturen, asynchroner Kommunikation über RabbitMQ, zentralem Identity Management mit Keycloak sowie der Containerisierung einer Fullstack-Anwendung mit Docker.',
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
                'Das Ziel des Projekts war es, Nachrichten aus verschiedenen Quellen automatisiert zu erfassen und anschließend hinsichtlich ihrer Stimmung zu analysieren. Die gesammelten Nachrichten sollten in die Kategorien positiv, neutral oder negativ eingeordnet und übersichtlich dargestellt werden.',
            contribution:
                'Ich war hauptsächlich für die Entwicklung der Crawler, leitung sowie protokollierung der Meetings und den Architekturentwurf verantwortlich. Da es nur wenige und sehr allgemein formulierte Vorgaben gab, mussten wir als Gruppe eigenständig entscheiden, wie wir das Projekt strukturieren, Aufgaben verteilen und technische Herausforderungen lösen.',
            implementation:
                'Die Nachrichten werden durch in Scala entwickelte Crawler aus verschiedenen Quellen gesammelt und in einer MongoDB-Datenbank gespeichert. Anschließend werden die Daten für die Analyse aufbereitet und einer von drei Kategorien  positiv, neutral oder negativ zugeordnet. Die Ergebnisse werden über ein React-Frontend visualisiert.',
            outcome:
                'Die größte Herausforderung bestand darin, ohne detaillierte Vorgaben eine funktionierende Softwarearchitektur und einen geeigneten Entwicklungsprozess als Team zu etablieren. Dabei habe ich gelernt, technische Entscheidungen gemeinsam zu treffen, Aufgaben sinnvoll aufzuteilen und verschiedene Komponenten anschließend zu einem Gesamtsystem zusammenzuführen. Besonders wertvoll waren für mich dabei die Erfahrungen in der Architekturplanung, Projektorganisation und Zusammenarbeit im Team.',
            githubUrl:
                'https://github.com/NewsAnalyseTool',
            screenshots: [
                {
                    src: 'NewsAnalyse.png',
                    alt: 'Screenshot der News Analyse Tool Anwendung',
                },
                {
                    src: 'NewsAnalyseKomponetendiagram.png',
                    alt: 'Komponentendiagram'
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
                'Die App soll Flugdaten aus der Umgebung des Nutzers sichtbar und erlebbar machen. Statt alle verfügbaren Flugzeuge darzustellen, werden nur Flugzeuge in der aktuellen Sichtweite des Nutzers angezeigt. Über die Karte können diese ausgewählt und zusätzliche Informationen zu Flug und Flugzeug angezeigt und gesammelt werden.',
            contribution:
                'Die gesamte Anwendung habe ich eigenständig entwickelt. Von der ursprünglichen Idee über das UI- und Architekturdesign bis hin zur technischen Umsetzung.',
            implementation:
                'Die App ruft Flugdaten über eine öffentliche API ab und stellt diese auf einer OpenStreetMap dar. Mithilfe der GPS-Daten des Nutzers werden nur Flugzeuge innerhalb seiner aktuellen Sichtweite dargestellt. Durch die Auswahl eines Flugzeugs können detaillierte Informationen zu Model und der aktuellen Reise angezeigt werden. Zusätzlich können Nutzer entdeckte Flugzeuge sammeln, ähnlich wie bei PokenmonGO.',
            outcome:
                'Durch die vollständige Eigenentwicklung konnte ich den gesamten Prozess von der Produktidee bis zur fertigen Anwendung durchlaufen. Besonders beschäftigt habe ich mich dabei mit der Verarbeitung externer API-Daten, der ortsabhängigen Darstellung von Informationen und der Entwicklung einer interaktiven Kartenanwendung.',
            githubUrl:
                'https://github.com/LeonasOnGitHub/LookUP',
        },
    },
]

export const skillGroups = [
    {
        title: 'Frontend & UI',
        items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'JavaFX', 'Tkinter'],
    },
    {
        title: 'Backend & Architektur',
        items: [
            'Java',
            'Kotlin',
            'Spring Boot',
            'REST APIs',
            'Microservices',
            'Design Patterns',
            'TDD',
            'Clean Code',
        ],
    },
    {
        title: 'Datenbanken',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'MS SQL Server'],
    },
    {
        title: 'Tools & Delivery',
        items: ['Git', 'Docker', 'Maven', 'Azure DevOps', 'Jira'],
    },
    {
        title: 'Arbeitsweise',
        items: ['Teamwork', 'Kundenkommunikation', 'Analytische Problemlösung', 'You build it, you own it'],
    },
]