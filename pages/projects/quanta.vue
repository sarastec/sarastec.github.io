<template>
    <h1 class="text-xl font-semibold">
        Quanta
    </h1>
    <h2>
        Link to the Github repository:
        <a href='https://github.com/sarastec/time_management_web_app' target="_blank" class="link">here!</a>
    </h2>
    <h2>
        General info
    </h2>
    <p>
        Quanta is a time management web application meant to use with friends.
        Its main purpose is to effciently help users find time for their friends and family by comparing schedules.
    </p>
    <div><img src="~assets/calendar.webp" alt="Screenshot of the calendar page with Create Event popup window open." class="object-cover rounded-md" /></div>
    <div><img src="~assets/profile.webp" alt="Screenshot of the user profile." class="object-cover rounded-md" /></div>
    <h2>
        Features
    </h2>
    <ul class="list-disc ml-10">
        <li>Account creation</li>
    </ul>
    <div><img src="~assets/signin.webp" alt="Screenshot of the Sign In page." class="object-cover rounded-md" /></div>
    <ul class="list-disc ml-10">
        <li>Event creation</li>
        <li>Calendar overview</li>
        <li>Adding friends</li>
    </ul>
    <div><img src="~assets/friendreq.webp" alt="Screenshot of the Add a Friend popup window." class="object-cover rounded-md" /></div>
    <ul class="list-disc ml-10">
        <li>Changing password</li>
    </ul>
    <div><img src="~assets/changepswd.webp" alt="Screenshot of the Change Password popup window." class="object-cover rounded-md" /></div>
    <h2>
        Technologies
    </h2>
    <ul class="list-disc ml-10">
        <li><a href='https://nuxt.com' target="_blank" class="link">Nuxt3</a></li>
        <li><a href='https://vuejs.org' target="_blank" class="link">Vue.js</a></li>
        <li><a href='https://fastapi.tiangolo.com' target="_blank" class="link">FastAPI</a></li>
        <li><a href='https://www.postgresql.org' target="_blank" class="link">PostgreSQL</a></li>
        <li><a href='https://www.docker.com' target="_blank" class="link">Docker</a></li>
    </ul>
    <h2>
        Setup
    </h2>
    <p>
        Quanta is currently only available to run by yourself on localhost.
    </p>
    <ol class="list-decimal ml-10">
        <li>Clone the repository with <code>git clone https://github.com/koteczki01/time_management_web_app</code></li>
        <li>Enter the API directory with <code>cd backend\rest_api_service</code></li>
        <li>Run the API with <code>python3 -m uvicorn main:app --host 0.0.0.0 --port 8000</code></li>
        <li>In a new terminal enter the frontend directory with <code>cd frontend</code></li>
        <li>Run the frontend with <code>npm run dev</code></li>
        <li>Open <code>localhost:3000</code> in your browser</li>
    </ol>
    <h2>
        Team
    </h2>
    <div class=" border-slate-500 flex">
    <table class="table-fixed w-96 ml-5 text-center">
        <tr>
            <th class="border-b border-slate-500 font-semibold" colspan="2">Project Manager</th>
        </tr>
        <tr>
            <td class="border-b border-slate-400" colspan="2"><a href='https://github.com/sarastec' target="_blank" class="link-t">Sara Stec</a></td>
        </tr>
        <tr class="h-6"><td></td></tr>
        <tr>
            <th class="border-b border-slate-500 font-semibold">Lead Backend</th>
            <th class="border-b border-slate-500 font-semibold">Lead Frontend</th>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/piecharka' target="_blank" class="link-t">Kacper Kowalski</a></td>
            <td class="border-b border-slate-400"><a href='https://github.com/Mensix' target="_blank" class="link-t">Grzegorz Perun</a></td>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/PLKuba' target="_blank" class="link-t">Jakub Niewczas</a></td>
            <td class="border-b border-slate-400"></td>
        </tr>
        <tr class="h-6"><td></td></tr>
        <tr>
            <th class="border-b border-slate-500 font-semibold">Backend</th>
            <th class="border-b border-slate-500 font-semibold">Frontend</th>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/gaba02' target="_blank" class="link-t">Gabriela Kalisz</a></td>
            <td class="border-b border-slate-400"><a href='https://github.com/danieldruzdzel' target="_blank" class="link-t">Daniel Drużdżel</a></td>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/jacobkostek' target="_blank" class="link-t">Jakub Kostyra</a></td>
            <td class="border-b border-slate-400"><a href='https://github.com/Tomczon' target="_blank" class="link-t">Tomasz Klemczak</a></td>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/eedyta' target="_blank" class="link-t">Edyta Pyra</a></td>
            <td class="border-b border-slate-400"><a href='https://github.com/Natkapietruszki213' target="_blank" class="link-t">Natalia Konopka</a></td>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/GrzesS0' target="_blank" class="link-t">Grzegorz Szeremeta</a></td>
            <td class="border-b border-slate-400"><a href='https://github.com/s210897' target="_blank" class="link-t">Marcelina Miesiąc</a></td>
        </tr>
        <tr>
            <td class="border-b border-slate-400"><a href='https://github.com/EwaSzrajber' target="_blank" class="link-t">Ewa Szrajber</a></td>
            <td class="border-b border-slate-400"><a href='https://github.com/AlexO2810' target="_blank" class="link-t">Aleksandra Oknińska</a></td>
        </tr>
    </table>
    </div>
    <h2>
        Status
    </h2>
    <p>
        Abandoned and no further updates are planned for the near future.
    </p>
</template>

<script setup>
    import "../css/projects_css.css"
    definePageMeta({
        layout: 'projects'
    })
</script>
