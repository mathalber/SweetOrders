<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>
<template>
  <div class="w-full min-h-screen py-8">
    <Skeleton class="h-12 w-full rounded-xl mb-8" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-2 flex flex-col gap-6">
        <div class="flex gap-6 items-center bg-transparent">
          <Skeleton class="h-48 w-48 rounded-xl" />
          <div class="flex flex-col gap-4 w-full">
            <Skeleton class="h-8 w-2/3 rounded" />
            <Skeleton class="h-6 w-1/2 rounded" />
            <Skeleton class="h-6 w-1/3 rounded" />
            <Skeleton class="h-10 w-32 rounded-full" />
          </div>
        </div>
        <Skeleton class="h-32 w-full rounded-lg" />
        <Skeleton class="h-32 w-full rounded-lg" />
        <Skeleton class="h-32 w-full rounded-lg" />
      </div>
      <div class="flex flex-col gap-6">
        <Skeleton class="h-20 w-full rounded-lg" />
        <Skeleton class="h-20 w-full rounded-lg" />
        <Skeleton class="h-12 w-full rounded-lg" />
        <div class="flex justify-end mt-8">
          <Skeleton class="h-14 w-48 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
