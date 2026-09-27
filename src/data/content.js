
// Central place for all portfolio content.
// Update your details here — every section reads from this file.

export const profile = {
  name: 'Krishnaprasad',
  role: 'Python Full Stack Developer',
  location: 'Kozhikode, Kerala, India',
  email: 'kriishnaprsd@gmail.com',
  phone: '7593060975',
  github: 'https://github.com/krishnaprasad391',
  linkedin: 'https://linkedin.com/in/krishna-prasad-474208355',
  resumeUrl: '/resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a B.Sc. Computer Science graduate from St. Joseph's College Devagiri, University of Calicut, and a fresher with a strong interest in backend development and building products with Python.",
    'Through coursework and hands-on projects, I picked up Django and Django REST Framework for building APIs, paired with React.js on the frontend to build complete, working applications.',
    'I completed a 4-month internship as a Python Full Stack Developer at Knovista Technology, where I worked across the stack — from data models and REST endpoints to React interfaces that consume them.',
    "I'm currently looking for my first full-time role as a Python Developer, where I can keep building on this foundation and contribute to a team's codebase from day one.",
  ],

  facts: [
    { label: 'Based in', value: 'Kozhikode, Kerala' },
    { label: 'Status', value: 'Fresher' },
    { label: 'Looking for', value: 'Python Developer roles' },
    { label: 'Degree', value: 'B.Sc. Computer Science' },
    { label: 'Experience', value: '4-month internship' },
  ],
}

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript'],
  },
  {
    group: 'Frontend',
    items: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'],
  },
  {
    group: 'Backend',
    items: ['Django', 'Django REST Framework', 'REST API'],
  },
  {
    group: 'Database',
    items: ['MySQL', 'SQLite'],
  },
  {
    group: 'Concepts',
    items: [
      'OOP',
      'CRUD',
      'API Integration',
      'ORM',
      'MVC / MVT',
      'Authentication',
    ],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },
]

export const experience = {
  role: 'Python Full Stack Developer Intern',
  company: 'Knovista Technology',
  duration: '4 Months',

  description:
    'Worked on full-stack web applications using Django and Django REST Framework for the backend and React.js for the frontend. Built REST APIs, implemented CRUD functionality, and worked with Docker for containerized development.',

  stack: [
    'Python',
    'Django',
    'Django REST Framework',
    'REST APIs',
    'React',
    'HTML/CSS',
    'Bootstrap',
    'Docker',
  ],
}

export const projects = [
  {
    name: 'Student Management System',

    description:
      'A full-stack application for managing student records, built to practice REST API design end to end — from database models to a React interface consuming them.',

    tech: [
      'Django',
      'Django REST Framework',
      'React.js',
      'MySQL / SQLite',
    ],

    features: [
      'Full CRUD for student records',
      'REST API layer with Django REST Framework',
      'React frontend consuming the API',
      'API endpoints tested with Postman',
    ],

    github: 'https://github.com/krishnaprasad391',
    demo: null,
  },

  {
    name: 'Asset Management System',

    description:
      'A web application for tracking company assets — assignments to staff and support tickets raised against them, with an authenticated React dashboard.',

    tech: [
      'Django',
      'Django REST Framework',
      'React.js',
    ],

    features: [
      'Asset records and assignment tracking',
      'Ticket management for asset issues',
      'REST APIs for all core operations',
      'Authenticated React dashboard',
    ],

    github: 'https://github.com/krishnaprasad391',
    demo: null,
  },

  {
    name: 'Person CRUD Application',

    description:
      'A focused full-stack CRUD application for managing person details, used to solidify the Django + DRF + React workflow from model to UI.',

    tech: [
      'Django',
      'Django REST Framework',
      'React.js',
    ],

    features: [
      'Create, read, update, delete operations',
      'Django models with database integration',
      'REST API endpoints',
      'React-based frontend',
    ],

    github: 'https://github.com/krishnaprasad391',
    demo: null,
  },

  {
    name: 'Docker Full Stack Project',

    description:
      'A containerized full-stack setup with the Django backend and React frontend running as separate services, served through Gunicorn.',

    tech: [
      'Django',
      'React',
      'Docker',
      'Gunicorn',
      'SQLite',
    ],

    features: [
      'Separate frontend and backend Docker services',
      'Gunicorn as the application server',
      'SQLite for local data persistence',
      'Reproducible local environment via Docker',
    ],

    github: 'https://github.com/krishnaprasad391',
    demo: null,
  },
]

export const education = {
  degree: 'B.Sc. Computer Science',
  school: "St. Joseph's College Devagiri",
  university: 'University of Calicut',
  location: 'Kozhikode, Kerala',
}

