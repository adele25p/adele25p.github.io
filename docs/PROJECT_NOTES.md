# Notes de projet — Portfolio Adèle
Document de suivi : méthode de travail, pistes d'évolution et points encore en suspens.

**Version** : v1.0

**Objectif** : regrouper tout ce qui ne relève ni de l'intention de design (DESIGN_BRIEF.md) ni de la spécification technique figée (SPEC_TECHNIQUE.md) — ce document est amené à évoluer librement pendant tout le projet, contrairement aux deux autres qui décrivent un état cible stable.

## 1. Outils & méthode de travail
**Outils d'aide utilisés** : Claude (conception, structuration du design brief, aide au code), GitHub Copilot (aide au code) *(liste à compléter si d'autres outils utilisés)*

**Philosophie** : les outils IA ont aidé à l'exécution (code, structuration), mais la conception, les choix de design et de contenu restent définis et validés par moi

## 2. Évolutions futures / Idées à explorer

- **Vue grille/liste** : possibilité de basculer entre une vue en grille et une vue en liste pour la page Projects (exercice d'implémentation intéressant, pas de besoin précis identifié encore)
- **Personnalisation de la palette** : choisir une palette custom japandi - inspiration :
![Image inpiration clair](assets/inspiration/clair.jpg) et ![Image inspiration sombre](assets/inspiration/sombre.jpg)
- **Page Documentation** : nouvelle page documentation, contenant :
  - Fiches de révision personnelles
  - Documentation sur des outils
  - Guide d'installation d'un environnement de dev sur macOS
- **Statistiques de visite** : compteur de visites simple (global et/ou par page), intérêt = exercice d'implémentation backend intéressant, pas de besoin précis identifié encore
- **Formulaire(s)** : intérêt pédagogique (exercice de prog : validation, envoi, feedback) plus que besoin fonctionnel précis — usage exact à définir (contact ? inspiration : terminal interactif ("tapez 'help' ou votre message"))
- **Mini-admin** : éditer projets/articles sans modifier les fichiers de données à la main
- **Version japonaise du site** : ajouter le japonais comme 3e langue (en plus de FR/EN)
- **Loader animé** : ajouter un loader animé pour les pages - inspiration : Le générique de Mon voisin Totoro (film Ghibli)
- **Animation sur la page 404** : ajouter une animation sur la page 404 - inspiration : Le générique de Mon voisin Totoro (film Ghibli)
- **Génération d'un pdf du CV** : PDF du CV généré à partir des données du site pour éviter de maintenir deux fichiers séparés (CV et site) — à voir si faisable côté front ou si besoin d'un petit backend pour générer le PDF


## 3. Questions ouvertes
- Design du logo (SPEC_TECHNIQUE.md, section 7)
- Design exact de l'animation de la page 404 (SPEC_TECHNIQUE.md, section 3)
- Autres tris pour la page Projects (alphabétique ? autre ?) (SPEC_TECHNIQUE.md, section 3)
- Fonctionnalités spécifiques non définies pour les pages Accueil et About Me (SPEC_TECHNIQUE.md, section 3)
- Contenu exact du pop-up projet (SPEC_TECHNIQUE.md, section 3) et structure de données correspondante (SPEC_TECHNIQUE.md, section 4)
- Nombre exact de colonnes dans la grille Projects selon les breakpoints (SPEC_TECHNIQUE.md, section 5)

## 4. Notes diverses
- Il faut faire la photo de profil pour la page d'accueil et la page About Me (même photo que sur LinkedIn)
