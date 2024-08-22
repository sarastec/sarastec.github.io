<template>
    <h1 class="text-xl font-semibold">
        Assembly Music Player
    </h1>
    <h2>
        Link to the Github repository:
        <a href='https://github.com/sarastec/assembly_music_player' target="_blank" class="link">here!</a>
    </h2>
    <h2>
        General info
    </h2>
    <p>
        This is a simple music player for MS-DOS written in Assembly as an extra credit project for Computer Architecture course at Warsaw University of Life Sciences. It has three built-in video game OST pieces:
    </p>
    <ol class="list-decimal ml-10">
        <li><i>Fallen Down</i> - Toby Fox (from "Undertale")</li>
        <li><i>Sunlight Through Water</i> - Bill Kiley (from "Why Am I Dead At Sea")</li>
        <li><i>$4cr1f1c14|_</i> - Danny Baranowsky (from "The Binding of Isaac")</li>
    </ol>
    <p>
        It's written in a way that adding new pieces of music is easy and straighforward.
        Detailed explanation of the code will be included in the next sections.
    </p>
    <p>
        I found Assembly to be really interesting and fun since using it feels like solving a riddle the most out of every programming language I touched.
        This is the reason why I decided to use my passion for this language and combine it with my two other passions - music and games - to make this application!
    </p>
    <p>
        Please note that all of the music belongs to the respective composers. The arrangements used in this music player were made by me.
    </p>
    <h2>
        Technologies
    </h2>
    <ul class="list-disc ml-10">
        <li>Assembly - all code was written in pure Assembly by hand in Notepad++</li>
        <li>NASM</li>
        <li>DOSBox</li>
    </ul>
    <h2>
        Setup
    </h2>
    <ol class="list-decimal ml-10">
        <li>Download, install and open <a href="https://www.dosbox.com/" target="_blank" class="link">DOSBox</a></li>
        <li>Create a virtual drive in DOSBox with <code>mount c: [path to this repository on your machine]\dos</code></li>
        <li>Move to your virtual drive with <code>c:</code></li>
        <li>Open the folder with the app with <code>cd player</code></li>
        <li>Start the app with <code>player.com</code></li>
    </ol>
    <div><img src="~assets/dosbox.webp" alt="Screenshot of a DOSBox window with all the commands used." class="object-cover rounded-md" /></div>
    <p>
        Now you can press a number on your keyboard to play the corresponding song or press ESC to close the app.
    </p>
    <h2>
        How it works
    </h2>
    <p>
        All songs are written in separate arrays with every note consisting of 4 bites.
        The first 3 are the tone and the last one is the length of the note.
        Just above the array with the notes, you have to declare a variable with the amount of notes that your song consists of.
    </p>
    <div><img src="~assets/notes_array.webp" alt="Screenshot of the code with explanation." class="object-cover rounded-md" /></div>
    <p>
        For natural tones, the second bite is noted as <code>0</code>.
        Duration is artificial.
    </p>
    <p>
        All tones supported by the app are in the <code>notes</code> array. All half tones are noted as sharps only.
        To add more tones, you could add them to this array and then modify the <code>playsong</code> function accordingly.
    </p>
    <p>
        To make the app play the song written in the arrays, I made functions that move the address of the corresponding array to <code>bp</code> and then call the function <code>playsong</code>.
    </p>
    <p>
        All menu text is in the <code>menutxt1</code> and <code>menutxt2</code> arrays.
        Two of them were needed as one of the songs has the character <code>$</code> that marks the end of a string.
        To bypass this, I had to call the "write character" function (<code>AH=09h</code>) between the two strings to display this single character.
    </p>
    <div><img src="~assets/menu.webp" alt="Screenshot of the code for menu." class="object-cover rounded-md" /></div>
    <p>
        The <code>inp</code> loop reads user's input. It plays a song corresponding to displayed numbers or exists the program.
        Otherwise, ignores all other input.
    </p>
    <p>
        The <code>PLAY.BAT</code> script builds the application in the <code>PLAYER.COM</code> file.
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
