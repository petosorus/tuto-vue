Coucou.

# Installation
En vrai ce sera déjà un premier exercice/truc de formation. 

Tu vas avoir besoin d'un terminal. Cmd marche, powershell aussi, mais je préfère git bash. Ca permet d'utiliser bash dans windows, bash c'est l'ensemble de commandes le plus utilisé par défaut sous linux.
C'est pas hyper important, et vscode t'ouvre powershell par défaut dans le dossier ouvert, c'est tout à fait bien pour le moment.

Ensuite il va falloir installer nodejs (ici https://nodejs.org/en/download/current). Node est un moteur qui permet d'exécuter du js sur n'importe quel ordinateur et pas seulement dans un navigateur. Quand tu installes node, ça install npm avec, qui est un gestionnaire de dépendances.

Pour lancer le projet, il faudra commencer par installer les dépendances. Tu fais ça dans un terminal en lançant `npm install`.
Ensuite, tu fais un `npm run dev` et ça devrait lancer l'application sur [http://localhost:5173/](http://localhost:5173/).

# Exercice 1
Un composant vue est contenu dans un seul fichier et composé de trois parties. 
- `<script></script>` qui contient le code du composant, ses variables et fonctions.
- `<template></template>` qui contient le html du composant, des appels à d'autres composants. C'est comme du html habituel, c'est de l'organisation mais réutilisable. On réutilisera en exercice 5.
- `<style></style>` qui contient le style du composant. Quand l'attribut `scoped` est là, c'est le style du composant et de rien d'autre. Là c'est du CSS, ça pourrait être du SASS ou SCSS mais j'ai la flemme de le mettre.

Actuellement c'est moi qui joue, si tu vas dans Exercice1.vue, tu peux voir que c'est défini dans une variable dans la partie script, et dans la partie template, cette variable est appelée.

## 1.1
Change le nom de joueur.se soit en changeant la valeur de la variable, soit en mettant ton nom en dur dans le template.

## 1.2
Pour voir à quoi ça sert d'avoir des chaînes dans une variable, compose une chaîne avec une date pour avoir ce format "Nom, le date".
Pour avoir une la date du jour, tu peux faire un `new Date().toLocaleDateString()`

# Exercice 2
Dans l'exercice 2, on affiche Bulbizarre (very cute). Le fichier correspondant est Exercice2.vue

Seulement, il y a un problème, on affiche qu'un type du petit gars alors qu'il est aussi Poison (le pauvre). Il faut donc afficher son deuxième type comme le premier : l'image du type et son nom en tooltip.

Il manque aussi ses évolutions, ce serait bien de les afficher.

Dans le cas des évolutions comme des types, ne t'embête pas trop pour le moment, affiche les "à la main" en accédant juste au tableau. Dans l'exercice 3 on voit les boucles d'affichage.

Tu peux voir dans la variable bulbi qu'il y a d'autres données, fais toi plaisir et affiche ce que tu as envie.

# Exercice 3
On a bien les types de Salamèche, mais pas ses évolutions. C'est quasi la même chose que pour Bulbi mais avec des boucles.
On remarque en passant qu'on peut écrire :src plutôt que v-bind:src pour binder à un attribut. C'est un raccourci pratique.

Affiche les évolutions et go exercice 4

# Exercice 4
Réactif/two way data-binding

# Exercice 5
Composant pkmn et liste de ce composant + router

# Exercice 6
http
