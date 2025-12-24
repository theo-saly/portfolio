# 🚀 Portfolio de Saly Théo – [theo-saly.com](https://theo-saly.com/)

Bienvenue sur mon portfolio bento, développé avec **Next.js**, **React** et **Tailwind CSS**.  
Explorez mes projets à travers une interface & interactive.

---

## 🧱 Stack technique

- **Framework Frontend :** [Next.js](https://nextjs.org/)
- **3D & WebGL :** [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Composants & Helpers :** [@react-three/drei](https://github.com/pmndrs/drei), [three-stdlib](https://github.com/pmndrs/three-stdlib)
- **Animations :** [Framer Motion](https://www.framer.com/motion/)
- **UI & CSS :** [Tailwind CSS](https://tailwindcss.com/)
- **Swiper** pour les carrousels
- **GitHub Calendar** pour afficher mon activité GitHub
- **Use-shader-fx** pour l'animation de background
- **TypeScript** 

---

## 📁 Structure du projet

```
portfolio/
├── .eslintrc.json
├── .gitignore
├── custom.d.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── app/
│   ├── favicon.ico
│   ├── background/         # Effets visuels et shaders
│   ├── Calendar/           # Composant calendrier GitHub
│   ├── css/                # Fichiers CSS personnalisés
│   ├── hooks/              # Hooks personnalisés
│   ├── loader/             # Loader d’attente
│   ├── projets/            # Cards de présentation des projets
│   ├── sections/           # Sections principales (Intro, Propos, Technologies, etc.)
│   ├── sliders/            # Carrousels et sliders
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx            # Page principale
├── packages/               # Packages internes (ex: use-shader-fx)
├── public/                 # Images, icônes, cv, fichiers statiques
├── types/                  # Types TypeScript globaux
├── utils/                  # Fonctions utilitaires
└── ...
```

---

## 🚀 Lancer le projet en local

### Prérequis

- Node.js >= 18
- npm ou yarn

### Installation

```bash
git clone https://github.com/theo-saly/portfolio.git
cd portfolio
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## ✨ Fonctionnalités

- **Loader** animé au démarrage
- **Responsive** Mobiles, Tablettes, Ordinateurs
- **Interface Bento** Avec animations fluides
- **Background interactif** en WebGL
- **Affichage de projets sur un slider automatique**, en carrousel ou éléments dynamiques
- **Animation de la main** dans la section d’introduction
- **Animation du bouton "Envoyer"** dans la section contact
- **Animation de la section "Carte / Map"**
- **Colorisation dynamique des sections en noir & blanc**
- **Technologies avec apparition du nom + couleurs des icons** au survol
- **Intégration de mes musiques favorites** avec design immersif


---

## 📦 Dépendances principales

- `next` ^14.2.3
- `react` ^18.2.0
- `three` ^0.164.1
- `@react-three/fiber` ^8.16.6
- `@react-three/drei` ^9.105.6
- `tailwindcss` ^4.1.10
- `framer-motion` ^12.18.1
- `swiper` ^11.2.8
- `github-calendar` ^2.3.4

---

## 👨‍💻 Auteur

**Théo Saly**  
💼 [theo-saly.com](https://theo-saly.com/)  
💻 [GitHub](https://github.com/theo-saly/) — 🔗 [LinkedIn](https://www.linkedin.com/in/theo-saly)