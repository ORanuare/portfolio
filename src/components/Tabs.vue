<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const tabs = [
        { name: 'projects', label: 'projects', path: '/'},
        { name: 'about', label: 'about-me', path: '/about'}
    ]

    const isCurrentRoute = (routeName) => {
        return routeName === route.name;
    }
</script>

<template>
    <div class="flex justify-end gap-5 w-full">
        <router-link v-for="(tab, index) in tabs" :key="index" :to="tab.path" class="flex flex-col items-center cursor-pointer">
            <h3 class="text-lg font-black hover:text-leaf duration-200 uppercase leading-4" :class="isCurrentRoute(tab.name) ? 'text-leaf' : 'text-leaf/70'">{{ $t(tab.label) }}</h3>
            <v-icon v-if="isCurrentRoute(tab.name)" name="md-minimize-outlined" class="text-leaf" />
        </router-link>
    </div>
</template>