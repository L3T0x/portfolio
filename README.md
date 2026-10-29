# Afif Jazimin — The Risk Desk

A static, responsive portfolio built for GitHub Pages. The site is intentionally framework-free so it can deploy without a Node.js build or Vercel.

## Preview locally

From the repository root, run any static server. For example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy

Push to `master`. The workflow in `.github/workflows/pages.yml` uploads the static files and deploys them through GitHub Pages.

If this is the first Pages deployment for the repository, open **Settings → Pages** on GitHub and set the source to **GitHub Actions**.

## Pages and content

- Interactive main menu: `index.html`
- Separate content pages: `about.html`, `projects.html`, `writeups.html`, `skills.html`, `experience.html`, `contact.html`
- Visual system and responsive layout: `styles.css`
- Navigation, reveal, and risk-desk interactions: `script.js`
- Original looping radar GIF: `assets/risk-radar.gif` (regenerate with `python assets/generate_radar.py`; requires Pillow)

The initial copy is based on the supplied résumé versions. Edit the corresponding HTML page to change content. Project evidence, screenshots, and a portrait can be added later.
