<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>
<template>
  <div class="flex flex-col gap-8">
    <Skeleton class="h-[400px] w-full rounded-xl mb-2 mt-2" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      <Skeleton v-for="i in 10" :key="i" class="h-44 w-full rounded-lg" />
    </div>
  </div>
</template>
