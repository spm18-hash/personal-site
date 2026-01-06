import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  scopedStyleStrategy: "where",
  build: {
    assets: "_custom",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Google Sans Flex",
        cssVariable: "--font-google",
      },
    ],
  },
});
