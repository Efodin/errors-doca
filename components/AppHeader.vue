<template>
  <header>
    <h1 class="header__title">
      <span
        v-for = "(item, index) in rainbow"
        :key = "index"
        :style = "{ color: item.color }"
      >
        {{ item.char }}
      </span>
    </h1>
  </header>
</template>

<script setup lang="ts">
import { useRainbowText } from '~/composables/useRainbowText';

const rainbow = useRainbowText('Библиотека ошибок ^_^')
</script>