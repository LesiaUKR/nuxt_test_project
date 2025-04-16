<template>
  <div class="container mx-auto max-w-2xl">
    <div>
      <NuxtLink to="/" class="text-xl font-semibold">LOGO</NuxtLink>
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/3d-visualization">3D Visualization</NuxtLink>
        </li>
      </ul>
    </nav>
        <ColorModeButton />
    <slot />
  </div>
</template>

<script setup>
import ColorModeButton from '~/components/ColorModeButton.vue'
</script>