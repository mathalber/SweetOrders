<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>
<template>
  <div class="w-full min-h-screen py-16 px-4 flex flex-col items-center">
    <div class="flex flex-col gap-8 mb-12 w-full max-w-3xl">
      <Skeleton class="h-8 w-2/3 mx-auto rounded" />
      <Skeleton class="h-6 w-1/2 mx-auto rounded" />
    </div>
    <div class="flex flex-col gap-6 mb-12 w-full max-w-3xl">
      <Skeleton class="h-16 w-full rounded" />
      <Skeleton class="h-16 w-full rounded" />
      <Skeleton class="h-48 w-full rounded" />
      <Skeleton class="h-16 w-56 rounded-full mx-auto" />
    </div>
    <div class="flex flex-col gap-6 items-center w-full max-w-3xl">
      <Skeleton class="h-8 w-2/3 rounded" />
      <Skeleton class="h-8 w-2/3 rounded" />
    </div>
  </div>
</template>
