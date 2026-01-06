import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  // prefetch: { prefetchAll: true },
  trailingSlash: "always",
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
