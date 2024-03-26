<script setup>
    import Tooltip from '@/components/Tooltip.vue';
    import contacts from '@/data/contact.json';
</script>

<template>
    <div class="flex gap-4">
        <a v-for="(contact, index) in contacts" :key="index" :href="contact.url" :target="contact.target" class="cursor-pointer relative" :id="contact.name">
            <v-icon :name="contact.icon" scale="1.7" class="text-carbon dark:text-bones"/>
            <Tooltip :tooltip="contact.name" :tooltipId="contact.name"/>
        </a>
    </div>
</template>