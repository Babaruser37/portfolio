<script lang="ts">
	import './layout.css';
  import { onMount } from 'svelte';
  import Lenis from 'lenis';
  import ico from '$lib/assets/ico.ico';

  onMount(() => {
    // Skip Lenis on touch devices — it intercepts touchmove events and
    // prevents native single-finger scrolling on mobile.
    if (window.matchMedia('(hover: none)').matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard "smooth" curve
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

	let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={ico} />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>
{@render children()}
