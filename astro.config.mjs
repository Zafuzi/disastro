import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    root: "src",
    ignore: ["ios", "android", "dist"],
    output: "server"
});
