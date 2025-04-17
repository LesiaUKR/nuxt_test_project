<script setup>
import { onMounted, ref } from 'vue';
import { initSpeckleViewer } from '~/composables/speckleViewer';

// URL Speckle
const speckleUrl = 'https://latest.speckle.systems/streams/c43ac05d04/commits/ec724cfbeb'
const rendererContainer = ref(null)

const loading = ref(true);

onMounted(async () => {
  if (process.client && rendererContainer.value) {
    try {
      await initSpeckleViewer(rendererContainer.value, speckleUrl);
      console.log('Model successfully loaded');
    } catch (error) {
      console.error('Error during model loading :', error);
    } finally {
      loading.value = false;
    }
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <UCard class="mb-6">
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold">3D Visualization</h1>
          <UButton to="/" icon="i-heroicons-arrow-left" color="gray">
            Back to Home
          </UButton>
        </div>
      </template>

      <div class="mb-4">
        <p class="text-gray-600">
          Interactive 3D visualization of construction projects using Speckle Viewer.
        </p>
      </div>
    </UCard>

    <!-- Container for 3D Visualization -->
    <UCard class="mb-6">
      <div ref="rendererContainer" class="w-full h-[70vh] min-h-[500px] relative bg-gray-100 rounded-lg">
        <div v-if="loading" class="absolute inset-0 flex justify-center items-center bg-white opacity-75">
          <span class="text-lg text-gray-600">Loading model...</span>
        </div>
      </div>
    </UCard>
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">Model information</h2>
      </template>
      <div class="p-4">
        <p>
          This 3D model demonstrates a modern approach to building design.
          Using Speckle Viewer, you can drag the model to rotate,
          use the mouse wheel to zoom, and move by holding down the
          right mouse button.
        </p>
      </div>
      <template #footer>
        <p class="text-sm text-gray-500">
          Powered by Speckle Viewer
        </p>
      </template>
    </UCard>
  </div>
</template>
