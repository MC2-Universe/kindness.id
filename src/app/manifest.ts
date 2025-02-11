import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kindness.id",
    short_name: "Kindness.id",
    description:
      "Automated membership management for the platforms your community already uses.",
    theme_color: "#fff",
    background_color: "#6062eb",
    display: "standalone",
    start_url: "/",
    screenshots: [
      {
        src: "kindness_banner.svg",
        type: "wide",
        sizes: "1791x565",
      },
    ],
    icons: [
      {
        src: `upi.svg`,
        sizes: `64x64`,
        type: "image/svg",
        // @ts-ignore: "maskable any" is not typed out as an option
        purpose: "maskable any",
      },
      {
        src: `upi.png`,
        sizes: `144x144`,
        type: "image/png",
        // @ts-ignore: "maskable any" is not typed out as an option
        purpose: "maskable any",
      },
      {
        src: `upi.png`,
        sizes: `64x64`,
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
