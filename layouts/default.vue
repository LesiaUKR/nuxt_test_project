<template>
  <div class="container mx-auto max-w-2xl">
     <header class="flex justify-between items-center p-4 shadow-md mb-6">
    <div>
      <NuxtLink to="/">
        <UIcon name="i-heroicons-building-office-2" class="text-primary-500 text-2xl" />
      </NuxtLink>
    </div>
    <nav >
      <ul class="flex gap-x-20 items-center">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/3d-visualization">3D Visualization</NuxtLink>
        </li>
      </ul>
    </nav>
        <ColorModeButton />
        </header>
    <main>
      <slot />
    </main>
        <footer class="mt-12 py-6 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600">© 2025 Construction news. All rights reserved.</p>
          <div class="mt-4 md:mt-0">
            <UButton
              icon="i-heroicons-envelope"
              variant="ghost"
              size="sm"
              class="mr-2"
            >
              Contacts
            </UButton>
            <UButton
              icon="i-heroicons-information-circle"
              variant="ghost"
              size="sm"
            >
              About us
            </UButton>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import ColorModeButton from '~/components/ColorModeButton.vue'
</script>