import { writable } from "svelte/store";

export const count = writable(0);
export const dataRoutes = writable([
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Blog",
        path: "/blog",
    },
]);