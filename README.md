# Krishnaprasad — Portfolio

A React + Vite portfolio site for a Python Full Stack Developer (fresher).

## 1. Before you do anything: fill in your details

Open `src/data/content.js` and replace:

- `email: '[ADD EMAIL]'` → your real email
- `phone: '[ADD PHONE]'` → your real phone number
- Any project `github` links that should point to a specific repo rather than your profile
- Any project `demo` (currently `null`) — only add a URL once a project is actually deployed; leaving it `null` hides the "Live Demo" button automatically

## 2. Folder structure

```
krishnaprasad-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
├── public/
│   └── PUT_RESUME_HERE.txt      ← delete after adding resume.pdf here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js           ← all your text content lives here
    ├── hooks/
    │   └── useReveal.js
    └── components/
        ├── Icons.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ProjectCard.jsx
        ├── Footer.jsx
        └── sections/
            ├── About.jsx
            ├── Skills.jsx
            ├── Experience.jsx
            ├── Projects.jsx
            ├── Education.jsx
            └── Contact.jsx
```

## 3. Install and run locally

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
cd krishnaprasad-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are written to `dist/`.

## 4. Adding your resume

1. Export your resume as a PDF.
2. Name it exactly `resume.pdf`.
3. Put it in the `public/` folder, so the path is `public/resume.pdf`.
4. Delete `public/PUT_RESUME_HERE.txt`.

The "Download Resume" button already links to `/resume.pdf` — no code changes needed.

## 5. Connecting the contact form (Formspree or EmailJS)

The contact form in `src/components/sections/Contact.jsx` is currently **not**
wired to any backend — submitting it only shows a status message. To make it
actually send you messages, pick one:

**Option A — Formspree (simplest)**
1. Create a free form at [formspree.io](https://formspree.io) and copy your form endpoint (`https://formspree.io/f/xxxxxx`).
2. In `Contact.jsx`, change the `<form>` to POST there directly:
   ```jsx
   <form className="contact-form" action="https://formspree.io/f/xxxxxx" method="POST">
   ```
   and remove the `onSubmit={handleSubmit}` (or keep it only for a loading state).

**Option B — EmailJS**
1. Create an account at [emailjs.com](https://www.emailjs.com/) and set up a service + template.
2. Install the SDK: `npm install @emailjs/browser`
3. In `handleSubmit`, call `emailjs.send(...)` with your service ID, template ID and public key, inside the existing `try/catch`.

## 6. Deploying

### Option A — GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://<your-username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then:

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
npm run deploy
```

Enable GitHub Pages in the repo settings if it isn't automatic, pointing to the `gh-pages` branch.

### Option B — Vercel (recommended, zero config)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **New Project**, and import the repo.
3. Vercel auto-detects Vite — framework preset "Vite", build command `npm run build`, output directory `dist`.
4. Click **Deploy**. You'll get a live URL you can share with recruiters.

## 7. Notes

- No fake companies, statistics, testimonials, or demo URLs have been added — only the information provided was used. Update `content.js` as your real project links and resume become available.
- The contact form has no backend by default (see section 5).
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via `index.html`.
