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
import { useRoute } from "vue-router";
const route = useRoute();
const pageNames: Record<string, string> = {
  "/": "Home",
  "/Home": "Home",
};
const currentPage = pageNames[route.path] || "Página";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 items-center gap-2 border-b px-4">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{{ currentPage }}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div class="ml-auto flex items-center">
          <Handbag class="size-6 text-muted-foreground mr-2" />
          <ThemeToggle class="mr-4" />
        </div>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
