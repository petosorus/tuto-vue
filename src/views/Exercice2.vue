<script setup lang="ts">

const bulbi =         
{
    "pokedexId": 1,
    "generation": 1,
    "category": "Pokémon Graine",
    "name": {
        "fr": "Bulbizarre",
        "en": "Bulbasaur",
        "jp": "フシギダネ"
    },
    "sprites": {
        "regular": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/1/regular.png",
        "shiny": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/1/shiny.png",
        "gmax": null
    },
    "types": [
        {
            "name": "Plante",
            "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/plante.png"
        },
        {
            "name": "Poison",
            "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/poison.png"
        }
    ],
    "talents": [
        {
            "name": "Engrais",
            "tc": false
        },
        {
            "name": "Chlorophylle",
            "tc": true
        }
    ],
    "stats": {
        "hp": 45,
        "atk": 49,
        "def": 49,
        "spe_atk": 65,
        "spe_def": 65,
        "vit": 45
    },
    "evolution": {
        "pre": null,
        "next": [
            {
                "pokedexId": 2,
                "name": "Herbizarre",
                "condition": "Niveau 16"
            },
            {
                "pokedexId": 3,
                "name": "Florizarre",
                "condition": "Niveau 32"
            }
        ],
        "mega": null
    },
    "height": "0,7 m",
    "weight": "6,9 kg"
}
</script>

<template>
  <main>
    <h1>{{ bulbi.name.fr }}</h1>
    <span id="types">
      <img v-bind:src="bulbi.types[0].image" v-bind:title="bulbi.types[0].name">
    </span>

    <img v-bind:src="bulbi.sprites.regular">

    <span id="evolutions">
      <h3>Evolutions</h3>
      <span>
        
      </span>
    </span>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
  }

  #evolutions {
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 400px;
  }

  #types img {
    max-width: 30px;
    margin-left: 2px;
    margin-right: 2px;
  }
</style>
