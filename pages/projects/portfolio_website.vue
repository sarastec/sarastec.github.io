<template>
    <h1 class="text-xl font-semibold">
        Portfolio Website
    </h1>
    <h2>
        Link to the Github repository:
        <a href='https://github.com/sarastec/sarastec.github.io' target="_blank" class="link">here!</a>
    </h2>
    <h2>
        General info
    </h2>
    <p>
        This is a website I made to showcase my projects and experience. It also serves as an extension to my resume for anyone who wants to read up on details of projects I participated in.
        My aim was to make a minimalist website with a clear layout so that accessing desired information is fast and easy.

    </p>
    <h2>
        Technologies
    </h2>
    <ul class="list-disc ml-10">
        <li>Nuxt</li>
        <li>Tailwind</li>
    </ul>
    <p>
        This is a small static website that I definitely didn't need to use Nuxt nor Vue for.
        The reason I did it was because of another project I was working on at the time - <NuxtLink to="/projects/quanta" class="link">Quanta</NuxtLink>.
        Quanta is a team project that we decided to use Nuxt to create, but it was my first time using this technology.
        At the same time I needed to make this website, so I decided to make it in Nuxt as well, so I can learn and work more efficienty on Quanta later.
    </p>
    <p>
        Tailwind CSS was used for most of this website's formatting. It was also my first time using it.
        The reason I learned it was because I saw it recommended as an easy to pick up, efficient tool that made the code a lot easier to read, especially for small websites like mine.
    </p>
    <h2>
        Setup
    </h2>
    <p>
        If you want to download the repository and run it on localhost, these are the steps:
    </p>
    <ul class="list-disc ml-10">
        <li>Open the project directory</li>
        <li>Run <code>npm run dev</code></li>
        <li>Open the corresponding localhost port in browser</li>
    </ul>
    <p>
        Build and Github Pages deployment was made using
        <a href='https://github.com/lucpotage/nuxt-github-pages' target="_blank" class="link">this</a>
        method.
    </p>
    <h2>
        Status
    </h2>
    <p>
        I plan on keeping this website up to date with new projects and updated information indefinitely.
    </p>
</template>

<script setup>
    import "../css/projects_css.css"
    definePageMeta({
        layout: 'projects'
    })
</script>
