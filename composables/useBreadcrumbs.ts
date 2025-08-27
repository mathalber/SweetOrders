import { useRoute } from "vue-router";

export const useBreadcrumbs = () => {
  const route = useRoute();

  const getBreadcrumbs = () => {
    const segments = route.path.split("/").filter(Boolean);

    if (segments.length === 0) {
      return [{ name: "Home", to: "/", isLast: true }];
    }

    if (segments.length === 1 && segments[0]?.toLowerCase() === "home") {
      return [{ name: "Home", to: "/", isLast: true }];
    }

    const breadcrumbs = [{ name: "Home", to: "/", isLast: false }];
    let path = "";
    segments.forEach((segment, index) => {
      path += "/" + segment;
      breadcrumbs.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        to: path,
        isLast: index === segments.length - 1,
      });
    });
    return breadcrumbs;
  };

  const breadcrumbs = computed(() => getBreadcrumbs());

  return {
    breadcrumbs,
  };
};
