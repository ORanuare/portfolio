<script setup>
    import projects from '@/data/projects.json';

    // function to open a new tab with the project's URL
    const openProject = (url) => {
        if(!url) return;
        window.open(url, '_blank');
    }
</script>

<template>
    <div class="flex justify-end flex-wrap overflow-hidden gap-4">
        <!-- Projects cards -->
        <div v-for="(project, index) in projects" :key="index" class="w-full md:w-[75%] xl:w-[48%] bg-bones dark:bg-carbon relative border-2 border-gray-300/20 dark:border-gray-300/5 group rounded-b-sm overflow-hidden">
            <!-- Project cover image -->
            <img :src="project.image" :alt="project.link" class="aspect-video object-cover rounded-t-sm">

            <div class="h-28 w-full">

            </div>

            <div class="absolute -bottom-28 group-hover:bottom-0 w-full h-56 group-hover:h-full flex flex-col bg-stone dark:bg-gravel px-4 py-1 gap-5 rounded-b-sm transition-all duration-500 ease-in-out">
                <div class="flex items-center justify-between cursor-pointer" @click="openProject(project.link)">
                    <div class="flex flex-col relative">
                        <h2 class="text-lg 2xl:text-3xl font-black text-leaf">{{ $t('projects-list.' + project.name + '.title') }}</h2>
                        <div class="absolute left-0 rounded-md -bottom-2 h-1 w-12 bg-leaf"></div>
                    </div>

                    <div class="flex items-center gap-2 text-leaf">
                        <span v-if="project.visibility === 'public'" class="hidden group-hover:block text-xs font-bold">Ir al proyecto</span>
                        <span v-else class="hidden group-hover:block text-xs font-bold">Privado</span>

                        <v-icon v-if="project.visibility === 'public'" name="fa-external-link-alt"/>
                        <v-icon v-else name="fa-lock"/>
                    </div>
                </div>
                <p class="text-base md:text-sm lg:text-base xl:text-sm font-medium text-carbon/90 dark:text-bones/90 line-clamp-2 group-hover:line-clamp-none">{{ $t('projects-list.' + project.name + '.description') }}</p>

                <ul class="flex gap-3 flex-wrap mt-auto mb-2">
                    <li v-for="(tag, index) in project.tags" :key="index" class="bg-leaf/20 dark:bg-leaf/15 px-2 rounded-full text-carbon dark:text-bones text-2xs lg:text-xs 2xl:text-base">{{ tag }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
