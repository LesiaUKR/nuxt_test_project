<script setup>
import { useDateFormat } from '~/composables/useDateFormat';

const route = useRoute();
const { id } = route.params;

const { formatDate } = useDateFormat();

const { data: newsItem, pending, error } = await useFetch(`/api/news/${id}`);

const { title, picture, text, date, fullText } = newsItem.value || {};

useHead({
  title: computed(() => newsItem.value ? `${newsItem.value.title} - Construction News` : 'Article - Construction News'),
  meta: [
    { 
      name: 'description', 
      content: computed(() => newsItem.value ? 
        `${newsItem.value.text.substring(0, 160)}...` : 
        'Construction project details and updates')
    }
  ]
});
</script>


<template>
  <UContainer class="py-8">
    <UPage>
      <div v-if="pending" class="flex justify-center items-center py-12">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary" />
        <span class="ml-3">Loading article...</span>
      </div>
      
      <UAlert v-else-if="error || !newsItem" type="danger" title="Error" description="Article not found or failed to load" class="mb-6">
        <template #action>
          <UButton to="/" label="Back to Home" color="white" />
        </template>
      </UAlert>
      
      <template v-else>
        <UBreadcrumb :links="[
          { label: 'Home', to: '/' },
          { label: title, to: `/news/${id}` }
        ]" class="mb-4" />
        
        <UPageHeader 
          :title="title" 
          class="mb-8"
        >
          <template #description>
            <div class="flex items-center text-sm text-gray-500">
              <UIcon name="i-heroicons-calendar" class="mr-2" />
              <span>{{ formatDate(date) }}</span>
            </div>
          </template>
        </UPageHeader>
        
        <UPageBody>
          <UCard>
            <img 
              :src="picture" 
              :alt="title"
              class="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-6"
            />
            
            <div class="prose dark:prose-invert max-w-none">
              <p class="text-lg">{{text }}</p>
              
              <p>{{ fullText }}</p>
              
              <h2 class="text-xl font-semibold mt-6">Project Details</h2>
              <p>This ambitious project aims to redefine the standards of modern construction with a focus on sustainability, efficiency, and community integration.</p>
              
              <h2 class="text-xl font-semibold mt-6">Timeline</h2>
              <ul class="list-disc pl-6 mt-2">
                <li>Planning phase: Completed</li>
                <li>Foundation work: In progress</li>
                <li>Structural construction: Scheduled to begin next month</li>
                <li>Completion date: Expected by end of 2025</li>
              </ul>
            </div>
          </UCard>
          
          <div class="mt-8 flex justify-between items-center">
            <UButton to="/" icon="i-heroicons-arrow-left" color="gray">
              Back to News
            </UButton>
            <UButton to="/3d-visualization" icon="i-heroicons-cube" color="primary">
              View 3D Models
            </UButton>
          </div>
        </UPageBody>
      </template>
    </UPage>
  </UContainer>
</template>

