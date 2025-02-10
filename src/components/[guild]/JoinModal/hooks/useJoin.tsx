import { ToastAction } from "@/components/ui/Toast"
import { useToast } from "@/components/ui/hooks/useToast"
import { JoinJob } from "@guildxyz/types"
import { CircleWavyCheck } from "@phosphor-icons/react/dist/ssr"
import { GUILD_PIN_MAINTENANCE } from "components/[guild]/Requirements/components/GuildCheckout/MintGuildPin/constants"
import { useMintGuildPinContext } from "components/[guild]/Requirements/components/GuildCheckout/MintGuildPinContext"
import useGuild from "components/[guild]/hooks/useGuild"
import useUser from "components/[guild]/hooks/useUser"
import { UseSubmitOptions } from "hooks/useSubmit/types"
import { useToastWithShareButtons } from "hooks/useToastWithShareButtons"
import { useRouter } from "next/router"
import { useState } from "react"
import { useMembershipUpdate } from "./useMembershipUpdate"

const useJoin = ({ onSuccess, onError }: UseSubmitOptions<JoinJob>) => {
  const guild = useGuild()
  const user = useUser()
  const toastWithShareButtons = useToastWithShareButtons()
  const { toast } = useToast()
  const [isNoAccess, setIsNoAccess] = useState(false)

  const mintGuildPinContext = useMintGuildPinContext()
  // Destructuring it separately, since we don't have a MintGuildPinContext on the POAP minting page
  const { onOpen } = mintGuildPinContext ?? {}
  const { pathname } = useRouter()

  const { triggerMembershipUpdate, joinProgress, isLoading, reset } =
    useMembershipUpdate({
      onSuccess: (response) => {
        if (
          response?.roleAccesses?.length > 0 &&
          response.roleAccesses.every((role) => !role.access)
        ) {
          setIsNoAccess(true)
          return
        }

        if (
          pathname === "/[guild]" &&
          guild.featureFlags.includes("GUILD_CREDENTIAL") &&
          guild.guildPin?.isActive &&
          !GUILD_PIN_MAINTENANCE
        ) {
          toast({
            variant: "success",

            title: "Successfully joined collab",
            description: "Let others know as well by minting it onchain",
            action: (
              <ToastAction altText="Try again" onClick={onOpen}>
                <CircleWavyCheck weight="fill" />
                <span> Mint Kindness Badge</span>
              </ToastAction>
            ),
          })
        } else {
          toastWithShareButtons({
            title: "Successfully joined kindness collab",
            shareText: `Just joined the ${guild.name} collab of kindness. Continuing my effort to explore all corners of kindness!
      kindness.id/${guild.urlName}`,
          })
        }

        // mutate user in case they connected new platforms during the join flow
        user?.mutate?.()

        onSuccess?.(response)
      },
      onError,
      keepPreviousData: true,
    })

  return {
    onSubmit: (data) => {
      setIsNoAccess(false)
      triggerMembershipUpdate(data)
    },
    joinProgress: (isLoading || isNoAccess) && joinProgress,
    isLoading,
    reset,
  }
}

export { useJoin }
