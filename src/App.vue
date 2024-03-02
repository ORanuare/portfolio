<script setup>
  import { RouterView } from 'vue-router'
  import Profile from '@/components/Profile.vue'
</script>

<template>
  <main class="flex justify-center min-h-screen w-full bg-bones dark:bg-carbon">
    <div class="flex w-[85%] justify-end py-24">
      <Profile />
      <div class="flex w-[65%] min-h-screen overflow-auto">
          <RouterView />
      </div>
    </div>
  </main>
</template>