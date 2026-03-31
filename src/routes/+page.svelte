<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';

  import ChristianGarciaFlores from '$lib/assets/ChristianGarciaFlores.jpg';
  import OpenCV from '$lib/assets/logos/OpenCV.svg'
  import MP from '$lib/assets/logos/MediaPipe.svg'
  import React from '$lib/assets/Logos/React.svg'
  import Svelte from '$lib/assets/Logos/Svelte.svg'
  import GSAP from '$lib/assets/Logos/GSAP.svg'
  import Tailwind from '$lib/assets/Logos/Tailwindcss.svg'
  import CSS from '$lib/assets/Logos/CSS.svg'
  import HTML from '$lib/assets/Logos/HTML.svg'
  import JS from '$lib/assets/Logos/JavaScript.svg'
  import Electron from '$lib/assets/Logos/Electron.svg'
  import Supabase from '$lib/assets/Logos/supabase.svg'
  import NextJS from '$lib/assets/Logos/NextJS.svg'

  import projects from  '$lib/utils/projects.json'

  

  let aboutSection: HTMLElement;
  let aboutTitle: HTMLElement;
  let textBlock: HTMLElement;

  const techLogos: Record<string, string> = {
    postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    svelte: Svelte,
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    gsap: GSAP,
    tailwind: Tailwind,
    react: React,
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
    opencv: OpenCV,
    mediapipe: MP,
    javascript : JS,
    html: HTML, 
    css : CSS,
    electron : Electron,
    nextjs : NextJS,
    supabase : Supabase
  };

  let bioText = "Originally from Mexico and now based in Toronto, I have a huge curiosity for all things tech. I started out in pharmacology before moving into software engineering, hoping to one day bring both passions together. When I'm not working on projects, you can usually find me watching Formula 1 or attending orchestral shows.";
  let characters = bioText.split("");

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // About Section
    gsap.from(aboutTitle, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 80%",
        end: "top 20%",
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

    // Scramble Logic
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

        if (dist < 30) {
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
  
  <section id="hero" class="h-screen max-w-6xl mx-auto px-6 flex items-center justify-between gap-12 bg-transparent">
    <div>
      <h1 class="text-7xl font-bold pt-20 leading-tight">
        Hi, I'm Christian Garcia Flores <br>
        <span class="text-gray-400 text-6xl">Software Engineer</span>
      </h1> 
    </div>
    <img src={ChristianGarciaFlores} alt="Christian" class="rounded-2xl shadow-2xl max-w-sm">
  </section>

  <section bind:this={aboutSection} id="about" class="min-h-screen border-t border-gray-100 flex items-center bg-transparent backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="overflow-hidden mb-12">
        <h2 bind:this={aboutTitle} class="text-6xl font-bold tracking-tighter">About Me</h2>
      </div>
      
      <div 
        bind:this={textBlock} 
        class="text-block text-3xl font-medium text-gray-700 leading-relaxed cursor-default select-none"
      >
        {#each characters as char, i (i)}
          <span class="char inline-block min-w-[0.2em]" data-content={char}>
            {char === " " ? "\u00A0" : char}
          </span>
        {/each}
      </div>
    </div>
  </section>

  <section id="projects" class="border-t border-gray-100 bg-transparent py-20">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-6xl font-bold tracking-tighter">Featured Work</h2>
      <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each projects as project (project.title)}
          <article class="group perspective-1000">
            <div class="flip-card-inner relative w-full h-96 rounded-3xl shadow-lg transition-transform duration-700 ease-out transform-style-preserve-3d">
              <div class="flip-card-face front absolute inset-0 rounded-3xl bg-white border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">{project.title}</h3>
                <div class="grid grid-cols-3 gap-3 items-center justify-items-center">
                  {#each project.tech.slice(0,6) as tech, i (tech)}
                    <img
                      src={techLogos[tech.toLowerCase()] || 'https://via.placeholder.com/40?text=?'}
                      alt={tech}
                      title={tech}
                      class="w-10 h-10 object-contain logo-float"
                      style="animation-delay: {i * 0.1}s"
                    />
                  {/each}
                </div>
              </div>
              <div class="flip-card-face back absolute inset-0 rounded-3xl text-white p-6 transform rotate-y-180 border border-indigo-500 flex flex-col" style="background-image: url({project.image}); background-size: cover; background-position: center;">
                <div class="absolute inset-0 rounded-3xl bg-indigo-900/70"></div>
                <div class="relative z-10 flex flex-col h-full">
                  <div class="flip-text opacity-0">
                    <h3 class="text-2xl font-bold mb-3">{project.title}</h3>
                    <p class="text-sm leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <div class="mt-auto flex flex-col gap-3"> 
                    {#if project.githubLink}
                    <a href={project.githubLink} target="_blank" rel="noreferrer" class="inline-block text-center rounded-lg bg-white text-indigo-800 font-semibold py-2">View on GitHub</a>
                  {/if}
                  {#if project.demoLink}
                    <a href={project.demoLink} target="_blank" rel="noreferrer" class="inline-block text-center rounded-lg bg-white text-indigo-800 font-semibold py-2">View Demo</a>
                  {/if}
                </div>
              </div>
            </div>
          </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="min-h-screen border-t border-gray-100 flex items-center bg-transparent">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <h2 class="text-6xl font-bold tracking-tighter">Skills</h2>
    </div>
  </section>

  <section class="min-h-screen border-t border-gray-100 flex items-center bg-transparent">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <h2 class="text-6xl font-bold tracking-tighter">Contact</h2>
    </div>
  </section>

</main>

<style>
  .char {
    transition: color 0.2s ease;
  }
  .text-block:hover .char {
    color: #111;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  .flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.7s ease;
  }

  .flip-card-face {
    backface-visibility: hidden;
  }

  .flip-card-face.back {
    transform: rotateY(180deg);
  }

  .logo-float {
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  .logo-float:hover {
    transform: translateY(-4px) scale(1.1);
  }

  .flip-text {
    display: inline-block;
    opacity: 0;
  }

  article:hover .flip-text {
    animation: fadeTextIn 0.5s ease-in-out forwards;
  }

  @keyframes fadeTextIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  article:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
</style>