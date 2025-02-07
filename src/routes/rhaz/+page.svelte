

<script>
    // @ts-ignore
    import * as Papa from 'papaparse';
    import {onMount} from 'svelte';

const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEx6m0b2KP2PrqTbj2PWLbo4KkrQ_QC-W3grU9QRgldUVuD7rrud97nkIN_tYFElUJwo05WWFlF_jP/pub?gid=0&single=true&output=csv';

let status ="";

onMount(async () => {
    alert("my feelings are controlled from a google sheet");
  const response = await fetch(csvUrl);
  const data = await response.text();
  const results = Papa.parse(data, { header: true });
  status = results.data[0].data
  console.log(results.data);
});


</script>

<main class='h-screen w-screen flex flex-col items-center justify-center '
style="background: url('/rhaz.jpeg') no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;">
<h1 class='text-4xl text-white'>Rhaz is {status}</h1>
</main>