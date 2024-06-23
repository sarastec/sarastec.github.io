<template>
    <body class="bg-zinc-100 flex justify-center h-screen">
    <div>
        <header>
            <nav>
                <div class="text-6xl p-8 flex justify-center font-normal">
                    <NuxtLink to="/">Sara Stec</NuxtLink>
                </div>
                <div class="navtab text-xl flex justify-center space-x-11 p-5 w-full text-zinc-500">
                    <hr class="w-64 h-px my-4 border-0 dark:bg-zinc-500">
                    <NuxtLink to="/" class="hover:text-black">About</NuxtLink>
                    <NuxtLink to="/projects/resume_website" class="projects hover:text-black">Projects</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-black">Contact</NuxtLink>
                    <NuxtLink to="/resume" class="hover:text-black">Resume</NuxtLink>
                    <hr class="w-64 h-px my-4 border-0 dark:bg-zinc-500">
                </div>
            </nav>
        </header>
        <div class="flex mx-6">
            <div class="project-tab grid-cols-1 text-zinc-500">
                <div class="tab hover:text-black">
                    <NuxtLink to="/projects/resume_website" class="text-xl">Resume Website</NuxtLink><br>
                    <NuxtLink to="/projects/resume_website">The website you're looking at right now!</NuxtLink>
                </div>
                <div class="tab hover:text-black">
                    <NuxtLink to="/projects/assembly_music_player" class="text-xl">Assembly Music Player</NuxtLink><br>
                    <NuxtLink to="/projects/assembly_music_player">An Assembly app able to play some video game OST.</NuxtLink>
                </div>
                <div class="tab hover:text-black">
                    <NuxtLink to="/projects/slimebeats" class="text-xl">SlimeBeats</NuxtLink><br>
                    <NuxtLink to="/projects/slimebeats">A small rhythm game made in Unity.</NuxtLink>
                </div>
                <div class="tab hover:text-black">
                    <NuxtLink to="/projects/quanta" class="text-xl">Quanta</NuxtLink><br>
                    <NuxtLink to="/projects/quanta">A time management web app team project.</NuxtLink>
                </div>
            </div>
            <div class="inside pl-14">
                <slot />
            </div>
        </div>
    </div>
    </body>
</template>

<style scoped>
    .navtab .projects {
        color: black;
        text-decoration: underline;
        text-underline-offset: 7px;
        text-decoration-thickness: 1px;
        text-decoration-color: #737373;
    }
    .inside {
        width: 50rem;
    }
    .tab {
        height: 5rem;
    }
    .project-tab .router-link-exact-active {
        color: black;
    }
</style>