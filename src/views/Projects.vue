<script setup>
    import projects from '@/data/projects.json';
</script>

<template>
    <div class="flex flex-wrap">
        <!-- Projects cards -->
        <a :href="project.link" target="_blank" v-for="(project, index) in projects" :key="index" class="w-[30rem] h-[30rem] bg-bones dark:bg-carbon cursor-pointer group relative">
            <!-- Project cover image -->
            <img :src="project.image" :alt="project.name">
            
            <!-- Project information when hovering -->
            <div class="top-0 absolute opacity-0 border-2 border-transparent group-hover:border-gray-300/20 dark:group-hover:border-gray-300/5 group-hover:opacity-100 w-full h-full duration-300 bg-bones dark:bg-carbon p-8 flex flex-col justify-between">
                <div class="flex flex-col relative">
                    <h2 class="text-3xl font-black dark:text-leaf">{{ project.title }}</h2>
                    <div class="absolute left-0 rounded-xl -bottom-4 h-1 w-12 bg-leaf"></div>
                </div>
                <p class="text-lg text-carbon/90 dark:text-bones/90">{{ project.description }}</p>
                <div class="flex gap-3 flex-wrap">
                    <span v-for="(tag, index) in project.tags" :key="index" class="bg-gray-300/20 dark:bg-gray-300/5 px-2 rounded-full text-carbon dark:text-bones">{{ tag }}</span>
                </div>
            </div>
        </a>
    </div>
</template>
