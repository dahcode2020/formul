# formul

Formulaire de demande de crédit (bilingue FR/EN), statique, sans dépendance externe.

## Pages

| Fichier | Description |
| --- | --- |
| `index.html` | Formulaire de demande de crédit : saisie guidée, aperçu, impression / export PDF, écran d'accès restreint par mot de passe. |
| `formulaire-interne.html` | Variante destinée à l'usage interne. |

Chaque fichier est autonome (CSS + JS inline) : il suffit de l'ouvrir dans un navigateur ou de le
déposer sur n'importe quel hébergement statique (GitHub Pages, Netlify…).

## Charte graphique

Le formulaire reprend l'identité visuelle du site Sillage Capital :

| Élément | Valeur |
| --- | --- |
| Encre / fond | `#0a0a0a` (ink) / `#f1efe8` (paper) |
| Accent | `#d9ff43` (acid), `#ff5a36` (orange, réservé aux alertes) |
| Typographies | Archivo (titres, champs) · DM Mono (libellés, boutons, mentions) |
| Boutons | angles vifs, libellés mono capitales, flèche `↗` |
| Champs | filet simple en soulignement, focus acide surligné |
| Aperçu imprimable | titres de section en aplat noir, contrepoint acide |

Le mot de passe d'accès au formulaire est défini par la constante `GATE_PASS` dans le JS
(mot de passe actuel : `VioXsRAiC6wy`). Il est visible dans le code source : c'est un dissuasif,
pas une protection réelle — pour un formulaire confidentiel, il faut une authentification serveur.
Aucune donnée saisie n'est transmise : tout reste dans le navigateur de l'utilisateur.

## Afficher le projet dans Bolt.ai (ou tout autre sandbox en ligne)

Le dépôt contient la configuration nécessaire pour être lancé comme une application
Vite (pages HTML statiques, aucun framework) :

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/ (index.html + formulaire-interne.html)
```

`vite.config.js` est réglé pour les aperçus embarqués : écoute sur `0.0.0.0`,
`allowedHosts: true` (domaines `*.bolt.host`, `*.e2b.app`, `*.e2b.dev`…),
`cors: true` et HMR adapté au proxy HTTPS.

**Import dans Bolt.ai** : ouvrir <https://bolt.new/~/github.com/dahcode2020/formul>
(ou *Import from GitHub* → `dahcode2020/formul`), puis, si Bolt demande une commande
de lancement : `npm run dev`, port `5173`.

> À l'ouverture, le formulaire est masqué par l'écran « Accès restreint » : saisir le mot
> de passe (`GATE_PASS`, actuellement `VioXsRAiC6wy`) pour voir la page.
> Pour une démonstration sans mot de passe, ouvrir `formulaire-interne.html`
> (même formulaire, sans écran de verrouillage).

## `livraison-cccapital/`

Paquets prêts à intégrer ce formulaire dans le dépôt `dahcode2020/cccapital-`
(page d'accueil « Sillage Capital » + nouvelle page `demande-credit.html`) :

- `0001-formulaire-demande-de-credit.patch` — commit complet, à appliquer avec `git am` ;
- `homepage-formulaire.bundle` — la même branche, à récupérer avec `git fetch` ;
- `PR-body.md` — corps de pull request prêt à l'emploi ;
- `INSTRUCTIONS.md` — mode d'emploi et contexte.

Non poussé sur `cccapital-` : la connexion GitHub de l'environnement de travail n'y dispose que
d'un accès en lecture (push refusé, `403`).
