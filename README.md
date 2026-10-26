# Sillage Capital — site

Site vitrine statique + formulaire de demande de crédit.

| Fichier | Contenu |
| --- | --- |
| `index.html` | **Page d'accueil du site** (vitrine Sillage Capital). Affichée en premier par Bolt et par tout serveur statique. |
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

## Charte graphique

Le formulaire reprend l'identité du site : encre `#0a0a0a`, papier `#f1efe8`, acide `#d9ff43`,
orange `#ff5a36` en accent d'alerte, Archivo + DM Mono, angles vifs, boutons mono capitales,
champs en filet souligné, aperçu imprimable documentaire (sections en aplat noir).
