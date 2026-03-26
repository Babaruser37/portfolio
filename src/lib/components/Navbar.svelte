<script lang="ts">
  import { Download } from 'lucide-svelte';

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50  
            border-b border-white/20 shadow-sm">
  
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    
    <div class="text-gray-900 text-xl font-semibold tracking-tight">
      Christian Garcia Flores
    </div>

    <div class="hidden md:flex items-center space-x-10">
      {#each navItems as item}
        <a 
          href={item.href} 
          class="text-gray-600 hover:text-black text-sm font-medium transition-all"
        >
          {item.name}
        </a>
      {/each}
    </div>

    <button class="flex items-center gap-2 px-5 py-2 
                   bg-[#006847]/80 hover:bg-[#006847] 
                   text-gray-900 rounded-full font-medium text-sm 
                   transition-all border border-pink-200/50">
      <Download class="w-4 h-4" />
      Resume
    </button>
    
  </div>
</nav>