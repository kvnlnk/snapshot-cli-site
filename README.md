# 📸 snapshot — Terminal Screenshot Generator for READMEs

**Generate styled terminal screenshots as pure SVG — no Puppeteer, no headless browser, just beautiful output.**

---

## 🤖 Fully Vibecoded with Hermes Agent

This project was built entirely through natural language conversations with [Hermes Agent](https://hermes-agent.nousresearch.com) — an autonomous AI coding assistant. From architecture to deployment, every line of code was generated, tested, and shipped via chat prompts.

---

## ✨ Features

- **🎨 Pure SVG Output** — No Puppeteer, no headless browser, no heavy dependencies
- **🌈 ANSI Color Parsing** — Full support for 16-color, 256-color, and truecolor escape codes
- **🖥️ 5 Built-in Themes** — Default (dark), Light, Minimal, Retro-Green, Nord
- **📥 Multiple Input Modes** — Command execution, file input, stdin piping
- **⚡ Lightweight** — < 1MB install, no native dependencies
- **🪟 Window Chrome** — Realistic macOS-style terminal window with traffic lights

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Node.js (ES2020) |
| Runtime | Commander (CLI) |
| Output | Pure SVG generation |
| Design | Retro Terminal (frontend-design skill) |
| Hosting | Vercel (Static) |

---

## 🚀 Deployment

```bash
# 1. Build
npm install
npm run build

# 2. Deploy to Vercel
vercel --prod
```

Live unter: `snapshot-cli-site.vercel.app`

---

## 🎮 Usage

```bash
# Run a command and capture output
npx github:kvnlnk/snapshot-cli --cmd "ls -la" --output screenshot.svg

# Render an existing text file
npx github:kvnlnk/snapshot-cli --file output.txt --theme retro-green

# Pipe output
echo "Hello World" | npx github:kvnlnk/snapshot-cli --stdout

# List available themes
npx github:kvnlnk/snapshot-cli --list-themes
```

---

## 🎨 Themes

| Theme | Preview |
|-------|---------|
| **default** | Dark background, white text, blue accents |
| **light** | Light background, dark text |
| **minimal** | Minimal chrome, clean output |
| **retro-green** | Green-on-black CRT terminal |
| **nord** | Arctic blue-gray palette |

---

## 📁 Project Structure

```
snapshot-cli/
├── index.html              # Landing page
├── package.json
├── vite.config.js
├── src/
│   ├── main.js             # Smooth scroll + interactions
│   └── styles/
│       └── main.css        # Retro terminal theme
└── README.md
```

---

## 📄 License

MIT

---

<p align="center">Made with ❤️ by <a href="https://github.com/kvnlnk">kvnlnk</a></p>
