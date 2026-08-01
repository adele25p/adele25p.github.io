# Enregistrement de décision d'architecture — Portfolio Adèle
Ce dossier regroupe les décisions d'implémentation du projet : des choix de code touchant plusieurs fichiers, ou tranchés entre plusieurs approches possibles.

## Index

| N° | Titre | Date | Statut |
|---|---|---|---|
| [0001](./0001-composables-globaux.md) | Composables globaux — thème + langue | 2026-07-28 | Accepté |
| [0002](./0002-contenu-bilingue.md) | Consommation du contenu bilingue `{fr, en}` | 2026-07-30 | Accepté |
| [0003](./0003-filtres-projects.md) | Filtres et tri dynamiques — page Projects | 2026-08-01 | Accepté |

## Structure d'un ADR

```md
# NNN. Titre

**Statut** : Accepté | Remplacé par NNN
**Date** : YYYY-MM-DD

## Contexte
Besoin ou problème à l'origine de la décision.

## Options envisagées
- Option A
- Option B
- Option retenue

## Décision
Choix fait, en une ou deux phrases.

## Conséquences
- Fichier(s) concerné(s) : chemin complet depuis `src/` → `src/composables/useTheme.js`
- Impact/contrainte : phrase courte
```

> Immuable une fois accepté — une révision crée un nouvel ADR, ne modifie pas l'ancien.