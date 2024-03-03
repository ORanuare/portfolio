<script setup>
    const props = defineProps({
        showDropdown:{
            type: Boolean,
            required: true,
        }
    })

    const languages = [
        {
            name: 'English',
            code: 'en',
            icon: 'co-us'
        },
        {
            name: 'Español',
            code: 'es',
            icon: 'co-mx'
        }
    ]

    const changeLocale = (locale) => {
        document.cookie = `locale=${locale}`
        location.reload()
    }
</script>

<template>
    <transition name="fade" mode="out-in">
        <div v-if="showDropdown" class="absolute flex gap-4 text-start items-center justify-start -bottom-14 w-56 text-bones bg-carbon dark:text-carbon dark:bg-bones rounded-lg p-2">
            <v-icon name="md-arrowdropdown-round" scale="2" class="absolute -top-5 left-0 text-carbon dark:text-bones rotate-180"/>
            
            <!-- Languages options -->
            <div v-for="language in languages" :key="language.code" class="flex items-center gap-1 px-2 cursor-pointer hover:bg-leaf/20 rounded-xl duration-300 ease" @click="changeLocale(language.code)">
                <v-icon :name="language.icon" class="text-leaf" scale="1.5"/>
                <span class="text-sm font-black">{{ language.name }}</span>
            </div>
        </div>
    </transition>
</template>