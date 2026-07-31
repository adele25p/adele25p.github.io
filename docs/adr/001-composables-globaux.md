# 0001. Composables globaux — thème + langue

**Statut** : Accepté
**Date** : 2026-07-28

## Contexte
Le thème (clair/sombre/système) et la langue sont lus et modifiés depuis plusieurs composants (nav desktop, menu burger mobile, toggles) et doivent rester synchronisés partout à la fois, avec persistance en localStorage.

## Options envisagées
- `provide`/`inject` depuis `App.vue`
- Store Pinia dédié
- État réactif déclaré au niveau module, exposé par un composable (pattern singleton)

## Décision
État réactif (`ref`) déclaré hors de la fonction `useTheme()` / `useLocale()`, au niveau module. Chaque import du composable renvoie la même instance partagée — pas de nouvel état créé à chaque appel.

## Conséquences
- Pas de Pinia nécessaire, cohérent avec `tech-spec.md` §1.
- Fichiers concernés :
  - `src/composables/useTheme.js`
  - `src/composables/useLocale.js`
- Consommateurs directs :
  - `src/components/layouts/NavDesktop.vue`
  - `src/components/layouts/NavMobile.vue`
- Valeur lue depuis `localStorage` à l'initialisation du module (pas dans `onMounted`) — disponible dès le premier rendu, évite un flash de valeur par défaut.
- `watch()` sur le ref écrit dans `localStorage` à chaque changement (cf. `conventions.md` section Watchers).