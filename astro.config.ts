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
        fallbacks: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        styles: ["normal"],
        weights: [400, 600],
      },
    ],
  },
});
