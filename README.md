# VM Portfolio — Vitor Herbas

Portfólio editorial de **Web Designer & Front-End Developer**.
React + Vite + JavaScript + CSS customizado + Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera /dist
npm run preview   # testa o build de produção
```

Requer Node 18+.

## Estrutura

```
public/
  favicon.svg
  images/projects/        ← imagens dos projetos (troque aqui)
src/
  main.jsx                ← entrada + BrowserRouter
  App.jsx                 ← rotas, transição entre páginas, MotionConfig
  components/
    Navbar.jsx  Hero.jsx  Projects.jsx  ProjectCard.jsx  About.jsx
    Skills.jsx  Process.jsx  Differential.jsx  Contact.jsx  Footer.jsx
    hero-media/           ← slot do visual do hero (2D hoje, 3D no futuro)
      HeroVisual.jsx      ← composição abstrata em CSS (vidro/metal/luz)
      HeroScene3D.jsx     ← placeholder documentado para React Three Fiber
      index.js            ← HERO_MODE: '2d' | '3d'
    ui/                   ← peças reutilizáveis
      Button, Magnetic, RevealText, ScrollWords, SectionHeader,
      ResponsiveImage, PageTransition, Icons
  pages/
    Home.jsx  ProjectPage.jsx  NotFound.jsx
  data/
    projects.js           ← projetos (cards + páginas /projects/:slug)
    site.js               ← nome, e-mail, redes, itens da navegação
    content.js            ← textos de About, Skills e Process
  hooks/index.js          ← parallax do mouse, hora local, seção ativa, fit-text
  lib/motion.js           ← tokens de animação (curvas, durações, variants)
  lib/utils.js
  styles/globals.css      ← design tokens + todos os estilos
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Projetos (título, texto, tecnologias, imagem, case) | `src/data/projects.js` |
| E-mail, GitHub, LinkedIn, Dribbble, Behance | `src/data/site.js` |
| Textos do About / Skills / Process | `src/data/content.js` |
| Cores, fontes e espaçamentos | `:root` em `src/styles/globals.css` |
| Ritmo das animações | `src/lib/motion.js` |

**Novo projeto:** adicione um objeto em `projects.js` com um `slug` único. O card e a rota `/projects/<slug>` são criados automaticamente.

**Dribbble / Behance:** em `site.js`, troque `url: null` pelo link. Enquanto for `null`, aparece como "Soon".

## Imagens (WebP / AVIF)

Coloque os arquivos em `public/images/projects/` e preencha em `projects.js`:

```js
image: {
  src:  '/images/projects/bicol.jpg',   // fallback obrigatório
  webp: '/images/projects/bicol.webp',  // opcional
  avif: '/images/projects/bicol.avif',  // opcional
  alt:  'Descrição da imagem',
}
```

`ResponsiveImage` gera um `<picture>`, e o navegador escolhe AVIF → WebP → fallback. Tamanho recomendado: 1600×1000 (16:10).

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel: **Add New → Project** → importe o repositório.
3. Framework Preset: **Vite** (Build: `npm run build`, Output: `dist`).
4. Deploy.

O `vercel.json` já reescreve todas as rotas para `index.html` (assim `/projects/bicol` funciona ao recarregar a página) e define o cache dos assets.

## 3D no futuro

Veja o passo a passo em `src/components/hero-media/HeroScene3D.jsx`. Resumo: instale `three @react-three/fiber @react-three/drei`, implemente a cena e mude `HERO_MODE` para `'3d'` em `hero-media/index.js`. A cena é carregada sob demanda e não pesa no carregamento inicial.
