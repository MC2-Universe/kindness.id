import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // Guild APIs
    GUILD_API_KEY: z.string(),
    BALANCY_TOKEN: z.string(),

    // Alchemy
    MAINNET_ALCHEMY_KEY: z.string(),
    POLYGON_ALCHEMY_KEY: z.string(),
    SEPOLIA_ALCHEMY_KEY: z.string(),
    OPTIMISM_ALCHEMY_KEY: z.string(),
    BASE_ALCHEMY_KEY: z.string(),
    ARBITRUM_ALCHEMY_KEY: z.string(),
    FRONTEND_ALCHEMY_KEY: z.string(),

    // IPFS
    PINATA_ADMIN_JWT: z.string(),
    PINATA_ADMIN_KEY: z.string(),
    PINATA_ADMIN_SECRET: z.string(),

    // Third-party
    NOOX_KEY: z.string(),
    OPENSEA_API_KEY: z.string(),
    SOUND_API_KEY: z.string(),
    ZEROX_API_KEY: z.string(),
    NEYNAR_API_KEY: z.string(),
  },
  client: {
    // Guild APIs
    NEXT_PUBLIC_API: z.string(),
    NEXT_PUBLIC_BALANCY_API: z.string(),
    NEXT_PUBLIC_URL: z.string(),

    // Captcha
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string(),

    // Analytics & monitoring
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_BUGSNAG_KEY: z.string(),

    // IPFS
    NEXT_PUBLIC_IPFS_GATEWAY: z.string(),
    NEXT_PUBLIC_PINATA_API: z.string(),

    // Third-party
    NEXT_PUBLIC_DISCORD_CLIENT_ID: z.string(),
    NEXT_PUBLIC_TG_BOT_USERNAME: z.string(),
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string(),
    NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL: z.string(),
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string(),

    // Internals
    NEXT_PUBLIC_FIXED_EXPLORE: z.string(),
    NEXT_PUBLIC_FIXED_ID: z.string(),
    NEXT_PUBLIC_SEARCH_ID: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    NEXT_PUBLIC_URL:
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_URL
        : "http://127.0.0.1:3000",
    NEXT_PUBLIC_BALANCY_API: process.env.NEXT_PUBLIC_BALANCY_API,

    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,

    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_BUGSNAG_KEY: process.env.NEXT_PUBLIC_BUGSNAG_KEY,

    NEXT_PUBLIC_IPFS_GATEWAY: process.env.NEXT_PUBLIC_IPFS_GATEWAY,
    NEXT_PUBLIC_PINATA_API: process.env.NEXT_PUBLIC_PINATA_API,

    NEXT_PUBLIC_DISCORD_CLIENT_ID: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    NEXT_PUBLIC_TG_BOT_USERNAME: process.env.NEXT_PUBLIC_TG_BOT_USERNAME,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL:
      process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    NEXT_PUBLIC_FIXED_EXPLORE: process.env.NEXT_PUBLIC_FIXED_EXPLORE,
    NEXT_PUBLIC_FIXED_ID: process.env.NEXT_PUBLIC_FIXED_ID,
    NEXT_PUBLIC_SEARCH_ID: process.env.NEXT_PUBLIC_SEARCH_ID,

    GUILD_API_KEY: process.env.GUILD_API_KEY,
    BALANCY_TOKEN: process.env.BALANCY_TOKEN,

    MAINNET_ALCHEMY_KEY: process.env.MAINNET_ALCHEMY_KEY,
    POLYGON_ALCHEMY_KEY: process.env.POLYGON_ALCHEMY_KEY,
    SEPOLIA_ALCHEMY_KEY: process.env.SEPOLIA_ALCHEMY_KEY,
    OPTIMISM_ALCHEMY_KEY: process.env.OPTIMISM_ALCHEMY_KEY,
    BASE_ALCHEMY_KEY: process.env.BASE_ALCHEMY_KEY,
    ARBITRUM_ALCHEMY_KEY: process.env.ARBITRUM_ALCHEMY_KEY,
    FRONTEND_ALCHEMY_KEY: process.env.FRONTEND_ALCHEMY_KEY,

    PINATA_ADMIN_JWT: process.env.PINATA_ADMIN_JWT,
    PINATA_ADMIN_KEY: process.env.PINATA_ADMIN_KEY,
    PINATA_ADMIN_SECRET: process.env.PINATA_ADMIN_SECRET,

    NOOX_KEY: process.env.NOOX_KEY,
    OPENSEA_API_KEY: process.env.OPENSEA_API_KEY,
    SOUND_API_KEY: process.env.SOUND_API_KEY,
    ZEROX_API_KEY: process.env.ZEROX_API_KEY,
    NEYNAR_API_KEY: process.env.NEYNAR_API_KEY,
  },
})
