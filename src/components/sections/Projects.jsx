import useReveal from '../../hooks/useReveal.js'
import ProjectCard from '../ProjectCard.jsx'
import { projects } from '../../data/content.js'

export default function Projects() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="projects" className="alt-bg">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' is-visible' : ''}`}>
          <span className="kicker">Projects</span>
          <h2>Things I&apos;ve built</h2>
          <p>Full-stack projects covering REST APIs, database design and React frontends.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
