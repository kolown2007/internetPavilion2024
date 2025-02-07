<script>
      import { onMount } from 'svelte';
       import Markdown from '@magidoc/plugin-svelte-marked'


       let markdownContent = '';

    onMount(() => {
  
    fetch('https://raw.githubusercontent.com/kolown2007/internetPavilion2024/main/README.md')
      .then(response => response.text())
      .then(text => {
   markdownContent = text;
       
      });
  });

</script>


<main class=' mx-auto py-4 px-4 max-w-3xl h-min-screen flex flex-col my-4 '>

    <Markdown
    source={markdownContent}/>

</main>

