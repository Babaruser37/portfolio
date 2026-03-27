<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';
  import ChristianGarciaFlores from '$lib/assets/ChristianGarciaFlores.jpg';

  let aboutSection: HTMLElement;
  let aboutTitle: HTMLElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // The Scroll-Driven Reveal
    gsap.from(aboutTitle, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 40%',        // When top of box hits 80% of viewport
        end: 'top 80%',         // Ends when the bottom hits the middle
        scrub: 1               // Smoothly links the animation progress to the scrollbar
      }
    });
  });
</script>

<RotatingBackground />

<Navbar />

<main class="relative z-10 font-sans"> 
  <section id="hero" class="h-screen max-w-6xl mx-auto px-6 flex items-center justify-between gap-12">
    <div>
      <h1 class="text-7xl font-bold pt-20 leading-tight">
        Hi, I'm Christian Garcia Flores <br>
        <span class="text-gray-400">Software Engineer</span>
      </h1>
      <p class="text-xl font-medium pt-10 text-gray-600 max-w-lg">
        I craft intuitive and delightful digital experiences that solve real user problems.
      </p>
    </div>
    <div class="relative">
      <div class="absolute -inset-4 bg-gray-100/50 rounded-3xl -z-10 rotate-3"></div>
      <img src={ChristianGarciaFlores} alt="Christian Garcia Flores" class="rounded-2xl shadow-2xl max-w-sm">
    </div>
  </section>
  
  <section 
    id="about" 
    bind:this={aboutSection} 
    class="h-screen border-t border-gray-100 flex items-center"
  >
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="overflow-hidden">
        <h2 
          bind:this={aboutTitle} 
          class="text-7xl font-bold tracking-tighter"
        >
          About Me
        </h2>
      </div>
      
    </div>
  </section>
</main> 