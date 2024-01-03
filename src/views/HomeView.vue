<script setup>
    import { useDark, useToggle } from "@vueuse/core"
    
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>

<template>
    <main class="bg-bones dark:bg-carbon h-screen w-full text-carbon dark:text-bones">
        
    </main>
</template>
