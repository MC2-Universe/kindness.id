"use client"

import { cn } from "@/lib/utils"
import {
  Atom,
  Bank,
  Book,
  CirclesThree,
  DiscordLogo,
  File,
  List,
  Palette,
  Scales,
  ScanSmiley,
  Shield,
  UsersThree,
  WebhooksLogo,
} from "@phosphor-icons/react/dist/ssr"
import dynamic from "next/dynamic"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { AnchorHTMLAttributes, ReactNode } from "react"
import GuildLogo from "static/upi.svg"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../ui/Button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover"

const AnimatedLogo = dynamic(() => import("components/explorer/AnimatedLogo"), {
  ssr: false,
  loading: () => <GuildLogo className="size-4 text-banner-foreground" />,
})

export const NavMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button className="rounded-2xl text-banner-foreground" variant="ghost">
        <GuildLogo className="size-4 text-banner-foreground" />
        <span className="font-display text-base">
          <span className="font-bold">Kindness</span> 10<sup>9</sup>
        </span>
        <List weight="bold" className="ml-1" />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      align="start"
      className="mt-1 w-auto min-w-[300px] origin-top-left overflow-hidden p-0"
    >
      <nav className="flex flex-col gap-2 px-3 py-4 sm:flex-row sm:gap-12">
        <NavGroup title="Navigation">
          <NavButton href="/explorer">
            <Atom weight="bold" />
            Explore kindness
          </NavButton>

          <NavButton href="/create-guild">
            <ScanSmiley weight="bold" />
            Create kindness
          </NavButton>

          <NavButton href="https://playmc2.com/kindness-id">
            <CirclesThree weight="bold" />
            Mission
          </NavButton>

          <NavButton href="https://playmc2.com/protocols/kindness">
            <Book weight="bold" />
            Guide
          </NavButton>

          <NavButton href="/privacy-policy">
            <Shield weight="bold" />
            Privacy Policy
          </NavButton>

          <NavButton href="/terms-of-use">
            <File weight="bold" />
            Terms of Use
          </NavButton>
        </NavGroup>

        <NavGroup title="Other">
          <NavButton href="https://discord.gg/jzuKZyvrVs">
            <DiscordLogo weight="bold" />
            Discord
          </NavButton>

          <NavButton href="https://unitekindness.dao/">
            <WebhooksLogo weight="bold" />
            DAO
          </NavButton>

          <NavButton href="https://dao.hypha.earth/kindness">
            <Scales weight="bold" />
            Hypha
          </NavButton>

          <NavButton href="https://app.aragon.org/#/daos/polygon/0xff1ea398c595bb4b0dc7b3cbeda1f2b53715ecd9">
            <Bank weight="bold" />
            Aragon
          </NavButton>

          <NavButton href="https://playmc2.com">
            <UsersThree weight="bold" />
            Team
          </NavButton>

          <NavButton href="#/kindness.id-brand-kit.zip">
            <Palette weight="bold" />
            Brand kit
          </NavButton>
        </NavGroup>
      </nav>

      <div className="flex items-center justify-between bg-card-secondary px-7 py-4 text-foreground text-sm">
        <span>Theme:</span>
        <ThemeToggle />
      </div>
    </PopoverContent>
  </Popover>
)

const NavGroup = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="flex min-w-36 max-w-max flex-col gap-[2px]">
    <span className="my-1 pl-4 font-bold text-muted-foreground text-sm">
      {title}
    </span>
    {children}
  </div>
)

const NavButton = ({ href, children }: { href: string; children: ReactNode }) => {
  const pathname = usePathname()

  const isExternal = href.startsWith("http")
  const wrapperProps = {
    href,
    ...(isExternal
      ? ({
          target: "_blank",
          rel: "noopener",
        } satisfies AnchorHTMLAttributes<HTMLAnchorElement>)
      : ({
          passHref: true,
          legacyBehavior: true,
        } satisfies Partial<LinkProps>)),
  }

  const Wrapper = isExternal ? "a" : Link

  return (
    <Wrapper {...wrapperProps}>
      <Button
        variant={pathname === href ? "solid" : "ghost"}
        className={cn(
          "h-10 w-full justify-start gap-2",
          pathname === href ? "font-semibold" : "font-normal"
        )}
      >
        {children}
      </Button>
    </Wrapper>
  )
}
