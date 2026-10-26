# Livraison — formulaire de demande de crédit dans `dahcode2020/cccapital-`

## Ce qui a été fait

Le dépôt `https://github.com/dahcode2020/cccapital-.git` a été cloné localement dans
`/home/user/cccapital-`, et une branche `homepage-formulaire` y contient **un commit prêt à pousser** :

```
75720c4 Ajout du formulaire de demande de credit et lien depuis l'accueil
  + demande-credit.html   (formulaire de demande de crédit, 54 Ko, autonome : CSS + JS inclus,
                           aperçu, impression PDF, écran « Accès restreint » par mot de passe conservé,
                           restylé selon la charte du site : ink / papier / acid, Archivo + DM Mono,
                           angles vifs, filets en soulignement, cartouches acide)
  ~ index.html            (+3 lignes : liens « Demande de crédit » dans la nav desktop,
                           le menu mobile et le pied de page ; la page vitrine existante est intacte)
```

Décisions retenues (selon vos réponses) :
- la page d'accueil existante (`Sillage Capital`) **n'est pas remplacée** ; le formulaire est ajouté
  à côté, en `demande-credit.html`, avec des liens depuis l'accueil ;
- le formulaire suit la **charte graphique du site** (`--ink #0a0a0a`, `--paper #f1efe8`,
  `--acid #d9ff43`, `--orange #ff5a36`, Archivo + DM Mono, angles vifs, boutons mono capitales) ;
- l'écran « Accès restreint » avec mot de passe est **conservé** (mot de passe actuel : `VioXsRAiC6wy`,
  défini par la constante `GATE_PASS` dans `demande-credit.html`).

## Blocage : droits GitHub insuffisants

Le `git push` vers `dahcode2020/cccapital-.git` est refusé par GitHub :

```
remote: Permission to dahcode2020/cccapital-.git denied to dahcode2020.
fatal: The requested URL returned error: 403
```

La connexion GitHub de cet environnement ne dispose que d'un accès **lecture** sur ce dépôt
(seul `dahcode2020/formul` est autorisé en écriture). Il n'est donc pas possible de pousser la
branche ni d'ouvrir la PR depuis ici.

### Solution 1 — autoriser le dépôt dans Arena (recommandé)

Reconnecter GitHub dans Arena en cochant `dahcode2020/cccapital-` dans les dépôts accessibles,
puis me le dire : je pousse et j'ouvre la PR immédiatement.

### Solution 2 — pousser depuis votre machine

```bash
git clone https://github.com/dahcode2020/cccapital-.git
cd cccapital-
git checkout -b homepage-formulaire

# depuis ce dépôt (formul) :
git am /chemin/vers/livraison-cccapital/0001-formulaire-demande-de-credit.patch

git push -u origin homepage-formulaire
gh pr create --base main --head homepage-formulaire \
  --title "Formulaire de demande de crédit + lien depuis l'accueil" \
  --body-file /chemin/vers/livraison-cccapital/PR-body.md
```

Variante sans `git am` : copier `demande-credit.html` (le `index.html` de `formul`) et les 3 lignes
de lien ajoutées dans `index.html`, ou rejouer le bundle :
`git fetch /chemin/vers/homepage-formulaire.bundle homepage-formulaire:homepage-formulaire`.

## Fichiers de cette livraison

| Fichier | Rôle |
| --- | --- |
| `0001-formulaire-demande-de-credit.patch` | commit complet (format `git am`) |
| `homepage-formulaire.bundle` | branche complète, applicable via `git fetch` |
| `PR-body.md` | corps de PR prêt à l'emploi |

## À savoir

- Le formulaire est entièrement statique (un seul fichier, aucune dépendance réseau) : il fonctionne
  tel quel sur GitHub Pages ou tout hébergement statique.
- Le mot de passe est visible dans le code source : c'est un dissuasif, pas une sécurité réelle.
  Pour un formulaire réellement privé, il faut une protection côté serveur.
- Le formulaire ne collecte ni n'envoie aucune donnée : la saisie reste dans le navigateur
  (impression PDF / réinitialisation). Aucun backend n'est branché.
