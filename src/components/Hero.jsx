import { GithubIcon, LinkedinIcon } from './Icons.jsx'
import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <span className="hero-eyebrow">
            Available for Python Developer roles
          </span>

          <h1>
            Hi, I&apos;m {profile.name}
            <span className="role">
              {profile.role}
            </span>
          </h1>

          <p className="hero-desc">
            B.Sc. Computer Science graduate passionate about building
            web applications and REST APIs using Python, Django and React.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href={profile.resumeUrl}
              className="btn btn-secondary"
              download
            >
              Download Resume
            </a>

            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              className="icon-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon />
            </a>

            <a
              className="icon-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-card">

          <div className="hero-card-top">
            <span className="status-dot"></span>
            <span>Currently available</span>
          </div>

          <div className="hero-card-icon">
            &lt;/&gt;
          </div>

          <h3>
            Python Full Stack
            <br />
            Developer
          </h3>

          <p>
            Building clean and scalable web applications
            with modern backend and frontend technologies.
          </p>

          <div className="hero-tech">
            <span>Python</span>
            <span>Django</span>
            <span>DRF</span>
            <span>React</span>
            <span>MySQL</span>
            <span>Docker</span>
          </div>

          <div className="hero-card-bottom">
            <div>
              <strong>4 Months</strong>
              <span>Internship</span>
            </div>

            <div>
              <strong>B.Sc.</strong>
              <span>Computer Science</span>
            </div>

            <div>
              <strong>Fresher</strong>
              <span>Open to Work</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}