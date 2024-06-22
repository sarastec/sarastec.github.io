<template>
    <p>
        This is a website I made to showcase my projects and experience!
    </p>
    <p>
        I chose Nuxt and Tailwind CSS to make it.
    </p>
    <p class="font-semibold">
        GitHub link to the project:
    </p>
</template>

<script setup>
    definePageMeta({
        layout: 'projects'
    })

</script>

<style scoped>
    p {
        padding-bottom: 1rem;
    }
</style>