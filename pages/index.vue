<template>
  <UContainer class="py-8">
    <UPage>
      <UPageHeader 
        title="Construction News" 
        description="Latest updates in construction industry"
        class="mb-8"
      />
      
      <UPageBody>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <UCard 
            v-for="{ id, title, picture, text, date } in news"
            :key="id"
            class="hover:shadow-lg transition-shadow duration-300"
          >
            <template #header>
              <UAvatar 
                :src="picture" 
                :alt="title"
                size="xl"
                class="w-full h-48 object-cover mb-4"
              />
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{title }}
              </h2>
            </template>

            <p class="truncate-text text-gray-600 dark:text-gray-300 mb-4">
              {{text }}
            </p>

            <template #footer>
              <div class="flex items-center justify-between">
                <UBadge color="primary" variant="subtle">
                  {{ formatDate(date) }}
                </UBadge>
                
                <UButton 
                  icon="i-heroicons-arrow-right"
                  color="gray"
                  variant="ghost"
                  label="Read more"
                  :to="`/news/${id}`"
                />
              </div>
            </template>
          </UCard>
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup>
import { useDateFormat } from '~/composables/useDateFormat';

// Ініціалізація функції formatDate
const { formatDate } = useDateFormat();

const { data: news } = await useFetch('/api/news');
</script>


