<template>
    <div>
        Quanta is a time management app which purpose is to let you and your friends and family find more time to spend together.
    </div>
    <div>
        In our app you can make an account and add your friends. 
        Then you can make events in your calendar. On your main page you can see your and your friends' calendars. It lets you easily see when your free times match and meet up more often!
    </div>
    <div>
        This was a group project for University of Life Sciences in Warsaw. 
        My role was that of the manager of the project.
    </div>
    <div class="font-semibold">
        Link to the Github project:
        <NuxtLink to='https://github.com/koteczki01/time_management_web_app' class="link">here!</NuxtLink>
    </div>
    <div>
        Quanta was made using Nuxt and FastAPI. Currently it's only available to run on localhost.
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