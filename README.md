# Candidature OPENCLASSROOMS - Application Météo

Réalisation d'un projet personnel, constituant le test de positionnement pour la candidature à la formation "Développeur d'application - Javascript React".

## Téléchargement
 
Aucune dépendance à télécharger. Lancer simplement :

```bash
git clone https://github.com/AnthonyPoullain/OC-Candidature_Weather-app.git
```

## Utilisation
Projet web basique : .html, .css, .js.<br>Lancer simplement un serveur web à la racine du projet, par exemple avec npm : 

```python
npm install -g live-server
```
Puis :
```
cd app-meteo
live-server
```
## Ressources
API Météo :<br>https://openweathermap.org/api

API Images libres de droits :<br>https://source.unsplash.com

## Problèmes connus
Pas de vérification de l'image de fond fournie par l'API. Si l'API qui fournit les images (https://source.unsplash.com) ne trouve pas d'image correspondant à la requête de l'utilisateur, alors une image avec un message d'erreur s'affiche. Solution: `fetch` l'API directement plutôt qu'utiliser seulement le lien pour générer l'image, afin de pouvoir bloquer ce cas et avoir en fallback une image par défaut. Sinon, utiliser une autre source. Comme cette application n'a pas pour ambition d'être déployée en production, et que j'ai déjà montré par ailleurs une interaction avec une API, je laisse l'application dans l'état car je trouve le code intéressant et plus dynamique comme ça, pour un projet de démonstration. Résolution envisageable sur demande.

## Contributeurs
Anthony Poullain

## License
Aucune
