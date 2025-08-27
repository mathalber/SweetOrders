<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>
<template>
  <div class="w-full min-h-screen py-16 px-4 flex flex-col items-center">
    <div class="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
      <div class="flex-1 flex items-center justify-center">
        <Skeleton class="h-[400px] w-full rounded-2xl" />
      </div>
      <div class="flex-1 flex flex-col gap-8 justify-center">
        <Skeleton class="h-10 w-2/3 rounded" />
        <Skeleton class="h-8 w-1/2 rounded" />
        <Skeleton class="h-8 w-1/2 rounded" />
        <Skeleton class="h-8 w-1/2 rounded" />
        <Skeleton class="h-8 w-1/2 rounded" />
      </div>
    </div>
  </div>
</template>
