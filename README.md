# Chris O. Agudosi - Cybersecurity Portfolio

An interactive, fully responsive single-page portfolio for an **AI Security Engineer**.
Built with plain HTML, CSS, and vanilla JavaScript - zero build step, instant deploy.

## ✨ Features

- **Cyber aesthetic** - animated matrix "digital rain" canvas, grid overlay, glow accents
- **Boot loader** + typing hero roles + animated stat counters
- **Interactive terminal** card, mouse-follow spotlight on skill cards
- **Scroll-reveal** animations, scroll progress bar, active-section nav highlighting
- **Fully responsive** - mobile hamburger menu, fluid typography, touch-friendly
- **Accessible** - semantic HTML, `prefers-reduced-motion` support, keyboard friendly
- **Working contact form** via Web3Forms API (with graceful `mailto:` fallback)

## 📁 Structure

```
Portfolio/
├── index.html        # markup
├── css/styles.css    # all styling
├── js/main.js        # interactions + content data
├── netlify.toml      # Netlify config + security headers
└── README.md
```

## 🧩 Editing content

All resume content (skills, experience, projects, certs) lives as data arrays at the
top of [js/main.js](js/main.js) - edit those objects to update the site, no markup changes needed.

## 🚀 Deploy to Netlify

**Option A - drag & drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `Portfolio` folder onto the page. Done.

**Option B - Git (recommended)**
1. Push this folder to a GitHub repo.
2. In Netlify: *Add new site → Import from Git* → pick the repo.
3. Build command: *(none)* · Publish directory: `.`
4. Deploy.

The contact form submits via the **Web3Forms** API and emails entries directly to
o.agudosi88@gmail.com. The access key lives in the hidden `access_key` input in
[index.html](index.html). Works on any host, no backend required.

## 🔧 Local preview

Just open `index.html` in a browser, or run a tiny static server:

```bash
# Python
python -m http.server 8080
# then visit http://localhost:8080
```

## 📬 Contact

- Email: o.agudosi88@gmail.com
- GitHub: https://github.com/Mrred883
- LinkedIn: https://www.linkedin.com/in/onyekachiagudosi/
