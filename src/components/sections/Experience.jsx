import useReveal from '../../hooks/useReveal.js'
import { experience } from '../../data/content.js'

export default function Experience() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="experience">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' is-visible' : ''}`}>
          <span className="kicker">Experience</span>
          <h2>Internship</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-role">{experience.role}</div>
              <div className="timeline-meta">
                <span className="company">{experience.company}</span>
                <span>{experience.duration}</span>
              </div>
              <p className="timeline-desc">{experience.description}</p>
              <div className="timeline-stack">
                {experience.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
