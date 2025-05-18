````markdown
<!-- cover -->
<p align="center">
  <img src="assets/preview.png" width="160" alt="Rahul Sharma avatar">
</p>

<h1 align="center">Rahul Sharma · Technical Portfolio</h1>

<p align="center">
  LLMs · Recommender Systems · Forecasting · MLOps  
  <br>
  <a href="https://rugdatascience.dev" target="_blank"><strong>🌐 Live&nbsp;demo</strong></a>
</p>

<div align="center">
  <img alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/rahul370139/git_portfolio">
  <img alt="Code size"            src="https://img.shields.io/github/languages/code-size/rahul370139/git_portfolio">
  <img alt="Website status"      src="https://img.shields.io/website?url=https://rugdatascience.dev">
</div>

---

## ✨ Why this portfolio?

> I’m a data-scientist / ML-engineer who cares about **production impact**—not just prototypes.  
> This site showcases a selection of projects that span LLMs, multimodal retrieval, time-series pipelines and big-data engineering, with everything served through a **100 % static, performant, accessible website**.

Key design goals 👇

| Goal | How it’s met |
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
│   ├── rahul.png        # head-shot (400×400)
│   ├── preview.png      # OG + hero blob (400×400, transparent)
│   ├── resume.pdf
│   │
│   ├── work/            # 4 × experience banners (1200×800, ≤150 kB)
│   │   ├── jet2.png
│   │   ├── atcs.png
│   │   ├── fibe.png
│   │   └── axio.png
│   │
│   ├── projects/        # 4 × project banners (1200×800)
│   │   ├── fashion-demo.png
│   │   ├── tesla-forecast.png
│   │   ├── legal-summary.png
│   │   └── fake-news.png
│   │
│   └── certificates/    # PDFs / PNGs opened from accordions
│       └── …
└── README.md           # ← you’re here
````

*Image sizes enforced by `optimize-images.js` (Sharp + imagemin).*

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

No frameworks, no build-step—just open `index.html` or drop to any CDN.

---

## 🚀 Quick start

```bash
# clone
git clone https://github.com/rahul370139/git_portfolio.git
cd git_portfolio

# optional: compress / convert images
npm ci
node optimize-images.js   # outputs optimised assets/

# serve locally
npx serve .
```

Open `http://localhost:3000` (default port).

---

## 📈 Featured projects *(auto-rendered)*

| Preview                          | Key tech                         | Pitch                                                             |
| -------------------------------- | -------------------------------- | ----------------------------------------------------------------- |
| **Multimodal Fashion Retrieval** | CLIP · BLIP · FAISS              | Image + text search <150 ms, segmentation masks, reranking slider |
| **TSLA Forecast Pipeline**       | GRU-LSTM · Optuna · Walk-Forward | 1.8 % MAPE 15-day horizon w/ on-the-fly retraining                |
| **Dutch Legal-Case Summariser**  | o3-mini LLM · Async crawler      | 250 k rulings scraped & summarised to CSV in 6 h                  |
| **Fake-News Detection**          | Word2Vec · LSTM · RandomForest   | 94 % recall on fact-checked Twitter dataset                       |

Want to add a new card?
Drop a 1200×800 banner into `assets/projects/` and append an object in `projects.json`—no HTML edits.

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

```

> _Built with ❤️, vanilla code & a dash of ScrollReveal._  
> _Have questions? [Email me](rahul11s@umd.edu) or ping on [LinkedIn](https://linkedin.com/in/rahul-sharma--)._
```
