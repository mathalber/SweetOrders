<script setup lang="ts">
import { NavMain, NavProjects, NavUser } from "~/components/Navebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Cake,
  Info,
  Pin,
  Phone,
  CakeSlice,
  GlassWater,
  IceCreamBowl,
} from "lucide-vue-next";

const props = withDefaults(defineProps(), {
  collapsible: "icon",
});

const data = {
  title: {
    name: "Sweet Orders",
    icon: Cake,
  },
  user: {
    name: "Matheus Alberto",
    email: "mathalber@outlook.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Doces",
      url: "/Doces",
      isActive: true,
      icon: CakeSlice,
      items: [
        { title: "Cookies", url: "/Doces/Cookies" },
        { title: "Bolos", url: "/Doces/Bolos" },
        { title: "Docinhos", url: "/Doces/Docinhos" },
      ],
    },
    {
      title: "Bebidas",
      url: "/Bebidas",
      isActive: true,
      icon: GlassWater,
      items: [
        { title: "Refrigerantes", url: "/Bebidas/Refrigerantes" },
        { title: "Sucos", url: "/Bebidas/Sucos" },
        { title: "Quentes", url: "/Bebidas/Quentes" },
      ],
    },
    {
      title: "Sobremesas",
      url: "/Sobremesas",
      icon: IceCreamBowl,
      isActive: true,
      items: [
        { title: "Sorvetes", url: "/Sobremesas/Sorvetes" },
        { title: "Tortas", url: "/Sobremesas/Tortas" },
      ],
    },
  ],
  informações: [
    { name: "Localizacão", url: "/Informacoes/Localizacao", icon: Pin },
    { name: "Contato", url: "/Informacoes/Contato", icon: Phone },
    { name: "Sobre nós", url: "/Informacoes/SobreNos", icon: Info },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <div>
      <SidebarHeader>
        <NuxtLink
          to="/"
          class="flex items-center gap-2 w-full h-full p-2 hover:underline"
        >
          <component :is="data.title.icon" class="size-5 text-primary" />
          {{ data.title.name }}
        </NuxtLink>
      </SidebarHeader>
    </div>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.informações" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
