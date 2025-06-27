<template>
  <div>
    <AppCard 
      v-for = "(card, index) in firstTabCards"
      :key="index"
      v-bind = "card"
    />
  </div>
</template>

<script setup lang="ts">
  import { firstTabCards } from '~/data/firstTabCards'; 
</script>

