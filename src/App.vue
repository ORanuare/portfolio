<script setup>
  import { RouterView } from 'vue-router'
  import Profile from '@/components/Profile.vue'
  import Tabs from '@/components/Tabs.vue';
</script>

<template>
  <main class="flex justify-center min-h-screen w-full bg-bones dark:bg-carbon bg-[linear-gradient(to_right,#d8d8d809_1px,transparent_1px),linear-gradient(to_bottom,#d8d8d809_1px,transparent_1px)] bg-[size:24rem_24rem]">

    <div class="flex w-[85%] justify-end py-24">
      <Profile />
      <div class="flex flex-col gap-16 w-[60%] min-h-screen overflow-auto">
          <Tabs />
          <RouterView />
      </div>
    </div>
  </main>
</template>