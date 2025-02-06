import { Img, Text } from "@chakra-ui/react"
import { RewardDisplay } from "components/[guild]/RoleCard/components/RewardDisplay"
import useGuild from "components/[guild]/hooks/useGuild"
import { env } from "env"
import { GuildAction, useMintGuildPinContext } from "../MintGuildPinContext"

const GuildPinReward = (): JSX.Element => {
  const { pinType, pinImage } = useMintGuildPinContext()
  const { name } = useGuild()

  const guildPinDescription: Record<GuildAction, string> = {
    [GuildAction.JOINED_GUILD]: `Joined ${name} `,
    [GuildAction.IS_OWNER]: `Owner of ${name} `,
    [GuildAction.IS_ADMIN]: `Admin of ${name} `,
  }

  return (
    <RewardDisplay
      icon={
        <Img
          w="full"
          zIndex={1}
          src={`${env.NEXT_PUBLIC_IPFS_GATEWAY}${pinImage}`}
          alt="Universal Badge image"
          borderRadius="full"
          boxSize="6"
        />
      }
      label={
        <>
          {`Universal Badge: `}
          <Text as="span" fontWeight={"semibold"}>
            {guildPinDescription[pinType]}
          </Text>
        </>
      }
    />
  )
}

export default GuildPinReward
