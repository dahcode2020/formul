## Objet

Ajout du formulaire de demande de crédit au site, accessible depuis la page d'accueil.

## Contenu

- **Nouveau fichier `demande-credit.html`** : formulaire de demande de crédit bilingue FR/EN,
  entièrement autonome (CSS + JS inline, aucune dépendance externe).
  Fonctions : saisie guidée par sections, génération d'un aperçu, impression / export PDF,
  bouton « Effacer », verrouillage de session, écran « Accès restreint » par mot de passe.
- **`index.html`** : ajout de trois liens vers le formulaire (navigation desktop, menu mobile,
  colonne « Navigation » du pied de page) + lien retour vers l'accueil dans le formulaire.
  La page vitrine existante est inchangée par ailleurs.

## Notes

- L'écran de protection par mot de passe est conservé : les visiteurs doivent saisir le mot de
  passe pour accéder au formulaire. Le mot de passe est en clair dans le JS (`GATE_PASS`) —
  dissuasif uniquement, à remplacer par une authentification serveur si le formulaire doit être
  réellement confidentiel.
- Aucune donnée n'est transmise : tout reste dans le navigateur de l'utilisateur (pas de backend).
- Testé en local (ouverture directe du fichier et via serveur statique) : formulaire, aperçu,
  impression et liens de navigation fonctionnels.

## Vérification

```bash
python3 -m http.server 8000
# http://localhost:8000/index.html  → lien « Demande de crédit »
# http://localhost:8000/demande-credit.html
```
