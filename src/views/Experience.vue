<script setup>
    import experiences from '@/data/experiences.json';
</script>

<template>
    <div class="flex flex-col gap-16 overflow-hidden">
        <div v-for="(experience, index) in experiences" :key="index" class="flex flex-col">
            <span class="text-carbon/80 dark:text-bones/60 font-medium">{{ $t('experiences.' + experience.company + '.date') }} ({{ $t('experiences.' + experience.company + '.time') }})</span>
            
            <span class="text-leaf font-semibold text-2xl">
                {{ $t('experiences.' + experience.company + '.position') }} {{ $t('at') }} <b>{{ experience.company }}</b>
            </span>

            <p class="text-carbon/70 dark:text-bones/60 font-medium text-xl mt-2">
                {{ $t('experiences.' + experience.company + '.description') }}
            </p>
        </div>
    </div>
</template>