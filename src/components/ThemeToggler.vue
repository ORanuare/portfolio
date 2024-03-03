<script setup>
    import { useDark, useToggle } from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    console.log(isDark.value)
</script>

<template>
    <div class="flex items-center px-1 w-20 h-8 border-2 border-leaf rounded-full cursor-pointer relative" @click="toggleDark()">
        <transition name="toggle" mode="out-in">
            <span v-if="isDark" class="absolute w-5 h-5 rounded-full bg-leaf duration-200 ease"></span>
            <span v-else class="absolute w-5 h-5 rounded-full bg-leaf duration-200 ease translate-x-12"></span>
        </transition>
    </div>
</template>