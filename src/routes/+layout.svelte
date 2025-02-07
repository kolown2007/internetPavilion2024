<script>
    import "../app.css";
    import {onMount} from 'svelte'
    import {performance} from '$lib/ably'
    import { page } from '$app/stores';
    import { analyticsPromise } from '$lib/analytics';
    import { logEvent } from 'firebase/analytics';

    onMount(async () => {
    // Assuming performance() is a valid function call; otherwise, remove or replace it
    performance();
    
    // Use SvelteKit's reactive page store for pathname, fallback to window.location.pathname
    const pagePath = $page?.url?.pathname || window.location.pathname;
    
    const analytics = await analyticsPromise;
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: pagePath,
      });
    }
  });
  </script>
  <body class="bg-black text-white font-sans"
   
    >
  </body>
  
  <slot />