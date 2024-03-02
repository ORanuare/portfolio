<script setup>
  import { RouterView } from 'vue-router'
  import { useDark, useToggle } from '@vueuse/core'
  import Profile from '@/components/Profile.vue'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <main class="flex justify-center min-h-screen w-full bg-bones dark:bg-carbon">
    <div>
      <Profile />
    </div>
    <div class="flex justify-end w-[85%] min-screen">
      <div class="w-[60%] py-24 overflow-auto">
        <RouterView />
      </div>
    </div>
  </main>
</template>