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
      url: "#",
      isActive: true,
      icon: CakeSlice,
      items: [
        { title: "Cookies", url: "#" },
        { title: "Bolos", url: "#" },
        { title: "Docinhos", url: "#" },
      ],
    },
    {
      title: "Bebidas",
      url: "#",
      isActive: true,
      icon: GlassWater,
      items: [
        { title: "Refrigerantes", url: "#" },
        { title: "Sucos", url: "#" },
        { title: "Quentes", url: "#" },
      ],
    },
    {
      title: "Sobremesas",
      url: "#",
      icon: IceCreamBowl,
      items: [
        { title: "Sorvetes", url: "#" },
        { title: "Tortas", url: "#" },
      ],
    },
  ],
  informações: [
    { name: "Localizão", url: "#", icon: Pin },
    { name: "Contato", url: "#", icon: Phone },
    { name: "Sobre nós", url: "#", icon: Info },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <div>
      <SidebarHeader>
        <span class="flex items-center gap-2 w-full h-full p-2">
          <component :is="data.title.icon" class="size-5 text-primary" />
          {{ data.title.name }}
        </span>
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
