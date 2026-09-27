import { profile } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} {profile.name}. Built with React &amp; Vite.</span>
        <ul className="footer-links">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="#top">Back to top</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
