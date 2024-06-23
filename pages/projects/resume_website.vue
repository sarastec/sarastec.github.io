<template>
    <div>
        This is a website I made to showcase my projects and experience!
    </div>
    <div>
        I chose Nuxt and Tailwind CSS to make it.
    </div>
    <div class="font-semibold">
        Link to the Github project:
        <NuxtLink to='https://github.com/koteczki01/sara_stec_resume_website' class="link">here!</NuxtLink>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'projects'
    })
</script>

<style scoped>
    div {
        padding-bottom: 1rem;
    }

    .link {
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 1px;
        text-decoration-color: #737373;
    }
</style>