<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';

    const showTooltip = ref(false);

    const props = defineProps({
        tooltip:{
            type: String,
            required: true,
        },
        tooltipId:{
            type: String,
            default: null
        },
        customClass:{
            type: String,
            default: ''
        }
    })

    const handleMouseEnter = () => {
        showTooltip.value = true;
    };

    const handleMouseLeave = () => {
        showTooltip.value = false;
    };

    
    onMounted(() => {
        if(!props.tooltipId) return;
        const element = document.getElementById(props.tooltipId);
        if (element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }
    });

    onBeforeUnmount(() => {
        if(!props.tooltipId) return;
        const element = document.getElementById(props.tooltipId);
        if (element) {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        }
    });
</script>

<template>
    <transition name="fade" mode="out-in">
        <div v-if="tooltip && showTooltip" class="absolute flex text-center items-center justify-center -top-10 min-w-12 text-bones bg-carbon dark:text-carbon dark:bg-bones rounded-lg" :class="customClass">
            <v-icon name="md-arrowdropdown-round" scale="2" class="absolute -bottom-5 left-0 text-carbon dark:text-bones"/>
            <span class="text-sm p-2 font-medium select-none">{{ tooltip }}</span>
        </div>
    </transition>
</template>