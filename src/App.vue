<script setup>
  import { RouterView } from 'vue-router'
  import { ref, onBeforeMount } from 'vue';
  import Profile from '@/components/Profile.vue'
  import Tabs from '@/components/Tabs.vue';

  const isRendered = ref(false)

  onBeforeMount(() => {
    try {
        const locale = localStorage.getItem('locale') || (navigator.language.startsWith('es') ? 'es' : 'en');
        localStorage.setItem('locale', locale);
        document.cookie = `locale=${locale}`;
    } catch (e) {
        console.error('Error setting locale:', e);
    }
    finally {
        isRendered.value = true;
    }
  });
</script>

<template>
  <main v-if="isRendered" class="flex justify-center min-h-screen w-full bg-bones dark:bg-carbon">

    <div class="flex flex-col md:flex-row w-[95%] xl:w-[85%] justify-end py-12 xl:py-24">
      <Profile />
      <div class="flex flex-col gap-16 w-full md:w-[50%] xl:w-[55%] overflow-auto mt-24 md:mt-0">
          <Tabs />
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
      </div>
    </div>
  </main>
  <main v-else class="flex justify-center items-center min-h-screen w-full bg-bones dark:bg-carbon">

  </main>
</template>