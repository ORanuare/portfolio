<script setup>
    import ThemeToggler from '@/components/ThemeToggler.vue';
    import Tooltip from '@/components/Tooltip.vue';
    import techStack from '@/data/stacks.json';
    import Languages from '@/components/Languages.vue';
</script>

<template>
    <div class="flex flex-col justify-between fixed left-36 w-[37rem] h-[50rem]">
        <!-- Button to toggle dark/light theme -->
        <div class="flex items-center gap-4">
            <ThemeToggler />
            <Languages />
        </div>

        <!-- Basic information -->
        <div class="flex flex-col gap-2">
            <h1 class="text-6xl font-medium text-carbon dark:text-bones">Oscar Ranuare</h1>
            <h2 class="text-4xl font-semibold text-leaf">Full Stack Web Developer</h2>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold text-carbon dark:text-bones">My teck stack</h3>
            <div class="flex gap-12 flex-wrap">
                <div v-for="(stack, index) in techStack" :key="index" class="relative" :id="'box_'+stack.name">
                    <Tooltip :tooltip="stack.name" :tooltipId="'box_'+stack.name"/>
                    <v-icon :class="stack.customClass" :name="stack.icon" scale="2.5" />                    
                </div>
            </div>
        </div>

        <!-- Contact Links -->
        <div class="flex flex-col gap-4">
            <div class="flex gap-12 text-sm cursor-pointer border-b border-transparent hover:border-leaf w-max duration-200 ease-in-out text-leaf font-bold">
                <a href="mailto:contact@oscarranuare.dev">Contact me through contact@oscarranuare.dev</a>
            </div>
        </div>
    </div>
</template>