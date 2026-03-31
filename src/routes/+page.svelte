<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';
  import ChristianGarciaFlores from '$lib/assets/ChristianGarciaFlores.jpg';
  import projects from  '$lib/utils/projects.json'

  

  let aboutSection: HTMLElement;
  let aboutTitle: HTMLElement;
  let textBlock: HTMLElement;
  let projectsSection: HTMLElement;
  let horizontalWrapper: HTMLElement;

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

    // Horizontal Projects
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${window.innerHeight * 5}` // Hard-coded to 5x viewport height
      }
    });

    tl.to(horizontalWrapper, {
      x: () => -(horizontalWrapper.scrollWidth - window.innerWidth),
      ease: "none"
    });

    // Recalculate all scroll positions now that pinning has added height to the page
    ScrollTrigger.refresh();

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

  <section 
      id="projects" 
      bind:this={projectsSection} 
      class="h-screen flex flex-col justify-center overflow-hidden border-t border-gray-100 bg-transparent"
    >
      <div class="max-w-6xl mx-auto px-6 w-full mb-8 shrink-0">
        <h2 class="text-6xl font-bold tracking-tighter">Featured Work</h2>
      </div>

      <div 
        bind:this={horizontalWrapper} 
        class="flex gap-12 px-6 w-max items-center h-[60vh]"
      >
        {#each projects as project (project.title)}
          <div class="w-[85vw] md:w-[60vw] lg:w-[800px] h-full flex flex-col justify-between shrink-0 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group">
            
            <div class="h-[55%] overflow-hidden bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title} 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              >
            </div>

            <div class="p-8 md:p-10 h-[45%] flex flex-col justify-between">
              <div>
                <h3 class="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p class="text-lg text-gray-600 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
              </div>
              
              <div class="flex flex-wrap gap-3">
                {#each project.tech as tech (tech)}
                  <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg">
                    {tech}
                  </span> 
                {/each}
              </div>
            </div>

          </div>
        {/each}
        
        <div class="w-[10vw] shrink-0"></div>
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
</style>