# 0003. Filtres et tri dynamiques — page Projects

**Statut** : Accepté
**Date** : 2026-08-01

## Contexte
`tech-spec.md` §3 impose des filtres générés automatiquement depuis `projects.json` (pas de liste figée), sur cinq critères (tags, statut, tech stack, période, rôle), combinables entre eux, plus un tri (récent/ancien). Il faut décider comment structurer la réactivité pour que le compteur et la grille restent synchronisés sans dupliquer la logique de filtrage.

## Options envisagées
- Un filtre appliqué par étape (`.filter()` enchaînés) recalculé dans chaque endroit qui en a besoin (grille, compteur)
- Un seul `computed` `filteredProjects`, dérivé des refs de filtres actifs, consommé partout où le résultat filtré est nécessaire
- Génération des listes de filtres disponibles (valeurs de tags, tech stack...) en dur, mise à jour manuelle si `projects.json` change

## Décision
Un `computed` unique `filteredProjects` recalculé à partir des refs `activeFilters` (objet regroupant les 5 critères) et `sortOrder`. Les valeurs disponibles pour chaque filtre (liste des tags, tech stack, périodes présentes...) sont elles-mêmes dérivées par `computed` à partir de `projects.json`, jamais codées en dur.

`role` est un objet `{ type: 'solo' | 'team', detail: {fr, en} | null }` — `type` alimente le filtre (deux valeurs stables), `detail` porte le rôle précis en prose, hors filtre. `category` (une valeur unique) est séparé de `tags` (tableau, reste multi-valeurs) dans le schéma `projects.json` — cf. `tech-spec.md` §4.

## Conséquences
- Le compteur de projets (§3 "8 projets") et la grille lisent la même source (`filteredProjects.value.length` et `filteredProjects.value`) — pas de désynchronisation possible.
- Fichier concerné : `src/views/ProjectsView.vue`
- Source de données : `src/data/projects.json`
- Ajouter un tag ou une tech stack dans `projects.json` met à jour les filtres disponibles automatiquement, sans toucher au code.
- Filtres combinés en ET (un projet doit correspondre à tous les critères actifs simultanément) — à préciser si un comportement en OU est souhaité pour un critère (ex: plusieurs tech stack cochées).
- Le filtre par rôle repose sur `role.type`, pas sur un texte libre — fiable quel que soit le contenu de `role.detail`.