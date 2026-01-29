import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  trailingSlash: "always",
  scopedStyleStrategy: "where",
  build: {
    assets: "_custom",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
        styles: ["normal"],
        weights: [400, 600],
      },
    ],
  },
});
