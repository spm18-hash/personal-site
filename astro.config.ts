import { defineConfig } from "astro/config";

export default defineConfig({
  trailingSlash: "always",
  scopedStyleStrategy: "where",
  build: {
    assets: "_assets",
  },
});
