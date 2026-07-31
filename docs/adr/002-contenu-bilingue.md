# 0002. Consommation du contenu bilingue `{fr, en}`

**Statut** : Accepté
**Date** : 2026-07-30

## Contexte
Les données (`identity.json`, `projects.json`...) stockent les champs texte en objets `{ fr: "...", en: "..." }` (cf. `tech-spec.md` §4). Chaque composant qui affiche ces champs doit choisir la bonne langue selon la locale active, sans dupliquer cette logique partout.

## Options envisagées
- Accès direct dans le template : `project.title[locale.value]`
- Fonction utilitaire `pickLocale(field)` exposée par `useLocale()`, appelée dans le template ou en `computed`

## Décision
`useLocale()` expose une fonction `pickLocale(field)` qui renvoie `field[locale.value]` (avec repli sur `en` si la clé demandée est absente). Les composants l'utilisent partout où un champ `{fr, en}` est affiché, plutôt que d'indexer l'objet directement.

## Conséquences
- Un seul point de logique pour le choix de langue et le repli — évite d'écrire `field[locale.value] ?? field.en` dans chaque composant.
- Fichier concerné : `src/composables/useLocale.js`
- Consommateurs :
  - `src/components/projects/ProjectCard.vue`
  - `src/components/projects/ProjectPopup.vue`
  - `src/views/AboutView.vue`
  - `src/views/HomeView.vue`
- Les clés UI (`src/i18n/locales/fr.js`, `en.js`) restent gérées par `$t()`/`t()` (vue-i18n), non concernées par ce pattern — la distinction contenu vs UI reste celle de `tech-spec.md` §4.