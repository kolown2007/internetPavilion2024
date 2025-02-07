<script lang="ts">

</script>
<svelte:head>
    <title>Philippine Islands Internet Pavilion 2024</title>
</svelte:head>

<main class='main  flex flex-col items-center justify-center text-md min-h-screen'>




    <div>
        <h1 class="py-12  text-gray-400">Philippine_Islands_Internet_Pavilion_2024</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
       
        <div>
            <a class="title" href="/tona">Pro Forma</a>
            <p class="text-base text-gray-400">by Christina Lopez</p>
        </div>
        <div>
            <a class="title" href="/mona">Coke</a>
            <p class="text-base text-gray-400">by Mona Alcudia-Ong</p>
        </div>
        <div>
            <a class="title" href="/ronyel">Impaktom...</a>
            <p class="text-base text-gray-400">by Ronyel Compra</p>
        </div>
        <div>
            <a class="title" href="https://booleangarden.github.io/">Boolean Garden</a>
            <p class="text-base text-gray-400">by Nice Buenaventura</p>
        </div>
        <div>
            <a class="title" href="/kanade">Siquijor Sunset</a>
            <p class="text-base text-gray-400">by Kanade Yagi</p>
        </div>
        <div>
            <a class="title" href="/bjorn">Bacons & Broken Legs</a>
            <p class="text-base text-gray-400">by Bjorn Calleja</p>
        </div>
        <div>
            <a class="title" href="/salawaki">2AM Security</a>
            <p class="text-base text-gray-400">by Salawaki</p>
        </div>
        <div>
            <a class="title" href="/rhaz">Excel Status</a>
            <p class="text-base text-gray-400">by Rhaz Oriente</p>
        </div>
        <div>
            <a class="title" href="/cmyka">Random</a>
            <p class="text-base text-gray-400">by CMYKa</p>
        </div>
        <div>
            <a class="title" href="/franco2">warehouse scandal</a>
            <p class="text-base text-gray-400">by Franco Mamaril</p>
        </div>
        <div>
            <a class="title" href="/rogermond">vultureville</a>
            <p class="text-base text-gray-400">by Roger Mond</p>
        </div>
        <div>
            <a class="title" href="/joseolarte">On Grid</a>
            <p class="text-base text-gray-400">by Jose Olarte</p>
        </div>
       
    </div>
    &nbsp;
    <div>
        <a class="text-gray-400 py-12" href="/text">Exhibition Notes</a>
    </div>


</main>


<style>
     @import url('https://fonts.googleapis.com/css2?family=Workbench&display=swap');

     .title {
      font-family: 'Workbench', sans-serif;
      font-size: 1.5rem;
     }

    .main {
      position: relative;
      z-index: 1;
    }
    
    .main::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('https://kolown.net/assets/kanade.gif') no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      filter: blur(3px);
      z-index: -1;
    }
    </style>
