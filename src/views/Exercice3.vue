<script setup lang="ts">

const sala =         
{
    "pokedexId": 4,
    "generation": 1,
    "category": "Pokémon Lézard",
    "name": {
        "fr": "Salamèche",
        "en": "Charmander",
        "jp": "ヒトカゲ "
    },
    "sprites": {
        "regular": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/4/regular.png",
        "shiny": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/4/shiny.png",
        "gmax": null
    },
    "types": [
        {
            "name": "Feu",
            "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png"
        },
        {
            "name": "Poison",
            "image": "https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/poison.png"
        }
    ],
    "talents": [
        {
            "name": "Brasier",
            "tc": false
        },
        {
            "name": "Force Soleil",
            "tc": true
        }
    ],
    "stats": {
        "hp": 39,
        "atk": 52,
        "def": 43,
        "spe_atk": 60,
        "spe_def": 50,
        "vit": 65
    },
    "evolution": {
        "pre": null,
        "next": [
            {
                "pokedexId": 5,
                "name": "Reptincel",
                "condition": "Niveau 16"
            },
            {
                "pokedexId": 6,
                "name": "Dracaufeu",
                "condition": "Niveau 36"
            }
        ],
        "mega": null
    },
    "height": "0,6 m",
    "weight": "8,5 kg"
}
</script>

<template>
  <main>
    <h1>{{ sala.name.fr }}</h1>
    <span id="types">
        <img v-for="type in sala.types" :src="type.image" :title="type.name">
    </span>

    <img v-bind:src="sala.sprites.regular">

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
