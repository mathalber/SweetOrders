<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Handbag } from "lucide-vue-next";
import ThemeToggle from "@/components/ThemeToggle.vue";

const { breadcrumbs } = useBreadcrumbs();
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header
        class="flex h-16 items-center gap-2 border-b px-4 relative z-40 bg-background"
      >
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <template v-for="(crumb, idx) in breadcrumbs" :key="crumb.to">
              <BreadcrumbItem>
                <template v-if="!crumb.isLast">
                  <NuxtLink :to="crumb.to" class="text-primary hover:underline">
                    {{ crumb.name }}
                  </NuxtLink>
                </template>
                <template v-else>
                  <BreadcrumbPage>{{ crumb.name }}</BreadcrumbPage>
                </template>
              </BreadcrumbItem>
              <template v-if="!crumb.isLast">
                <span class="mx-2 text-muted-foreground">&gt;</span>
              </template>
            </template>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="ml-auto flex items-center relative z-50">
          <NuxtLink to="/Sacola">
            <Handbag class="size-6 text-muted-foreground mr-2 cursor-pointer" />
          </NuxtLink>
          <ThemeToggle class="mr-4 relative z-50" />
        </div>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
