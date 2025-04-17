<script setup>
import ColorModeButton from '~/components/ColorModeButton.vue'
</script>

<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center p-4 shadow-md mb-6">
      <div>
        <NuxtLink to="/">
          <UIcon name="i-heroicons-building-office-2" class="text-primary-500 text-2xl" />
        </NuxtLink>
      </div>
      <nav>
        <ul class="flex gap-x-20 items-center">
          <li>
            <ULink to="/" active-class="text-green-500 border-b-2 border-green-500" inactive-class="text-gray-700"
              class="pb-1 transition-colors hover:text-green-500">
              Home
            </ULink>
          </li>
          <li>
            <ULink to="/3d-visualization" active-class="text-green-500 border-b-2 border-green-500"
              inactive-class="text-gray-700" class="pb-1 transition-colors hover:text-green-500">
              3D Visualization
            </ULink>
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
            <UButton icon="i-heroicons-envelope" variant="ghost" size="sm" class="mr-2">
              Contacts
            </UButton>
            <UButton icon="i-heroicons-information-circle" variant="ghost" size="sm">
              About us
            </UButton>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
