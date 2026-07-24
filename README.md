# 📚 My Documentation

Documentation site powered by [VitePress](https://vitepress.dev) and [DepthIndex](https://depthindex.vercel.app) AI.

## 🚀 Quick Start

```bash
# Clone the template
git clone https://github.com/EldrexDelosReyesBula/vitepress-depthindex-template.git my-docs
cd my-docs

# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## 🤖 AI Features (DepthIndex v1.3.0)

This template includes DepthIndex pre-configured:

- **Search Bar** — Type in the search bar for instant, AI-powered answers
- **Chat Panel** — Click the floating button (bottom-right) for multi-turn conversations
- **WebGPU Acceleration** — Lightning-fast, hardware-accelerated vector search
- **Granular Indexing** — Stream index chunks lazily or eagerly on demand
- **Citations & References** — Superscript, inline, or underlined citations with configurable reference lists
- **On-Device & Offline** — Works 100% offline with zero API keys required
- **Privacy First** — Client-side PII filtering and zero telemetry tracking
- **Experimental Engine** *(v1.3.0, opt-in)* — Local NLU reasoning, Knowledge Graph, and 5-step answer synthesis — no cloud required
- **Framework-Agnostic Core** *(v1.3.0)* — Use `DepthIndexCore` outside VitePress on any SSG or custom app
- **Health Audits** *(v1.3.0)* — Detect orphaned pages, missing code examples, and contradictions in your docs
- **Interactive Search UI** *(v1.3.0)* — "Explain This" selection widget (`Ctrl/Cmd+Shift+K`) and Code Playground

## 🎨 Customization

Edit these files:
- `.vitepress/config.ts` — Site configuration + DepthIndex options
- `src/styles/custom.css` — Visual customization
- `public/logo.svg` — Your logo

## 📖 Adding Content

Add markdown files to the `docs/` directory:
- `docs/guide/` — Guides and tutorials
- `docs/api/` — API reference

## ☁️ Adding Cloud AI (Optional)

1. Copy `.env.example` to `.env`
2. Add your API key (OpenAI, Gemini, or Anthropic)
3. Update the DepthIndex config to use `hybrid` or `cloud` mode

```typescript
DepthIndex({
  searchMode: 'hybrid',
})
```

## 📚 Resources

- [DepthIndex Documentation](https://depthindex.vercel.app)
- [DepthIndex GitHub](https://github.com/EldrexDelosReyesBula/vitepress-depthindex)
- [VitePress Documentation](https://vitepress.dev)

## 📄 License

MIT — Use this template for any project.
