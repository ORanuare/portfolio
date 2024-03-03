<script setup>
    import projects from '@/data/projects.json';

    // function to open a new tab with the project's URL
    const openProject = (url) => {
        if(!url) return;
        window.open(url, '_blank');
    }
</script>

<template>
    <div class="flex justify-end flex-wrap overflow-hidden">
        <!-- Projects cards -->
        <div v-for="(project, index) in projects" :key="index" class="w-full sm:w-[50%] md:w-[85%] xl:w-[50%] bg-bones dark:bg-carbon cursor-pointer group relative">
            <!-- Project cover image -->
            <img :src="project.image" :alt="project.link">
            
            <!-- Project information when hovering -->
            <div class="top-0 absolute opacity-0 border-2 border-transparent group-hover:border-gray-300/20 dark:group-hover:border-gray-300/5 group-hover:opacity-100 w-full h-full duration-300 bg-bones dark:bg-carbon p-8 flex flex-col justify-between">
                <div class="flex flex-col relative">
                    <div class="flex items-center gap-2 text-leaf" @click="openProject(project.link)">
                        <h2 class="text-lg 2xl:text-3xl font-black">{{ $t('projects-list.' + project.name + '.title') }}</h2>
                        <v-icon v-if="project.visibility === 'public'" name="fa-external-link-alt"/>
                        <v-icon v-else name="fa-lock"/>
                    </div>
                    <div class="absolute left-0 rounded-xl -bottom-2 lg:-bottom-4 h-1 w-12 bg-leaf"></div>
                </div>
                <p class="text-base md:text-xs lg:text-base xl:text-xs 2xl:text-lg text-carbon/90 dark:text-bones/90">{{ $t('projects-list.' + project.name + '.description') }}</p>
                <div class="flex gap-3 flex-wrap">
                    <span v-for="(tag, index) in project.tags" :key="index" class="bg-gray-300/20 dark:bg-gray-300/5 px-2 rounded-full text-carbon dark:text-bones text-2xs lg:text-xs 2xl:text-base">{{ tag }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
