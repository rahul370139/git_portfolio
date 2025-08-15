<!-- cover -->

![Rahul Sharma avatar](assets/preview.png)

<h1 align="center">Rahul Sharma · Technical Portfolio</h1>

<p align="center">
  LLMs · Recommender Systems · Forecasting · MLOps
  <br>
  <a href="https://rahul370139.github.io/git_portfolio/" target="_blank"><strong>🌐 Live&nbsp;demo</strong></a>
</p>

<div align="center">
  <img alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/rahul370139/git_portfolio">
  <img alt="Code size"            src="https://img.shields.io/github/languages/code-size/rahul370139/git_portfolio">
  <img alt="Website status"      src="https://img.shields.io/website?url=https://rahul370139.github.io/git_portfolio/">
</div>

---

## ✨ Why this portfolio?

> I'm a data-scientist / ML-engineer who cares about **production impact**—not just prototypes.
> This site showcases a selection of projects that span LLMs, multimodal retrieval, time-series pipelines and big-data engineering, with everything served through a **100 % static, performant, accessible website**.

Key design goals 👇

| Goal | How it's met |
|------|--------------|
|⚡ **Load fast anywhere**| Pure HTML · CSS · Vanilla JS (≈ 45 kB JS), lazy-loaded WebP images, critical CSS |
|📱 **Look great on every screen**| Mobile-first layout, fluid grid, accordion cards |
|🎨 **Soft light theme, respectful dark mode**| CSS variables, `prefers-color-scheme` media query |
|♿ **Accessible & keyboard friendly**| Semantic sections, ARIA labels, reduced-motion fallbacks |
|🔧 **Easy to maintain**| Project cards generated from a single `projects.json`—add a new object, get a new card |

---

## 🗂️ Project structure

```text
git_portfolio
├── index.html         # semantic markup, one <script defer> at the end
├── style.css          # CSS variables, grid / flex, dark-mode
├── main.js            # nav toggle, accordions, JSON loader, scroll progress
├── projects.json      # one object per project (title, description, img, link…)
│
├── assets/
│   ├── rahul.png        # head-shot
│   ├── preview.png      # OG + hero blob
│   ├── resume.pdf
│   │
│   ├── work/            # experience banners
│   │   └── …
│   │
│   ├── projects/        # project banners
│   │   └── …
│   │
│   └── certificates/    # PDFs / PNGs opened from accordions
│       └── …
└── README.md           # ← you're here
```

---

## 🛠 Tech stack

* **HTML 5** – landmarks, aria, open-graph
* **CSS 3** – flex / grid, custom props, media queries, dark-mode
* **Vanilla JavaScript** – single ES-module (`main.js`)

  * dynamic project grid (`fetch projects.json`)
  * accordion toggles (About · Skills · Extras · Experience)
  * mobile nav, scroll-progress bar
* **ScrollReveal** CDN – unobtrusive section fade-in
* **Boxicons + Google Fonts**
* **FormSubmit** – zero-backend contact form
* **GitHub Pages** – static hosting

No frameworks, no build-step.

---

## 🚀 Quick start

To get a local copy up and running follow these simple steps:

```bash
# clone the repository
git clone https://github.com/rahul370139/git_portfolio.git
cd git_portfolio
```

Then, open the `index.html` file in your web browser to view the portfolio locally.

---

## 🌟 Roadmap

* [ ] Replace PNG thumbnails with WebP + `<picture>` fallback
* [ ] Lighthouse PWA > 95 % (manifest + SW offline cache)
* [ ] CI: HTMLHint · Stylelint · Lighthouse-CI on PRs
* [ ] Plausible analytics (cookie-free) + Sentry logging

---

## 🤝 Contributing

Improvements to **performance, accessibility, or code clarity** are welcome.
Open an issue first so we can scope it together.

---

## 📜 License

MIT © Rahul Sharma


> _Built with ❤️, vanilla code & a dash of ScrollReveal._
> _Have questions? [Email me](mailto:rahul11s@umd.edu) or ping on [LinkedIn](https://linkedin.com/in/rahul-sharma--)._# Updated at Fri Aug 15 17:25:28 EDT 2025
