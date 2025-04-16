<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="toggleTheme"
    />
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
