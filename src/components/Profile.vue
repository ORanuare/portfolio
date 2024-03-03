<script setup>
    import ThemeToggler from '@/components/ThemeToggler.vue';
    import Tooltip from '@/components/Tooltip.vue';
    import techStack from '@/data/stacks.json';
    import Languages from '@/components/Languages.vue';
</script>

<template>
    <div class="flex flex-col justify-between md:fixed md:left-8 xl:left-16 2xl:left-36 w-full h-[40rem] md:w-[20rem] xl:w-[30rem] 2xl:w-[37rem] 2xl:h-[50rem]">
        <!-- Button to toggle dark/light theme -->
        <div class="flex items-center gap-4">
            <ThemeToggler />
            <Languages />
        </div>

        <!-- Basic information -->
        <div class="flex flex-col gap-2">
            <h1 class="text-4xl xl:text-5xl 2xl:text-6xl font-medium text-carbon dark:text-bones">Oscar Ranuare</h1>
            <h2 class="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-leaf">{{ $t('developer-tag') }}</h2>
        </div>

        <!-- Tech Stack -->
        <div class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold text-carbon dark:text-bones">{{ $t('tech-stack') }}</h3>
            <div class="flex gap-5 xl:gap-8 2xl:gap-12 flex-wrap">
                <div v-for="(stack, index) in techStack" :key="index" class="relative" :id="'box_'+stack.name">
                    <Tooltip :tooltip="stack.name" :tooltipId="'box_'+stack.name"/>
                    <v-icon :class="stack.customClass" :name="stack.icon" scale="2.5" />
                </div>
            </div>
        </div>

        <!-- Contact Links -->
        <div class="flex flex-col gap-4">
            <div class="flex gap-12 text-sm cursor-pointer border-b border-transparent hover:border-leaf w-max duration-200 ease-in-out text-leaf font-bold">
                <a href="mailto:contact@oscarranuare.dev">{{ $t('contact-email') }} contact@oscarranuare.dev</a>
            </div>
        </div>
    </div>
</template>