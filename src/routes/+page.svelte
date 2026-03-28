<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';
  import ChristianGarciaFlores from '$lib/assets/ChristianGarciaFlores.jpg';

  let aboutSection: HTMLElement;
  let aboutTitle: HTMLElement;
  let textBlock: HTMLElement;

  // We'll split the text manually into spans so we don't need the SplitText plugin
  let bioText = "Based in Toronto and currently in my 4th semester of System Development, I specialize in bridging the gap between robust backend systems and interactive, motion-rich frontends.";
  let characters = bioText.split("");

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Keep your Title Scroll Animation
    gsap.from(aboutTitle, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 80%",
        end: "top 20%  ",
        scrub: 1
      }
    });
      gsap.from(aboutSection, {
      backgroundColor: "rgba(255, 255, 255, 0)", 
      backdropFilter: "blur(0px)",
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 90%", 
        end: "top 20%",
        scrub: 1
      }
    });
  

    // 2. The Interactive Scramble Logic
    const charElements = textBlock.querySelectorAll('.char');

    textBlock.onpointermove = (e: PointerEvent) => {
      charElements.forEach((char) => {
        const el = char as HTMLElement;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 30) { // Hover radius
          gsap.to(el, {
            opacity: 0.5,
            duration: 0.2,
            onStart: () => { el.innerText = Math.random() > 0.5 ? "." : ":" },
            onComplete: () => { el.innerText = el.dataset.content || "" },
            overwrite: true
          });
        } else {
          gsap.to(el, { opacity: 1, duration: 0.5 });
        }
      });
    };
  });
</script>

<RotatingBackground />
<Navbar />

<main class="relative z-10 font-sans"> 
  <section id="hero" class="h-screen max-w-6xl mx-auto px-6 flex items-center justify-between gap-12">
    <div>
      <h1 class="text-7xl font-bold pt-20 leading-tight">
        Hi, I'm Christian Garcia Flores <br>
        <span class="text-gray-400 text-6xl">Software Engineer</span>
      </h1> 
    </div>
    <img src={ChristianGarciaFlores} alt="Christian" class="rounded-2xl shadow-2xl max-w-sm">
  </section>
  
  <section bind:this={aboutSection} id="about" class="min-h-screen border-t border-gray-100 flex items-center bg-white/5 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="overflow-hidden mb-12">
        <h2 bind:this={aboutTitle} class="text-8xl font-bold tracking-tighter">About Me</h2>
      </div>
      
      <div 
        bind:this={textBlock} 
        class="text-block text-3xl font-medium text-gray-700 leading-relaxed cursor-default select-none"
      >
        {#each characters as char}
          <span class="char inline-block min-w-[0.2em]" data-content={char}>
            {char === " " ? "\u00A0" : char}
          </span>
        {/each}
      </div>
    </div>
  </section>
  <section class="min-h-screen border-t border-gray-100 flex items-center">

  </section>
</main>

<style>
  .char {
    transition: color 0.2s ease;
  }
  .text-block:hover .char {
    color: #111;
  }
</style>