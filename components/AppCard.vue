<template>
  <div class="card">
    <h3 class="card__title">Ошибка: <p class="normal-font">{{ title }}</p></h3>
    <div class="card__image-wrapper">
      <img :src="img" class="card__image" @click="openModal">
    </div>
    <div v-if="showModal" class="card__modal" @click.self="closeModal">
      <img :src="img" class="card__modal-image">
    </div>
    <h4 class="card__reason">Причина: <p class="normal-font">{{ reason }}</p></h4>
    <p class="card__reason-description normal-font">{{ reasonDescription }}</p>
    <h4 class="card__solution">Решение: <p class="normal-font">{{ solution }}</p></h4>
    <p class="card__solutin-description normal-font">{{ solutionDescription }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    title : string,
    img : string,
    reason: string,
    reasonDescription: string,
    solution: string,
    solutionDescription: string
  }>()

  const showModal = ref(false);

  function openModal() {
    showModal.value = true;
  }

  function closeModal() {
    showModal.value = false;
  }

</script>