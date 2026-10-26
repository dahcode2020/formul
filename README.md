# formul

Formulaire de demande de crédit (bilingue FR/EN), statique, sans dépendance externe.

## Pages

| Fichier | Description |
| --- | --- |
| `index.html` | Formulaire de demande de crédit : saisie guidée, aperçu, impression / export PDF, écran d'accès restreint par mot de passe. |
| `formulaire-interne.html` | Variante destinée à l'usage interne. |

Chaque fichier est autonome (CSS + JS inline) : il suffit de l'ouvrir dans un navigateur ou de le
déposer sur n'importe quel hébergement statique (GitHub Pages, Netlify…).

Le mot de passe d'accès au formulaire est défini par la constante `GATE_PASS` dans le JS
(mot de passe actuel : `VioXsRAiC6wy`). Il est visible dans le code source : c'est un dissuasif,
pas une protection réelle — pour un formulaire confidentiel, il faut une authentification serveur.
Aucune donnée saisie n'est transmise : tout reste dans le navigateur de l'utilisateur.

## `livraison-cccapital/`

Paquets prêts à intégrer ce formulaire dans le dépôt `dahcode2020/cccapital-`
(page d'accueil « Sillage Capital » + nouvelle page `demande-credit.html`) :

- `0001-formulaire-demande-de-credit.patch` — commit complet, à appliquer avec `git am` ;
- `homepage-formulaire.bundle` — la même branche, à récupérer avec `git fetch` ;
- `PR-body.md` — corps de pull request prêt à l'emploi ;
- `INSTRUCTIONS.md` — mode d'emploi et contexte.

Non poussé sur `cccapital-` : la connexion GitHub de l'environnement de travail n'y dispose que
d'un accès en lecture (push refusé, `403`).
