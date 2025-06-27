<template>
  <div>
    <AppCard 
      v-for = "(card, index) in secondTabCards"
      :key="index"
      v-bind = "card"
    />
  </div>
</template>

<script setup lang="ts">
  import { secondTabCards } from '~/data/secondTabCards'; 
</script>

