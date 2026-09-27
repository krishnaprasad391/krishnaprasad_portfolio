import { useState } from 'react'
import useReveal from '../../hooks/useReveal.js'
import { MailIcon, PhoneIcon, LocationIcon, GithubIcon, LinkedinIcon } from '../Icons.jsx'
import { profile } from '../../data/content.js'

export default function Contact() {
  const [headRef, headVisible] = useReveal()
  const [status, setStatus] = useState('')

  // NOTE: This form has no backend wired up yet. Submitting only shows a
  // local status message — no email is actually sent. To make it work,
  // connect a service such as Formspree or EmailJS here (see README.md for
  // exact steps) and replace this handler with the real submit call.
  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Form submission is not connected to a backend yet — see README.md to add Formspree or EmailJS.')
  }

  return (
    <section id="contact">
      <div className="container">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' is-visible' : ''}`}>
          <span className="kicker">Contact</span>
          <h2>Let&apos;s talk</h2>
          <p>Open to Python Developer and Python Full Stack Developer roles — reach out any time.</p>
        </div>

        <div className="contact-grid">
          <ul className="contact-list">
            <li>
              <MailIcon />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <PhoneIcon />
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </li>
            <li>
              <LocationIcon />
              <span>{profile.location}</span>
            </li>
            <li>
              <GithubIcon style={{ width: 18, height: 18 }} />
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <LinkedinIcon style={{ width: 18, height: 18 }} />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>

          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Write your message" />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>
              <p className="form-status" role="status">{status}</p>
            </form>
            <p className="form-note">
              This form isn&apos;t connected to a backend yet. Wire it up with Formspree or EmailJS —
              see the &ldquo;Contact form&rdquo; section of README.md for exact steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
