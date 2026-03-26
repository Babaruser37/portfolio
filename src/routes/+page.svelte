<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import RotatingBackground from '$lib/components/RotatingBackground.svelte';
</script>

<RotatingBackground />

<Navbar />

<main class="relative z-10 font-sans pt-28"> <section id="hero" class="h-screen max-w-6xl mx-auto px-6">
    <h1 class="text-7xl font-bold pt-20">Hi, I'm Christian Garcia Flores...</h1>
    </section>
  
  <section id="about" class="h-screen border-t border-gray-100">
    <div class="max-w-6xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-semibold">About Me</h2>
    </div>
  </section>
</main>