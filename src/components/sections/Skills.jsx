import useReveal from '../../hooks/useReveal.js'
import { skills } from '../../data/content.js'

export default function Skills() {
  const [headRef, headVisible] = useReveal()

  return (
    <section id="skills" className="alt-bg">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' is-visible' : ''}`}>
          <span className="kicker">Skills</span>
          <h2>Technologies I work with</h2>
        </div>

        <div className="skills-groups">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="skill-group-title">{group.group}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
