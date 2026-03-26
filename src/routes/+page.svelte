<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';
  import ChristianGarciaFlores from '$lib/assets/ChristianGarciaFlores.jpg'
</script>

<RotatingBackground />

<Navbar />

<main class="relative z-10 font-sans"> 
    <section id="hero" class="h-screen max-w-6xl mx-auto px-6 flex items-center justify-between gap-12">
        <div>
            <h1 class="text-7xl font-bold pt-20">Hi, I'm Christian Garcia Flores <br>Software Engineer</h1>
            <p class="text-l font-medium pt-10">
                I craft intiutire and delightfult digital experiences that solve real user problems. With 5+ years of experiences.
            </p>
        </div>
        <div>
            <img src={ChristianGarciaFlores} alt="Christian Garcia Flores" class="rounded-2xl shadow-2xl max-w-sm">
        </div>
    </section>
  
  <section id="about" class="h-screen border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-semibold">About Me</h2>
    </div>
  </section>
</main>