<script setup>
    import { useDark, useToggle } from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>

<template>
    <div class="flex items-center px-1 w-16 h-6 border-2 border-leaf rounded-full cursor-pointer relative" @click="toggleDark()">
        <transition name="toggle" mode="out-in">
            <span v-if="isDark" class="absolute w-4 h-4 rounded-full bg-leaf duration-200 ease"></span>
            <span v-else class="absolute w-4 h-4 rounded-full bg-leaf duration-200 ease translate-x-9"></span>
        </transition>
    </div>
</template>