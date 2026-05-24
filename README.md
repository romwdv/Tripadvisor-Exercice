# 🌍 TripAdvisor Clone — Exercice HTML/CSS/JS

> Reconstitution de la page d'accueil d'un site de voyage type TripAdvisor, réalisée dans le cadre d'une formation chez **Le Reacteur**.

🔗 **[Voir le site en ligne](https://sweet-puffpuff-524baf.netlify.app)**

> ⚠️ Il s'agit d'un exercice de mise en page. Les liens de navigation ne sont pas fonctionnels.

---

## 📋 Présentation

Ce projet reproduit la page d'accueil d'un site type TripAdvisor pour la destination **Paris**. Il comprend :

- Un **header** avec navigation et icônes responsives
- Une **hero section** avec galerie de photos et navigation par catégories (Hôtels, Restaurants, Activités…)
- Des **sections de contenu** : incontournables parisiens à voir et où se restaurer, avec notes et icônes
- Un **guide des voyageurs** avec articles liés
- Une **modal de formulaire de contact** avec gestion de l'envoi
- Un **footer** sobre

---

## 🛠️ Technologies utilisées

| Technologie                                  | Usage                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| HTML5                                        | Structure sémantique unique (`index.html`)                    |
| CSS3                                         | Styles, Flexbox / Grid, responsive via media queries          |
| JavaScript (Vanilla)                         | Manipulation du DOM, gestion de la modal, envoi du formulaire |
| [Remixicon](https://remixicon.com/) `v4.9.1` | Icônes (via CDN)                                              |
| [Axios](https://axios-http.com/) `v1.6.7`    | Requêtes HTTP vers le backend (via CDN)                       |
| Netlify                                      | Hébergement et déploiement continu                            |

---

## 🗂️ Structure du projet

```
📁 Tripadvisor-Exercice/
├── index.html
└── 📁 assets/
    ├── 📁 css/
    │   ├── reset.css
    │   └── index.css
    ├── 📁 js/
    │   └── script.js
    └── 📁 img/
        ├── tripadvisor_logo.svg
        ├── favicon-tripadvisor.svg
        ├── 📁 se_divertir/   (Tour Eiffel, Louvre, Arc de Triomphe…)
        ├── 📁 se_restaurer/  (photos de plats)
        └── 📁 guide/         (illustrations articles)
```

---

## 📐 Responsive Design

Le layout s'adapte à **3 breakpoints** via media queries CSS :

| Breakpoint       | Cible    | Comportement                                                             |
| ---------------- | -------- | ------------------------------------------------------------------------ |
| `< 768px`        | Mobile   | Menu hamburger, icônes seules dans la nav, certaines catégories masquées |
| `768px – 1024px` | Tablette | Affichage intermédiaire, icônes + libellés partiels                      |
| `> 1024px`       | Desktop  | Navigation complète, layout multi-colonnes                               |

Les classes utilitaires `.hide`, `.hide-lg` et `.sm-display` dans le HTML pilotent la visibilité des éléments selon le breakpoint actif.

---

## ⚙️ Fonctionnalités JavaScript

### Modal de contact

- Le bouton **"Connectez-vous"** (`#connect`) ouvre la modal `#modal`
- La croix `#close-modal` ferme la modal
- À l'ouverture / fermeture, la classe `hide-modal` est basculée sur la modal

### Formulaire & Axios

Le formulaire `#contactForm` collecte : prénom, nom, email et message.

À la soumission, les données sont envoyées via une requête `POST` avec Axios vers le backend (hébergé dans un dépôt séparé). En cas de succès, le formulaire est remplacé par un message de confirmation (`#submitThanks`) ; en cas d'erreur, une alerte est affichée.

---

## 🔗 Dépôts liés

| Repo                                                     | Description                               |
| -------------------------------------------------------- | ----------------------------------------- |
| Ce dépôt                                                 | Frontend — HTML / CSS / JS                |
| [Backend](https://github.com/romwdv/Tripadvisor-backend) | API — traitement du formulaire de contact |

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/romwdv/Tripadvisor-Exercice.git

# Ouvrir index.html dans un navigateur
# Ou utiliser l'extension Live Server (VS Code)
```

> Pour que l'envoi du formulaire fonctionne, le backend doit être lancé localement ou accessible via une URL distante.

---

## 👤 Auteur

Exercice réalisé par **Romain** dans le cadre de la formation **[Le Reacteur](https://www.lereacteur.io/)**.
