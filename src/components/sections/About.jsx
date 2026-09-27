import useReveal from '../../hooks/useReveal.js'
import { about } from '../../data/content.js'

export default function About() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="about">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' is-visible' : ''}`}>
          <span className="kicker">About</span>
          <h2>A brief background</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="about-facts">
            {about.facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
