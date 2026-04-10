<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';

  import ChristianGarciaFlores from '$lib/assets/ChristianGarciaFlores.jpg';
  import OpenCV from '$lib/assets/Logos/OpenCV.svg'
  import MP from '$lib/assets/Logos/MediaPipe.svg'
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
  import stats from '$lib/utils/stats.json'
  import experience from '$lib/utils/experience.json'

  

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

  let bioText = "Originally from Mexico and now based in Toronto, I'm really curious about anything tech-related. I actually started out in pharmacology before moving into software engineering, with the hopes of eventually combining both worlds. When I'm not working on projects, I'm usually either watching Formula 1, gaming or getting lost in music, whether that's at an orchestral show or just vibing to anything from jazz to pop to R&B."; let characters = bioText.split("");

  let artistVideoUrl = $state('');

  function toYoutubeEmbedUrl(url: string) {
    try {
      const u = new URL(url);
      if (u.hostname === 'youtu.be') {
        return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
      }
      if (u.hostname.includes('youtube.com')) {
        const videoId = u.searchParams.get('v');
        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
        if (u.pathname.startsWith('/embed/')) {
          return url;
        }
      }
    } catch {
      // fallback regex
    }

    const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    return '';
  }

  function openArtistVideo() {
    artistVideoUrl = toYoutubeEmbedUrl(stats.favouriteArtistYoutube);
  }

  function closeArtistVideo() {
    artistVideoUrl = '';
  }

  function calculateAgeDecimal(birthDate: string) {
    const birth = new Date(birthDate);
    const now = new Date();
    const diffMs = now.getTime() - birth.getTime();

    // Using tropical year average for smooth decimal age
    const yearMs = 365.2425 * 24 * 60 * 60 * 1000;
    const years = diffMs / yearMs;
    return Number(years.toFixed(10));
  }

  let ageDecimal = $state(calculateAgeDecimal(stats.birthDate));

  let currentIndex = 0;
  const greetings = [
    { name: "Hi, I'm Christian Garcia Flores", title: "Software Engineer" },
    { name: "Hola, soy Christian Garcia Flores", title: "Ingeniero de Software" },
    { name: "Ciao, sono Christian Garcia Flores", title: "Ingegnere informatico" },
    { name: "Salut, je suis Christian Garcia Flores", title: "Ingénieur Logiciel" },
    { name: "こんにちは、Christian Garcia Floresです", title: "ソフトウェアエンジニア" }
  ];
  let currentGreeting = $state(greetings[0]);
  let heroH1: HTMLElement;

  let contactName = $state('');
  let contactMessage = $state('');
  let contactStatus = $state('');
  let contactStatusType = $state<'success' | 'error' | ''>('');
  let flippedIndex = $state(-1);

  function handleContactSubmit(event: SubmitEvent) {
    event.preventDefault();
    contactStatus = '';
    contactStatusType = '';

    if (!contactName || !contactMessage) {
      contactStatus = 'Please fill in all fields.';
      contactStatusType = 'error';
      return;
    }

    const recipientEmail = 'christianumbertogarcia@gmail.com';
    const subject = encodeURIComponent(`Message from ${contactName}`);
    const body = encodeURIComponent(
      `Name: ${contactName}\n\nMessage:\n${contactMessage}`
    );

    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    contactStatus = 'Opening your email client...';
    contactStatusType = 'success';
    setTimeout(() => {
      contactName = '';
      contactMessage = '';
      contactStatus = '';
    }, 1500);
  }

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

    const aboutGlassTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 90%",
        end: "bottom 20%",
        scrub: 1
      }
    });

    aboutGlassTimeline
      .fromTo(
        aboutSection,
        {
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(0px)",
          opacity: 0.35
        },
        {
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(12px)",
          opacity: 1,
          ease: "none",
          duration: 0.7
        }
      )
      .to({}, { duration: 0.7 }) // keep fully visible longer, fade starts later
      .to(aboutSection, {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(0px)",
        opacity: 0.3,
        ease: "none",
        duration: 0.2
      });

    // Hero text animation - language transition
    const heroTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    heroTl.to(heroH1, { opacity: 0, duration: 0.3, ease: "power2.out" })
      .call(() => { 
        currentIndex = (currentIndex + 1) % greetings.length;
        currentGreeting = greetings[currentIndex];
      })
      .to(heroH1, { opacity: 1, duration: 0.3, ease: "power2.in" })
      .to({}, { duration: 1.5 }); // wait 1.5 seconds

    // Experience Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, idx) => {
      gsap.from(item, {
        opacity: 0,
        x: idx % 2 === 0 ? -150 : 150,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "top 70%",
          scrub: 0.5
        }
      });
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
    setInterval(() => {
      ageDecimal = calculateAgeDecimal(stats.birthDate);
    }, 100); 
  });
</script>

<RotatingBackground />


<Navbar />

<main class="relative z-10 font-sans"> 
  
  <section id="hero" class="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-8 lg:gap-12 bg-transparent py-12 sm:py-0">
    <div class="pt-12 sm:pt-20 flex-1">
      <h1 bind:this={heroH1} class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
        {currentGreeting.name} <br>
        <span class="text-gray-400 text-2xl sm:text-4xl lg:text-6xl">{currentGreeting.title}</span>
      </h1> 
    </div>
    <img src={ChristianGarciaFlores} alt="Christian" class="rounded-2xl shadow-2xl w-full sm:w-80 lg:max-w-sm">
  </section>

  <section bind:this={aboutSection} id="about" class="min-h-screen border-t border-gray-100 flex items-center bg-transparent backdrop-blur-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-0">
      <div class="overflow-hidden mb-8 sm:mb-12">
        <h2 bind:this={aboutTitle} class="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter">About Me</h2>
      </div>
      
      <div 
        bind:this={textBlock} 
        class="text-block text-base sm:text-xl lg:text-3xl font-medium text-gray-700 leading-relaxed cursor-default select-none"
      >
        {#each characters as char, i (i)}
          <span class="char inline-block min-w-[0.2em]" data-content={char}>
            {char === " " ? "\u00A0" : char}
          </span>
        {/each}
      </div>

      <div class="stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
        <div class="stat text-center">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{ageDecimal}</div>
          <div class="text-sm sm:text-base lg:text-lg text-gray-600">Years Old</div>
        </div>
        <div class="stat text-center">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{stats.countriesTraveled}</div>
          <div class="text-sm sm:text-base lg:text-lg text-gray-600">Countries Traveled</div>
        </div>
        <div class="stat text-center">
          <button
            class="text-4xl font-bold text-blue-600 hover:text-blue-800 focus:outline-none"
            onclick={openArtistVideo}
          >
            {stats.favouriteArtist}
          </button>
          <div class="text-lg text-gray-600">Favourite Artist (click to open song)</div>
        </div>
      </div>

      {#if artistVideoUrl}
        <div class="mt-8">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-500">Now playing: {stats.favouriteArtist}</span>
            <button
              class="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
              onclick={closeArtistVideo}
            >
              Close
            </button>
          </div>
          <div class="aspect-video border rounded-2xl overflow-hidden bg-black">
            <iframe
              class="w-full h-full"
              src={artistVideoUrl}
              title="Favourite Artist Song"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <section id="projects" class="border-t border-gray-100 bg-transparent py-12 sm:py-16 lg:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter">Featured Work</h2>
      <div class="mt-6 sm:mt-8 lg:mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {#each projects as project, idx (project.title)}
          <article class="group perspective-1000">
            <button type="button" class="w-full h-full text-left" onclick={() => flippedIndex = flippedIndex === idx ? -1 : idx} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flippedIndex = flippedIndex === idx ? -1 : idx; } }}>
              <div class="flip-card-inner relative w-full h-96 rounded-3xl shadow-lg transition-transform duration-700 ease-out transform-style-preserve-3d{flippedIndex === idx ? ' flipped' : ''}" style="transform: {flippedIndex === idx ? 'rotateY(180deg)' : 'none'}">
              <div class="flip-card-face front absolute inset-0 rounded-3xl bg-white border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-6">
                <div class="absolute top-4 right-4 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64M3.51 15A9 9 0 0 0 18.36 18.36"/></svg>
                </div>
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
                  <div class="flip-text">
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
          </button>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section id="experience" class="border-t border-gray-100 bg-transparent py-12 sm:py-16 lg:py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter mb-12">Experience</h2>
      
      <!-- Centered timeline container -->
      <div class="relative">
        <!-- Center line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-indigo-200"></div>

        <!-- Timeline items -->
        {#each experience as item, idx (idx)}
          <div class="timeline-item mb-12 relative flex {idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
            <!-- Left/Right content container -->
            <div class="w-1/2 {idx % 2 === 0 ? 'pr-6 sm:pr-12 text-right' : 'pl-6 sm:pl-12 text-left'}">
              <div class="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p class="text-indigo-600 font-semibold mb-3">{item.business}</p>
                <p class="text-sm text-gray-500">{item.startDate} — {item.endDate}</p>
              </div>
            </div>

            <!-- Center dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
              <div class="timeline-dot w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            <!-- Right/Left empty space -->
            <div class="w-1/2"></div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="contact" class="min-h-screen border-t border-gray-100 flex items-center bg-transparent">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-0">
      <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter">Contact</h2>
      <p class="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">Send me a message and I&apos;ll get back to you as soon as possible.</p>

      <form class="mt-6 sm:mt-8 space-y-4 max-w-xl" onsubmit={handleContactSubmit}>
        <div>
          <label class="block text-xs sm:text-sm font-medium text-gray-700" for="name">Name</label>
          <input id="name" type="text" bind:value={contactName} required class="mt-1 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label class="block text-xs sm:text-sm font-medium text-gray-700" for="message">Message</label>
          <textarea id="message" bind:value={contactMessage} required rows="5" class="mt-1 block w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <button type="submit" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
      </form>

      {#if contactStatus}
        <p class="mt-4 text-sm font-medium {contactStatusType === 'success' ? 'text-green-600' : 'text-red-600'}">{contactStatus}</p>
      {/if}
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
    transition: transform 0.3s ease;
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
    transform: translateY(10px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .flip-card-inner.flipped .flip-text,
  article:hover .flip-card-inner .flip-text {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes fadeTextIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Desktop hover and click behavior */
  @media (hover: hover) {
    article:hover {
      transform: scale(1.05);
    }
    article:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  /* Icon indicator styles */
  .flip-card-face.front svg {
    opacity: 1;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  @media (hover: hover) {
    .flip-card-face.front svg {
      opacity: 0;
    }
    article:hover .flip-card-face.front svg {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @media (hover: none) {
    /* Mobile: icon always visible */
    .flip-card-face.front svg {
      opacity: 0.6;
      color: #4f46e5;
    }
  }

  /* Timeline styles */
  .timeline-item {
    transition: opacity 0.6s ease;
  }

  .timeline-dot {
    flex-shrink: 0;
  }
</style>