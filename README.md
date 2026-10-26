# CC Investment — site

Site vitrine statique + formulaire de demande de crédit.

| Fichier | Contenu |
| --- | --- |
| `index.html` | **Page d'accueil du site** (vitrine CC Investment). Affichée en premier par Bolt et par tout serveur statique. |
| `demande-credit.html` | Formulaire de demande de crédit bilingue FR/EN : saisie guidée, aperçu, impression / PDF, écran « Accès restreint » par mot de passe. Accessible depuis le menu du site. |
| `formulaire-interne.html` | Le même formulaire **sans** écran de mot de passe (démonstration / usage interne). |

Chaque page est autonome : CSS et JS sont inline, aucune dépendance de production.

## Lancer en local ou dans un sandbox (Bolt.ai, Codespaces…)

```bash
npm install
npm run dev      # http://localhost:5173  → page d'accueil du site
npm run build    # génère dist/ (les trois pages)
npm run preview  # sert dist/ sur http://localhost:4173
```

`vite.config.js` est réglé pour les aperçus embarqués : écoute sur `0.0.0.0`,
`allowedHosts: true` (`*.bolt.host`, `*.e2b.app`…), `cors: true`, HMR adapté au proxy HTTPS.

**Import Bolt.ai** : <https://bolt.new/~/github.com/dahcode2020/formul> (*Import from GitHub*),
puis `npm install` et `npm run dev` (port 5173). La page d'accueil du site s'affiche en premier ;
le formulaire est accessible via le lien « Demande de crédit » de la navigation.

## Accès au formulaire

Le mot de passe est défini dans `demande-credit.html` (constante `GATE_PASS`, actuellement
`VioXsRAiC6wy`). Il est visible dans le code source : c'est un dissuasif, pas une protection
réelle. Aucune donnée saisie n'est transmise : tout reste dans le navigateur de l'utilisateur.

## Identité et localisation

Le site présente CC Investment comme basé à Monaco. La charte reprend l’image fournie : bleu marine (`#00205c`, `#001756`, `#00438d`), gris argent (`#929395`) et blanc. Les titres utilisent Cormorant Garamond et les textes Inter.

E-mail de contact : `contact@churchill-capital.pro`. Les formulaires de contact, d’inscription à la note et de demande de crédit ouvrent un brouillon adressé à cette boîte dans l’application de messagerie du visiteur. La page est statique et ne peut pas envoyer d’e-mail directement sans serveur ou service d’envoi configuré : le visiteur doit confirmer l’envoi. Pour le formulaire de crédit, les fichiers sélectionnés doivent être joints manuellement au brouillon.
