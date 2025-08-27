<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>
<template>
  <div class="w-full min-h-screen py-16 px-4 flex flex-col items-center">
    <div class="flex flex-col md:flex-row gap-12 w-full max-w-5xl mb-12">
      <div class="flex-1 flex items-center justify-center">
        <Skeleton class="h-64 w-full rounded-2xl" />
      </div>
      <div class="flex-1 flex flex-col gap-6 justify-center">
        <Skeleton class="h-8 w-2/3 rounded" />
        <Skeleton class="h-6 w-full rounded" />
        <Skeleton class="h-6 w-5/6 rounded" />
        <Skeleton class="h-6 w-3/4 rounded" />
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl"
    >
      <div v-for="i in 3" :key="i" class="flex flex-col items-center gap-4">
        <Skeleton class="h-24 w-24 rounded-full" />
        <Skeleton class="h-6 w-2/3 rounded" />
        <Skeleton class="h-4 w-1/2 rounded" />
      </div>
    </div>
  </div>
</template>
