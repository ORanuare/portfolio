<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const isCurrentRoute = (routeName) => {
        return routeName === route.name;
    }
</script>

<template>
    <div class="flex justify-end gap-5 w-full">
        <router-link to="/" class="flex flex-col items-center cursor-pointer">
            <h3 class="text-lg font-black hover:text-leaf duration-200 uppercase leading-4" :class="isCurrentRoute('projects') ? 'text-leaf' : 'text-leaf/70'">Projects</h3>
            <v-icon v-if="isCurrentRoute('projects')" name="md-minimize-outlined" class="text-leaf" />
        </router-link>

        <router-link to="/about" class="flex flex-col items-center cursor-pointer">
            <h3 class="text-lg font-black hover:text-leaf duration-200 uppercase leading-4" :class="isCurrentRoute('about') ? 'text-leaf' : 'text-leaf/70'">About me</h3>
            <v-icon v-if="isCurrentRoute('about')" name="md-minimize-outlined" class="text-leaf" />
        </router-link>
    </div>
</template>