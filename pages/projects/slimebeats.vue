<template>
    <h1 class="text-xl font-semibold">
        SlimeBeats
    </h1>
    <h2>
        Link to the game:
        <a href='https://unusualcoding.itch.io/slimebeats' target="_blank" class="link">here!</a><br>
        Link to the Github repository:
        <a href='https://github.com/sarastec/slimebeats_unity_game' target="_blank" class="link">here!</a>
    </h2>
    <h2>
        General info
    </h2>
    <p>
        SlimeBeats is a small Unity rhythm game I made for Game Development optional course at Warsaw University of Life Sciences.
    </p>
    <p>
        You play as a warrior who is set on a journey to reach the castle.
        Your objective is to slash as many slimes in your way as you can to the beat of the music and achieve the highest hit combo.
        There are two levels available with varying total number of slimes, different music tempo and overall difficulty.
    </p>
    <p>
        This is yet another project I incorporated my other passions in. I love music so naturally I love rhythm and music games as well.
        That's why I decided on this genre to make my first ever game. SlimeBeats was mostly inspired by the game Muse Dash in particular.
    </p>
    <h2>
        Technologies
    </h2>
    <ul class="list-disc ml-10">
        <li>Unity</li>
        <li>C#</li>
    </ul>
    <h2>
        Overview
    </h2>
    <p>
        You start the game with a main menu window. You can choose to play the game or close it.
        If you hit play, you can choose one of the two levels to play.
    </p>
    <div><img src="~assets/slimebeats_menu.webp" alt="Screenshot of the main menu." class="object-cover rounded-md" /></div>
    <p>
        Level 1 is set in a dark world on a brick-built path.
        Upon starting the level, the player gets a visual as well as an audio cue on the challenge beginning.
        Then, the character starts running and the player can control her by pressing the space bar to attack.
    </p>
    <div><img src="~assets/slimebeats_start.webp" alt="Screenshot of the level's starting screen." class="object-cover rounded-md" /></div>
    <p>
        The music is adventurous and the tempo and slimes' arrangement makes for a fairly challenging but relaxing gameplay.
        The UI displays current combo that is lost and set to 0 once the player misses a slime.
    </p>
    <div><img src="~assets/slimebeats_lvl1.webp" alt="Screenshot of gameplay on level 1." class="object-cover rounded-md" /></div>
    <p>
        On the other hand, level 2's setting is brighter, but the scenery shows a harsher environment with high mountains in the background.
        Accordingly, the music is faster and consists or more notes.
        The level is immidiately more challenging than the previous one with more slimes being clumped together and a shorter window to hit them due to higher level speed.
    </p>
    <div><img src="~assets/slimebeats_lvl2.webp" alt="Screenshot of gameplay on level 2." class="object-cover rounded-md" /></div>
    <p>
        After reaching the castle and completing the level, the player gets a victory screen with their results.
        It showcases the highest combo achieved during this attempt as well as the total count of hit and missed slimes.
    </p>
    <div><img src="~assets/slimebeats_results.webp" alt="Screenshot of the results screen." class="object-cover rounded-md" /></div>
    <p>
        From here the player can choose to make another attempt at this level or go back to the main menu and choose another level or, if they're finished, quit the game.
    </p>
    <h2>
        Setup
    </h2>
    <p>
        The game is available to play in browser or to download on Windows on <a href='https://unusualcoding.itch.io/slimebeats' target="_blank" class="link">itch.io</a>.
        Follow the link for further instructions.
    </p>
    <h2>
        Status
    </h2>
    <p>
        Finished with no plans for further updates.
    </p>
</template>

<script setup>
    import "../css/projects_css.css"
    definePageMeta({
        layout: 'projects'
    })
</script>
