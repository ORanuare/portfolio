<script setup>
    import ThemeToggler from '@/components/ThemeToggler.vue';
    import Tooltip from '@/components/Tooltip.vue';
    import techStack from '@/data/stacks.json';
    import Languages from '@/components/Languages.vue';
    import Contact from '@/components/Contact.vue';
</script>

<template>
    <div class="flex flex-col justify-between md:fixed md:left-8 xl:left-16 2xl:left-24 w-full h-[40rem] md:h-[75%] md:w-[23rem] xl:w-[30rem] 2xl:w-[37rem]">
        
        <!-- Header profile -->
        <div class="flex justify-between items-center gap-4">
            <!-- Button to toggle dark/light theme -->
            <div class="flex gap-4">
                <ThemeToggler />
                <Languages />
            </div>
            <!-- Contact information -->
            <Contact />
        </div>

        <!-- Basic information -->
        <div class="flex flex-col gap-2">
            <h1 class="text-4xl xl:text-5xl 2xl:text-6xl font-medium text-carbon dark:text-bones">Oscar Ranuare</h1>
            <h2 class="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-leaf">{{ $t('developer-tag') }}</h2>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold text-carbon dark:text-bones">{{ $t('tech-stack') }}</h3>
            <div class="flex gap-5 xl:gap-8 2xl:gap-12 flex-wrap">
                <div v-for="(stack, index) in techStack" :key="index" class="relative" :id="'box_'+stack.name">
                    <Tooltip :tooltip="stack.name" :tooltipId="'box_'+stack.name"/>
                    <img v-if="stack.type === 'link'" :src="stack.icon" :alt="stack.name" class="w-12 h-12" />
                    <v-icon v-else :class="stack.customClass" :name="stack.icon" :fill="stack.fill" scale="2.5" />
                </div>
            </div>
        </div>
    </div>
</template>