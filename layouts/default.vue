<template>
    <body class="bg-zinc-100 flex justify-center h-screen">
    <div class="w-full">
        <header>
            <nav>
                <div class="text-6xl p-8 flex justify-center font-normal">
                    <RouterLink to="/">Sara Stec</RouterLink>
                </div>
                <div class="navtab text-xl flex justify-center space-x-11 p-5 w-full text-zinc-500">
                    <hr class="w-64 h-px my-4 border-0 dark:bg-zinc-500">
                    <RouterLink to="/" class="hover:text-black">About</RouterLink>
                    <RouterLink to="/projects/quanta" class="hover:text-black">Projects</RouterLink>
                    <RouterLink to="/contact" class="hover:text-black">Contact</RouterLink>
                    <RouterLink to="/resume" class="hover:text-black">Resume</RouterLink>
                    <hr class="w-64 h-px my-4 border-0 dark:bg-zinc-500">
                </div>
            </nav>
        </header>

        <!-- output page content -->
        <div class="justify-center flex">
            <slot />
        </div>
    </div>
    </body>
</template>

<style scoped>
    .navtab .router-link-exact-active {
        color: black;
        text-decoration: underline;
        text-underline-offset: 7px;
        text-decoration-thickness: 1px;
        text-decoration-color: #737373;
    }
</style>