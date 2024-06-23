<template>
    <div>
        SlimeBeats is a small Unity game made for Game Development course.
    </div>
    <div class="font-semibold">
        Link to the Github project:
        <NuxtLink to='https://github.com/koteczki01/slimebeats' class="link">here!</NuxtLink>
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