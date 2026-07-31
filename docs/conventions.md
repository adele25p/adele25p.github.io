# Conventions — Portfolio Adèle
Document de règles de développement : 

**Version** : v1.0

## Sommaire pour recherche rapide
 
| Je veux... | Section |
|---|---|
| Savoir où ranger un fichier / comprendre l'arborescence du repo | [§1](#1-organisation-du-repo) |
| Nommer un fichier, une variable, une classe CSS, une route... | [§2](#2-conventions-de-nommage) |
| Structurer un composant Vue (ordre des blocs, props, emits, slots...) | [§3](#3-structure-des-composants-vue) |
| Écrire ou organiser du CSS, décider entre `base.css` et `<style scoped>` | [§4](#4-gestion-du-css) |
| Commenter mon code, documenter une fonction/un composable | [§5](#5-documentation-du-code) |
| Écrire un commit, créer un tag, tester avant mise en prod | [§6](#6-git) |

## 1. Organisation du repo

| Fichier / Dossier | Rôle |
|---|---|
| *.gitignore* | Fichiers/dossiers exclus du versioning (`node_modules`, `dist`, `.env`). |
| *README.md* | Point d'entrée du repo : présentation du projet, installation, lancement. |
| *package.json* | Dépendances, scripts (`dev`, `build`, `preview`), métadonnées. Fichier généré automatiquement par Vite. Ne pas le modifier manuellement.|
| *package-lock.json* | Fige les versions exactes de toutes les dépendances, pour garantir des installs identiques partout.  Fichier généré automatiquement par npm install (lors de la première installation) et mis à jour à chaque modification de package.json. Ne pas le modifier manuellement. |
| *vite.config.js* | Config Vite : plugin Vue, plugin Tailwind v4, alias de résolution. |
| *index.html* | Page HTML unique de la SPA. Contient `#app`, monté par Vue. |
| | |
| *public/* | |
| *↳ favicon.ico* | Favicon. |
| *↳ fonts/* | Fichiers de police (`.woff2`). |
| *↳ sitemap.xml* | Liste les URLs du site pour aider les moteurs de recherche à les découvrir |
| *↳ robots.txt* | Indique aux robots des moteurs de recherche quelles pages ils peuvent explorer (ici : tout, site public sans restriction). |
| | |
| *src/* | |
| *↳ main.js* | Point d'entrée JS : crée l'app, installe router/i18n, mount sur `#app`. |
| *↳ App.vue* | Composant racine : layout global (nav, footer, bandeau) + `<router-view>`. |
| *↳ router/* | |
| &nbsp;&nbsp;&nbsp;*↳ index.js* | Déclaration des routes, mode `history`. |
| *↳ i18n/* | |
| &nbsp;&nbsp;&nbsp;*↳ index.js* | Config vue-i18n, détection langue navigateur. |
| &nbsp;&nbsp;&nbsp;*↳ locales/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ fr.json*, *en.json* | Traductions UI (labels, textes d'interface — pas le contenu métier). |
| *↳ data/* | Contenu du site, un fichier `json` par entité. |
| *↳ assets/* | |
| &nbsp;&nbsp;&nbsp;*↳ style/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ base.css* | `@import "tailwindcss"` + `@theme` (tokens) + styles globaux. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ fonts.css* | Déclarations `@font-face` uniquement. |
| &nbsp;&nbsp;&nbsp;*↳ images/* | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ projects/* | Captures d'écran référencées dans `projects.json`. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*↳ (racine)* | Avatar et autres images d'interface, à plat. |
| *↳ components/* | |
| &nbsp;&nbsp;&nbsp;*↳ layout/* | Bandeau statut, nav desktop/mobile, footer, toggles. |
| &nbsp;&nbsp;&nbsp;*↳ projects/* | Card, filtres, pop-up de détail. |
| &nbsp;&nbsp;&nbsp;*↳ ui/* | Composants génériques, indépendants d'une page. |
| *↳ composables/* | Logique réutilisable. |
| *↳ views/* | Une vue par page, mappée aux routes.|
| | |
| `.github/` | |
| *↳ workflows/deploy.yml* | Pipeline de déploiement GitHub Actions vers GitHub Pages. |

> **Pas de *tailwind.config.js* ** — config CSS-first avec Tailwind v4 (`@theme` dans `base.css`).

## 2. Conventions de nommage

### Dossiers
- Dossier — **minuscule**, sans séparateur → `components`

### Fichiers de composants
- Composant standard — **PascalCase** → `ProjectCard.vue`
- Vue — **PascalCase** · suffixe **View** → `HomeView.vue`
- Composant layout (unique) — **PascalCase** · préfixe **The** → `TheHeader.vue`
- Composant générique — **PascalCase** · préfixe **Base** → `BaseButton.vue`
- Composant imbriqué — **PascalCase** · préfixe = nom du parent → `ProjectCardTag.vue`

### Composables / JavaScript
- Composable — **camelCase** · préfixe **use** → `useTheme.js`
- Variable / fonction — **camelCase** → `formatDate()`
- Booléen — **camelCase** · préfixe **is**/**has**/**should** → `isDarkMode`
- Constante globale — **SCREAMING_SNAKE_CASE** → `DEFAULT_LOCALE`

### CSS
- Fichier CSS — **kebab-case** → `base.css`
- Classe custom — **kebab-case** → `.section-heading`
- Variable custom (`@theme`) — **kebab-case**, préfixée par **--** → `--statusbar-height`

### Images
- Fichier image — **kebab-case**, descriptif → `portfolio-card-preview.avif`

### Données et traduction
- Fichier de données — **camelCase**, singulier → `identity.json`
- Fichier de traduction — code langue ISO → `fr.json`
- Clé JSON — **camelCase** → `shortDescription`

### Props
- Déclaration (script) — **camelCase** → `projectData`
- Utilisation (template) — **kebab-case** → `:project-data="..."`

### Emits
- Déclaration (script) — **camelCase** → `defineEmits(['updateFilter'])`
- Utilisation (template) — **kebab-case** → `@update-filter="..."`

### Routes
- `path` — **kebab-case** → `/projects`
- `name` — **PascalCase**, identique au nom de la vue sans `View` → `Home`

## 3. Structure des composants Vue

### Ordre des blocs
- Ordre du fichier — `<script setup>` → `<template>` → `<style scoped>`

### Ordre à l'intérieur de `<script setup>`
- Imports
- Props — `defineProps(...)`
- Emits — `defineEmits(...)`
- Composables — `useTheme()`, `useLocale()`...
- État réactif — `ref()`, `reactive()`
- Computed — `computed(...)`
- Fonctions / méthodes
- Watchers — `watch(...)`, `watchEffect(...)`
- Lifecycle hooks — `onMounted(...)`, etc.

### Composition API
- `<script setup>` obligatoire, pas d'Options API → pas de `data()`, `methods: {}`

### Props
- Typage et validation obligatoires → `defineProps({ title: { type: String, required: true } })`
- Casse — voir section 2

### Emits
- Typage et validation obligatoires → `defineEmits({ updateFilter: (value) => typeof value === 'string' })`
- Casse — voir section 2

### Watchers
- Usage — synchroniser un `ref` (thème, langue) avec `localStorage` dans un composable → `watch()` dans `useTheme.js`
- Localisation — dans le composable concerné, pas dans le composant

### Composants génériques et réutilisables
- Principe — anticiper la réutilisation via props + slots quand une évolution future la rend probable (cf. PROJECT_NOTES.md)
- Limite — pas de généralisation sans usage futur concret identifié

### Slots
- Usage — contenu variable injecté par le parent dans un composant "coquille" → `<BasePopup><h2>...</h2></BasePopup>`
- Nommage slot nommé (si plusieurs zones) — kebab-case → `<template #popup-footer>`

### Template
- Composants auto-fermants si sans contenu → `<ProjectCard />`
- `v-for` — toujours avec `:key` unique → `<ProjectCard v-for="p in projects" :key="p.id" />`
- `v-if` + `v-for` — jamais sur le même élément, filtrer via `computed` en amont
- Raccourcis de directives — toujours utilisés → `:title="..."`, `@click="..."` au lieu de `v-bind:title="..."`, `v-on:click="..."`

### Traduction (i18n)
- Dans le template — `$t('key')` → `{{ $t('nav.home') }}`
- Dans le script — `useI18n()` puis `t('key')` → `const { t } = useI18n()`

### Style
- `scoped` systématique, pour éviter les fuites de style entre composants

## 4. Gestion du CSS

### Principe général
- CSS général — `assets/style/base.css`, pour ce qui est réutilisé sur plusieurs pages/composants
- CSS spécifique — `<style scoped>` dans le composant concerné, via classes custom + `@apply`

### `base.css`
- Rôle — import Tailwind, tokens de thème (`@theme`), classes typographiques globales, gestion du dark mode
- Dark mode — `@custom-variant dark` défini une seule fois ici, jamais redéfini ailleurs

### `<style scoped>` dans un composant
- Approche — classes custom via `@apply`, pas d'utilitaires Tailwind empilés directement dans le template
- Obligatoire — `@reference "@/assets/style/base.css";` en première ligne de tout bloc `<style scoped>` utilisant `@apply` → sans ça, les tokens du thème (`taupe`, `font-heading`...) ne sont pas reconnus et `@apply` plante
- `scoped` systématique (cf. section 3)

### Règle de décision : général ou spécifique ?
- Utilisé sur 2+ composants/pages → `base.css`
- Utilisé sur 1 seul composant → `<style scoped>` du composant
- Token de design (couleur, police, espacement custom) → toujours `@theme` dans `base.css`, jamais une valeur en dur dans un composant

Vu juste — le reste du doc n'a pas de sous-numérotation (`### Dossiers`, `### Fichiers de composants`...), seulement les sections principales sont numérotées. Je corrige :

## 5. Documentation du code

Langue - Anglais

### En-tête de fichier
- Systématiquement →
```vue
<!--
  App.vue - Main application component
  This file defines the main structure of the application, including the layout components and routing views.
  It imports necessary components and sets up the template for rendering the application.
-->
```

### Commentaires inline
- Expliquer le *pourquoi*, pas le *quoi*
- Section dans un fichier — ouverture/fermeture explicites → `// Theme (light/dark) handling` ... `// End theme (light/dark) handling`

### Fonctions et composables
- JSDoc systématique
- Chaque fonction exportée — une ligne de commentaire juste au-dessus, décrivant ce qu'elle fait → `// Returns the initial locale based on browser preferences`

### Code désactivé temporairement
- Feature prête mais pas encore branchée — laissée en commentaire dans le `<template>`, précédée d'un commentaire expliquant pourquoi

## 6. Git

### Branches
- Une branche par grande version — `v0`, `v1`, `v2`...
- `main` — toujours alignée sur la dernière version stable terminée
- Nommage — minuscule, `v` + numéro → `v1`

### Commits
- Langue — anglais
- Titre — verbe à l'impératif, majuscule initiale, pas de point final → `Add index.html`
- Corps (optionnel) — ligne(s) supplémentaire(s) pour préciser le contexte/contenu
- Un commit = un changement cohérent

### Tags
- Format — `vX.X` (ex : `v1.0`, `v1.1`)
- Usage — un tag déclenche la génération automatique du numéro de version affiché dans le footer (cf. TECH_SPEC.md section 7) ; créer un tag à chaque version jugée stable/publiable

### Avant mise en prod
- Test sur un repo GitHub jetable avant fusion sur le repo final (cf. TECH_SPEC.md section 7), pour éviter les déploiements cassés visibles publiquement