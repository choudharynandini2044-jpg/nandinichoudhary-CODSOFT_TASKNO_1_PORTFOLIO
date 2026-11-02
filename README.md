# Personal Portfolio Website

A simple, static personal portfolio built with HTML, CSS, and JavaScript.

## How to run locally
1. Open the project folder.
2. Double-click `index.html` to open it in your browser, OR
3. Serve it with any static server, e.g.:
   - Python: `python -m http.server 8000`
   - Then visit http://localhost:8000

No build step, Node.js, or framework is required.

## How to customize
- **Name / tagline**: Edit in `index.html` (Hero section). Search for "Your Name".
- **Profile photo**: Replace `profile.jpg` and `about.jpg` (or change the `src` attributes).
- **Skills & levels**: Edit the `data-level` attribute and the percentage text in `index.html`, or update `script.js`.
- **Projects**: Edit the project cards in `index.html`.
- **Resume**: Place a file named `resume.pdf` in this folder; the Download Resume buttons will download it.
- **Contact links**: Update email, GitHub, and LinkedIn URLs in `index.html` and the footer.
- **Colors**: Adjust CSS variables at the top of `style.css`.

## Notes
- The contact form is frontend-only and validates input with JavaScript. No message is actually sent.
- If Google Fonts cannot load, system fallback fonts are used.
