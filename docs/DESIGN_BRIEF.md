# Design Brief — Portfolio Adèle
Document de cadrage : contexte, cible, périmètre et direction visuelle du projet.

**Version** : v1.0

**Objectif** : poser les intentions et les choix de conception (pourquoi ce projet, pour qui, quelle ambiance visuelle) avant de rentrer dans le détail technique — sert de référence pour toute décision de design ou de contenu.

## 1. Contexte & objectif
**Type de projet** : SPA (Single Page Application) — portfolio personnel

**Pourquoi ce projet** : Vitrine de compétences techniques pour candidatures/stages, tout en servant de terrain d'entraînement (Vue 3, design system fait main, bilinguisme) et de vitrine perso à montrer/partager

## 2. Public cible
**Utilisateurs principaux** : recruteurs et toute personne s'intéressant à mon profil (pas seulement dans un cadre de recrutement)

**Ce qu'ils cherchent en priorité** : un aperçu général de qui je suis dès la Home (sans détail) ; ceux qui veulent creuser vont sur la page About pour le détail (parcours, compétences...)

## 3. Périmètre
**Inclus** :
  - 3 pages (Accueil, Projects, About Me)
  - Bilingue FR / EN
  - Thème clair/sombre

**Exclu (pour l'instant)** :
  - Backend/API — contenu 100% statique et en dur dans le code à ce stade
  - Formulaire de contact fonctionnel — uniquement des liens directs (email, réseaux sociaux)
  - E-commerce / paiement

## 4. Direction visuelle
**Ambiance recherchée** : Japandi calme façon Ghibli — épuré, aéré, tons naturels et doux, jamais criard

**Couleurs** : couleurs par défaut de Tailwind (taupe, ambre, etc.) pour prototyper vite

**Typographies** :
  - Titres : `'Tsukimi Rounded', 'Zen Maru Gothic', sans-serif` — Tsukimi Rounded pour le latin/kana, repli automatique sur Zen Maru Gothic pour les kanji (même esprit arrondi, transition discrète)
  - Corps de texte : `'Noto Sans JP', sans-serif` — utilisée en toutes circonstances (latin, kana, kanji), lisible en texte long, cohérence visuelle garantie sur tous les caractères

**Animations / transitions** : douces et lentes (300-400ms, easing doux), pas d'effet flashy

**Style général** : beaucoup d'espace blanc, coins légèrement arrondis, ombres très subtiles plutôt que bordures dures

---
*La stack technique (framework, build tool, routing, i18n, gestion d'état...) est spécifiée dans SPEC_TECHNIQUE.md, section 1. Les questions de méthode de travail, évolutions futures et points en suspens sont regroupés dans NOTES_PROJET.md.*