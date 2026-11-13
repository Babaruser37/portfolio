<script lang="ts">
	let mobileMenuOpen = $state(false);

	const navItems = [
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Education', href: '#education' }
	];
</script>

<nav
	class="sticky top-0 right-0 left-0 z-50 border-b border-white/20 bg-white/70 font-sans shadow-sm backdrop-blur-md md:fixed"
>
	<div class="flex w-full items-center justify-between gap-2 px-4 py-3 sm:px-6 sm:py-4">
		<a
			href="#top"
			class="shrink-0 cursor-pointer text-sm font-semibold tracking-tight text-gray-900 transition-opacity hover:opacity-70 sm:text-base lg:text-lg"
		>
			Christian Garcia Flores
		</a>

		<div class="hidden shrink-0 items-center space-x-4 md:flex lg:space-x-6">
			{#each navItems as item (item)}
				<a
					href={item.href}
					class="text-xs font-medium whitespace-nowrap text-gray-600 transition-all hover:text-black sm:text-sm"
				>
					{item.name}
				</a>
			{/each}
		</div>

		<div class="flex shrink-0 items-center gap-1 sm:gap-2">
			<button
				type="button"
				class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 md:hidden"
				aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={mobileMenuOpen}
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></svg
					>
				{/if}
			</button>

			<a
				href="/ChristianGarciaFloresResume.pdf"
				download="ChristianGarciaFloresResume.pdf"
				class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-medium text-white transition-all hover:bg-emerald-700 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
				aria-label="Download resume"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
						points="7 10 12 15 17 10"
					/><line x1="12" x2="12" y1="15" y2="3" /></svg
				>
				<span class="hidden sm:inline">Resume</span>
			</a>

			<a
				href="https://github.com/Babaruser37"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white shadow-sm transition-all hover:bg-black sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/><path d="M9 18c-4.51 2-4.51-2-7-2" /></svg
				>
				<span class="hidden sm:inline">GitHub</span>
			</a>

			<a
				href="https://www.linkedin.com/in/christian-garcia-flores-54a020267/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-8 w-8 items-center justify-center rounded-full border border-[#0077B5]/20 bg-[#0077B5]/10 text-xs font-medium text-[#0077B5] transition-all hover:bg-[#0077B5]/20 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path
						d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
					/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
				>
				<span class="hidden sm:inline">LinkedIn</span>
			</a>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="px-4 pb-4 md:hidden">
			<div class="flex flex-col gap-1 rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-sm">
				{#each navItems as item (item)}
					<a
						href={item.href}
						class="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
						onclick={() => (mobileMenuOpen = false)}
					>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
