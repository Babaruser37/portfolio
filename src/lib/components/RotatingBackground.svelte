<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import aztecSvg from '$lib/assets/aztec-calendar.svg';

  let bgContainer: HTMLDivElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(bgContainer, {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom", // track the full page scroll range reliably
        scrub: 1, // Smooth rotation that follows scroll
        invalidateOnRefresh: true,
      }
    });
  });
</script>

<div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
  <div 
    bind:this={bgContainer}
    class="absolute w-[200vmax] h-[200vmax] -top-[50vmax] -left-[100vmax] flex items-center justify-center"
  >
    <img 
      src={aztecSvg} 
      alt="" 
      class="w-full h-full object-contain opacity-30 select-none"
    />
  </div>
</div>