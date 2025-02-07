import FarcasterImage from "@/../static/socialIcons/farcaster.svg"
import { CopyLink } from "@/components/CopyLink"
import { ProfileAvatar } from "@/components/ProfileAvatar"
import { Anchor } from "@/components/ui/Anchor"
import { Avatar, AvatarFallback } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import {
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import { Separator } from "@/components/ui/Separator"
import { Skeleton } from "@/components/ui/Skeleton"
import { cn } from "@/lib/utils"
import { REFERRER_USER_SEARCH_PARAM_KEY } from "@app/(marketing)/create-profile/(onboarding)/constants"
import { AvatarImage } from "@radix-ui/react-avatar"
import { PropsWithChildren } from "react"
import pluralize from "utils/pluralize"
import {
  useFarcasterProfile,
  useRelevantFarcasterFollowers,
} from "../_hooks/useFarcasterProfile"
import { useProfile } from "../_hooks/useProfile"
import { useReferredUsers } from "../_hooks/useReferredUsers"
import { ProfileOwnerGuard } from "./ProfileOwnerGuard"

export const ProfileSocialCounters = ({ className }: any) => {
  const { data: referredUsers } = useReferredUsers()
  const { data: profile } = useProfile()
  const { data: farcasterProfile } = useFarcasterProfile(profile?.userId)
  const { data: relevantFollowers } = useRelevantFarcasterFollowers(
    farcasterProfile?.fid
  )

  const inviteLink =
    profile &&
    `https://kindness.id/create-profile/prompt-referrer?${REFERRER_USER_SEARCH_PARAM_KEY}=${profile.username}`

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 gap-y-4 sm:flex-nowrap",
        className
      )}
    >
      {referredUsers ? (
        <Dialog>
          <DialogTrigger className="group">
            <SocialCountTile count={referredUsers.length}>
              <div className="underline decoration-dotted underline-offset-4 transition-colors group-hover:text-foreground">
                Guildmates
              </div>
            </SocialCountTile>
          </DialogTrigger>
          <DialogContent scrollBody>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                Guildmates
                <Badge size="sm" className="relative top-0.5 font-sans">
                  {referredUsers.length}
                </Badge>
              </DialogTitle>
              <DialogDescription>
                <ProfileOwnerGuard reverseLogic>
                  Profiles created using this referral
                </ProfileOwnerGuard>

                <ProfileOwnerGuard>
                  {inviteLink && (
                    <>
                      <p className="mt-4 mb-2 text-pretty font-medium">
                        Share this link and earn XP for each user who joins:
                      </p>
                      <CopyLink href={inviteLink} />
                    </>
                  )}
                </ProfileOwnerGuard>
              </DialogDescription>
              <DialogCloseButton />
            </DialogHeader>
            <DialogBody className="border-t bg-card-secondary pt-8" scroll>
              {referredUsers.length ? (
                referredUsers.map((user) => (
                  <div
                    key={user.userId}
                    className="mb-3 flex items-center gap-2 border-border-muted border-b pb-3 last:border-b-0"
                  >
                    <Avatar className="border">
                      <ProfileAvatar
                        username={user.username}
                        profileImageUrl={user.profileImageUrl}
                      />
                    </Avatar>
                    <div className="leading-tight">
                      <div className="max-w-64 truncate">
                        {user.name || user.username}
                      </div>
                      <Anchor
                        href={`/profile/${user.username}`}
                        variant="muted"
                        target="_blank"
                        className="text-sm"
                      >
                        @{user.username}
                      </Anchor>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">
                  This profile has no guildmates to show yet.
                </p>
              )}
            </DialogBody>
          </DialogContent>
        </Dialog>
      ) : (
        <Skeleton className="h-12 w-20" />
      )}
      {farcasterProfile && (
        <>
          <Separator orientation="vertical" className="h-10 md:h-12" />
          <SocialCountTile count={farcasterProfile.follower_count}>
            <FarcasterImage />
            Followers
          </SocialCountTile>

          {!!relevantFollowers && relevantFollowers?.length >= 1 && (
            <>
              <Separator
                orientation="vertical"
                className="h-10 max-sm:hidden md:h-12"
              />
              <RelevantFollowers relevantFollowers={relevantFollowers} />
            </>
          )}
        </>
      )}
    </div>
  )
}

const SocialCountTile = ({
  count,
  children,
}: PropsWithChildren<{ count: number }>) => (
  <div className="flex flex-col items-center leading-tight">
    <div className="font-bold md:text-lg">{count}</div>
    <div className="flex items-center gap-1 text-muted-foreground">{children}</div>
  </div>
)

const RelevantFollowers = ({
  relevantFollowers,
}: {
  relevantFollowers: ReturnType<typeof useRelevantFarcasterFollowers>["data"]
}) => {
  if (!relevantFollowers || !relevantFollowers.length) {
    throw new Error(
      "Relevant followers must have at least one farcaster profile to display"
    )
  }
  const [firstFc, secondFc] = relevantFollowers
  const remainingFollowers =
    relevantFollowers.length - Math.min(2, relevantFollowers.length)

  return (
    <div className="flex items-center gap-2">
      <div className="ml-3 flex">
        {relevantFollowers.slice(0, 3).map(({ pfp_url, fid, username }) => (
          <Anchor
            href={`https://warpcast.com/${username}`}
            target="_blank"
            key={fid}
          >
            <Avatar className="-ml-3 border">
              <AvatarImage
                src={pfp_url}
                alt="avatar"
                className="size-full object-cover"
              />
              <AvatarFallback />
            </Avatar>
          </Anchor>
        ))}
      </div>
      <div
        className={cn("max-w-80 text-balance text-muted-foreground leading-tight", {
          "max-w-64": !secondFc,
        })}
      >
        Followed by{" "}
        <Anchor
          href={`https://warpcast.com/${firstFc.username}`}
          target="_blank"
          className="inline-block max-w-24 truncate align-bottom font-bold"
        >
          {firstFc.display_name}
          {secondFc && <span className="font-normal">,&nbsp;</span>}
        </Anchor>
        {secondFc && (
          <Anchor
            href={`https://warpcast.com/${secondFc.username}`}
            target="_blank"
            className="inline-block max-w-24 truncate align-bottom font-bold"
          >
            {secondFc.display_name}
          </Anchor>
        )}
        {!!remainingFollowers && ` and ${pluralize(remainingFollowers, "other")}`} on
        Farcaster
      </div>
    </div>
  )
}
