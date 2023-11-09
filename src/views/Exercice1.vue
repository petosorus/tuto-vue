<script setup lang="ts">
const playerName = "Thomas le " + new Date().toLocaleDateString()
</script>

<template>
  <h1>
    Joueur.se : {{ playerName }}
  </h1>
</template>
