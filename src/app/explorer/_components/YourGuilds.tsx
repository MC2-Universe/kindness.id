"use client"

import { GuildCardSkeleton, GuildCardWithLink } from "@/components/GuildCard"
import { walletSelectorModalAtom } from "@/components/Providers/atoms"
import { useWeb3ConnectionManager } from "@/components/Web3ConnectionManager/hooks/useWeb3ConnectionManager"
import { Anchor } from "@/components/ui/Anchor"
import { Button, buttonVariants } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { useYourGuilds } from "@/hooks/useYourGuilds"
import { useColorMode } from "@chakra-ui/react"
import { Plus, SignIn } from "@phosphor-icons/react/dist/ssr"
import { useSetAtom } from "jotai"
import Image from "next/image"

export const YourGuilds = () => {
  const { isWeb3Connected } = useWeb3ConnectionManager()
  const { data, isLoading } = useYourGuilds()
  const { colorMode } = useColorMode()
  const setIsWalletSelectorModalOpen = useSetAtom(walletSelectorModalAtom)
  const icon =
    colorMode === "light"
      ? "/landing/kindness_badge_light.svg"
      : "/landing/kindness_badge_dark.svg"
  if (!isLoading && !data?.length)
    return (
      <Card className="mt-2 mb-8 flex flex-col items-stretch justify-between gap-8 p-6 font-semibold sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          {isWeb3Connected ? (
            <span>
              You're not a member of any collabs of kindness yet. Explore and join
              some below, or create your own!
            </span>
          ) : (
            <>
              <Image
                src={icon}
                width={32}
                height={32}
                alt="Kindness icon"
                className="size-8 min-w-8"
              />
              <span>Sign in to create and use your Kindness Profile</span>
            </>
          )}
        </div>

        {isWeb3Connected ? (
          <Anchor
            href="/create-guild"
            className={buttonVariants({ className: "hover:no-underline" })}
          >
            <Plus weight="bold" />
            <span>Create kindness</span>
          </Anchor>
        ) : (
          <Button
            onClick={() => setIsWalletSelectorModalOpen(true)}
            colorScheme="primary"
            leftIcon={<SignIn weight="bold" />}
          >
            Sign in
          </Button>
        )}
      </Card>
    )

  return (
    <section className="mt-1 mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {isLoading || !data
        ? Array.from({ length: 6 }, (_, i) => <GuildCardSkeleton key={i} />)
        : data.map((guild) => (
            <GuildCardWithLink guildData={guild} key={guild.id} />
          ))}
    </section>
  )
}
