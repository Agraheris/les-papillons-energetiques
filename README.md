# 🦋 Les Papillons Énergétiques

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **Projet Client Professionnel - Micro-Entreprise Clem-It | Application Web Moderne**

Site web professionnel développé pour Les Papillons Énergétiques, une praticienne spécialisée dans les soins énergétiques et le bien-être. Ce projet illustre ma transition vers l'entrepreneuriat après ma formation, combinant expertise technique et gestion client autonome dans le secteur du bien-être.

## 🎯 Contexte du Projet

**Type :** Refonte complète d'un site existant - Mission freelance post-formation  
**Statut :** En développement actif  
**Objectif :** Remplacer un site Wix mal conçu par une solution moderne et professionnelle  
**Problématique :** Site original créé par la praticienne elle-même avec des outils inadaptés  
**Entreprise :** Développé via ma micro-entreprise Clem-It

### 🏢 Besoins Client & Problématiques
- **Refonte complète** d'un site Wix peu professionnel
- **Autonomie de gestion** pour la praticienne (CMS intégré)
- **Performance optimisée** vs solution no-code lente
- **Design professionnel** et ambiance zen
- **SEO amélioré** pour une meilleure visibilité
- **Facilité de mise à jour** des prestations et contenus

## ✨ Fonctionnalités Développées

### 🌐 Interface Utilisateur
- **Design responsive** adapté à tous les appareils
- **Navigation intuitive** et expérience utilisateur soignée
- **Animations fluides** et interactions modernes
- **Accessibilité** respectant les standards web

### ⚡ Performance & SEO
- **Optimisation Next.js** avec Server-Side Rendering (SSR)
- **Images optimisées** avec composant Next.js Image
- **Chargement rapide** et Core Web Vitals optimisés
- **SEO-friendly** avec métadonnées dynamiques

### 🎨 Fonctionnalités Développées

#### 🌐 Pages & Navigation
- **Page d'accueil** avec présentation de l'activité
- **Section Prestations** avec pages dynamiques `[slug]` depuis Sanity
- **Page Avis** pour les témoignages clients
- **Formulaire de contact** sécurisé
- **Navigation responsive** (Navbar/Footer)

#### 🛠️ Interface d'Administration
- **Studio Sanity intégré** (`/studio`) pour la cliente
- **Gestion des prestations** avec création/modification/suppression
- **Upload d'images** optimisées automatiquement
- **Prévisualisation en temps réel** des modifications
- **Interface utilisateur intuitive** pour non-technique

## 🚀 Stack Technique Moderne

**Framework Frontend :**
- **Next.js 14** avec App Router
- **React 18** avec hooks modernes
- **Tailwind CSS** pour un design system cohérent et responsive
- **Sanity CMS** pour la gestion de contenu autonome

**Optimisations :**
- **Server-Side Rendering (SSR)** pour les performances
- **Static Site Generation (SSG)** pour les pages statiques
- **Integration Sanity CMS** avec génération de pages dynamiques
- **Image Optimization** automatique
- **Code Splitting** et lazy loading

**Outils de Développement :**
- **ESLint & Prettier** pour la qualité du code
- **Husky** pour les hooks Git
- **Responsive Design** mobile-first

## 🛠️ Installation et Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Git

### Démarrage Rapide

```bash
# Cloner le repository
git clone https://github.com/Agraheris/les-papillons-energetiques.git
cd les-papillons-energetiques

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run type-check   # Vérification TypeScript
```

### 🛠️ Architecture Technique Complète

```
les-papillons-energetiques/
├── src/
│   ├── app/                    # App Router Next.js 14
│   │   ├── avis/              # Page des témoignages clients
│   │   ├── contact/           # Formulaire de contact
│   │   ├── prestations/       # Pages dynamiques des services
│   │   │   └── [slug]/        # Routes dynamiques depuis Sanity
│   │   ├── studio/            # Interface d'administration Sanity
│   │   ├── layout.js          # Layout principal
│   │   └── page.js            # Page d'accueil
│   ├── components/            # Composants React modulaires
│   │   ├── Footer.jsx         # Pied de page
│   │   └── Navbar.jsx         # Navigation principale
│   └── sanity/               # Configuration CMS
│       ├── lib/              # Utilitaires Sanity
│       ├── schemaTypes/      # Structures de données
│       ├── env.js           # Variables d'environnement
│       └── structure.js     # Organisation du studio
├── Configuration files
│   ├── sanity.cli.js        # CLI Sanity
│   ├── sanity.config.js     # Configuration principale
│   ├── tailwind.config.js   # Styling Tailwind
│   ├── next.config.js       # Configuration Next.js
│   └── postcss.config.mjs   # Post-processing CSS
```

## 💼 Compétences Démontrées

### 🎯 Développement Frontend Moderne
- **Next.js mastery** avec les dernières fonctionnalités
- **TypeScript** pour un code robuste et maintenable
- **Component-based architecture** avec React
- **Responsive Design** et Mobile-First

### 🚀 Performance & Optimisation
- **SEO technique** et optimisation pour les moteurs de recherche
- **Core Web Vitals** optimisés
- **Bundle optimization** et code splitting
- **Image optimization** automatique

### 👥 Gestion de Projet Entrepreneurial
- **Prospection client** et négociation commerciale
- **Analyse des besoins** client et traduction technique
- **Gestion complète** du projet de A à Z
- **Communication** professionnelle et suivi client
- **Facturation** et gestion administrative
- **Respect des délais** et méthodologie agile

## 🎨 Aperçu Visuel

- Page d'accueil avec hero section
- Services et solutions énergétiques
- Portfolio de réalisations
- Interface responsive mobile/desktop


## 🌱 Apprentissages & Défis

**Défis techniques relevés :**
- **Configuration Sanity complexe** : schemaTypes, structure du studio, env variables
- **Routing dynamique** : génération automatique des pages prestations `[slug]`
- **Intégration Next.js + Sanity** : configuration des APIs et data fetching
- **Formation client approfondie** : accompagnement sur l'interface d'administration
- **SEO dynamique** : métadonnées générées depuis le contenu Sanity
- **Performance optimisée** : SSG pour les pages statiques, ISR pour le contenu dynamique

**Compétences développées :**
- **Intégration CMS Headless** avec Sanity et Next.js
- **Formation client** sur outils de gestion de contenu
- **Architecture JAMstack** moderne et performante
- **Migration technologique** complexe (Wix → Custom + CMS)
- **Conseil client** sur l'autonomie de gestion de contenu

## 📞 Contact Professionnel

Projet développé pour **Les Papillons Énergétiques**  
Via **Clem-It** - Micro-entreprise de développement web  
Développeur : Clément Vigouroux

---

*🚀 Projet freelance post-formation - Démonstration d'autonomie entrepreneuriale et technique*
