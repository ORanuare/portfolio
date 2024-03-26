<template>
    <div class="flex flex-col gap-8 text-2xl font-medium text-carbon/70 dark:text-bones/60">
        
        <div v-html="$t('about-me-message')"></div>

        <div class="flex gap-12 text-sm cursor-pointer border-b border-transparent hover:border-leaf w-max duration-200 ease-in-out text-leaf font-bold">
            <a href="mailto:contact@oscarranuare.dev">{{$t('contact-email')}} contact@oscarranuare.dev</a>
        </div>
    </div>
</template>

<style>

b{
    color: #10b981ca;
}
</style>