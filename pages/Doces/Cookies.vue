<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>
<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-center mb-4">
      <Skeleton
        class="animate-pulse bg-gray-200 dark:bg-gray-700 h-12 w-full max-full rounded-full mt-2"
      />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Skeleton
        v-for="i in 12"
        :key="i"
        class="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-56 w-full"
      />
    </div>
  </div>
</template>