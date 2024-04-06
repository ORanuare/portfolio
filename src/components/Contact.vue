<script setup>
    import { ref } from 'vue';
    import Tooltip from '@/components/Tooltip.vue';
    import contacts from '@/data/contact.json';

    const copying = ref(false);

    const copyToClipboard = async(text) => {
        copying.value = true;

        navigator.clipboard.writeText(text);
        await new Promise((resolve) => setTimeout(resolve, 1800));

        copying.value = false;
    }
</script>

<template>
    <div class="flex gap-4">
        <div v-for="(contact, index) in contacts" :key="index" class="cursor-pointer relative" :id="contact.name">
            
            <a v-if="contact.type === 'url'" :href="contact.url" :target="contact.target">
                <v-icon :name="contact.icon" scale="1.7" class="text-carbon dark:text-bones"/>
                <Tooltip :tooltip="contact.name" :tooltipId="contact.name"/>
            </a>
            <span v-else-if="contact.type === 'copy'" @click="copyToClipboard(contact.value)">
                <v-icon :name="contact.icon" scale="1.7" class="text-carbon dark:text-bones"/>
                <Tooltip :tooltip="!copying ? contact.name : '¡Has copiado el '+contact.name+' al portapapeles!'" :tooltipId="contact.name"/>
            </span>      
        </div>
    </div>
</template>