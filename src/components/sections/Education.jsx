import useReveal from '../../hooks/useReveal.js'
import { education } from '../../data/content.js'

export default function Education() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="education">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' is-visible' : ''}`}>
          <span className="kicker">Education</span>
          <h2>Academic background</h2>
        </div>

        <div className="education-card">
          <div>
            <div className="education-degree">{education.degree}</div>
            <div className="education-school">{education.school}</div>
            <div className="education-univ">{education.university}</div>
          </div>
          <div className="education-loc">{education.location}</div>
        </div>
      </div>
    </section>
  )
}
