import { GithubIcon } from './Icons.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <ul className="project-features">
        {project.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.github && (
          <a
            className="btn btn-secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon style={{ width: 15, height: 15 }} />
            GitHub
          </a>
        )}
        {/* Live Demo button only renders when a real deployed URL is provided in content.js */}
        {project.demo && (
          <a
            className="btn btn-primary"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  )
}
