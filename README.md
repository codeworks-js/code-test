# Code test

Le but de ce projet est de développer une une petite application web de QCM destiné au entretiens techniques.

Mais également de disposer d'une application simple nous permettant de mettre en pratique les nouveautées de React comme les hooks, API context, etc...

Et pas seulement, nous allons également tester une méthodologie de développement piloteé par les composants [CDD](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/) en utilisant les storybooks associés à Jest.

Ce projet utilise [Material-UI](https://material-ui.com/fr/) comme framework de style. Ce framework utilise en interne CSS-in-js et les styled Components. Il propose une [api de Hook](https://material-ui.com/fr/styles/basics/#hook-api) ainsi qu'une [Api styled components](https://material-ui.com/fr/styles/basics/#styled-components-api).

Le typage des données est prie en charge par TypeScript.

Coté données nous utiliserons GraphQl associé au client React Apollo.

Nous utilisons la commande codegen du client Apollo pour générer les types liés à l'API GraphQl.
## Contribuer

Les contributions sont libre mais doivent être proposées par PullRequests

## Install

```
# intallation des dépendences
npm install
# lancement en mode dev
npm start
# Build pour prod
npm run build
# Lancer les tests
npm test
# Génération des fichiers de configuration utilisés par la CLI de react-script
npm run eject
# Lancer les storybooks
npm run storybook
# Builder une version statique, pour documentation par exemple
npm run build-storybook
# Générer les types de validation des données pour l'api GraphQl
npm run typegen
``` 
pour ré-installer le projet de 0 c'est à dire plus reset du répertoire node_module
```
npm clean-install
```
## Maquettes

Les maquettes du projet se trouvent [ici](https://drive.google.com/drive/folders/1kb9bP_4M63LNEIuRKFU1KDaJ73yJ-bXA?usp=sharing).

Vous êtes libres de créer la votre en passant par des Issues. Elles seront la base des Issues pour développer les composants.
