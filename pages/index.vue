<template>
  <main>
    <div class="tabs">
      <button 
        class="tabs__button"
        :class="{ 'active': activeTab === 'first'}"
        @click="activeTab = 'first'"
      >
        WhatsApp
      </button>
      <button 
        class="tabs__button"
        :class="{ 'active': activeTab === 'second' }"
        @click="activeTab = 'second'"
      >
       Telegram
      </button>
    </div>

    <div class="tabs-content">
      <FirstTab v-if="activeTab === 'first'"/>
      <SecondTab v-if="activeTab === 'second'"/>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import FirstTab from '~/components/FirstTab.vue';
  import SecondTab from '~/components/SecondTab.vue';

  const activeTab = ref<'first' | 'second'>('first');
</script>

