import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guild.xyz",
    short_name: "Guild.xyz",
    description:
      "Automated membership management for the platforms your community already uses.",
    theme_color: "#fff",
    background_color: "#6062eb",
    display: "standalone",
    start_url: "/",
    screenshots: [
      {
        src: "banner.svg",
        type: "wide",
        sizes: "1791x565",
      },
    ],
    icons: [
      {
        src: `icon-logo-mc2-crown.svg`,
        sizes: `64x64`,
        type: "image/svg",
        // @ts-ignore: "maskable any" is not typed out as an option
        purpose: "maskable any",
      },
      {
        src: `icon-logo-mc2-crown.png`,
        sizes: `144x144`,
        type: "image/png",
        // @ts-ignore: "maskable any" is not typed out as an option
        purpose: "maskable any",
      },
      {
        src: `icon-logo-mc2-crown.png`,
        sizes: `64x64`,
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
