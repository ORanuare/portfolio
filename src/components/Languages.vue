<script setup>
    import { ref } from 'vue'
    import LanguagesDropdown from '@/components/LanguagesDropdown.vue'

    const showDropdown = ref(false)

    const handleMouseEnter = () => {
        showDropdown.value = true
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (!document.getElementById('languages').matches(':hover')) {
                showDropdown.value = false
            }
        }, 300)
    }
</script>

<template>
    <div class="flex items-center gap-1 cursor-pointer relative" id="languages" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="handleMouseEnter">
        <v-icon name="io-language" class="text-leaf" scale="1.3"/>
        <span class="text-leaf font-black text-sm">{{ $t('languages') }}</span>
        
        <LanguagesDropdown :showDropdown="showDropdown"/>
    </div>
</template>