import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import Card, { useCardBg } from "components/common/Card"
import useMembership from "components/explorer/hooks/useMembership"
import Image from "next/image"
import ClaimTokenButton from "rewards/Token/ClaimTokenButton"
import {
  TokenRewardProvider,
  useTokenRewardContext,
} from "rewards/Token/TokenRewardContext"
import { useClaimableTokens } from "rewards/Token/hooks/useCalculateToken"
import useRolePlatformsOfReward from "rewards/Token/hooks/useRolePlatformsOfReward"
import { GuildPlatform } from "types"
import { useTokenRewards } from "../AccessHub/hooks/useTokenRewards"
import AvailabilityTags from "../RolePlatforms/components/PlatformCard/components/AvailabilityTags"
import { RolePlatformProvider } from "../RolePlatforms/components/RolePlatformProvider"
import useGuild from "../hooks/useGuild"
import LeaderboardAirdropFallbackCard from "./LeaderboardAirdropFallbackCard"

const LeaderboardAirdropCard = () => {
  const { token, guildPlatform } = useTokenRewardContext()
  const modalBg = useCardBg()
  const bgFile = useColorModeValue("kindness_bg_light.svg", "kindness_bg.svg")
  const gradientColor = useColorModeValue(
    "var(--chakra-colors-gold-100)",
    `var(--chakra-colors-gold-800)`
  )
  const headingColor = useColorModeValue("var(--chakra-colors-gold-500)", "default")
  const claimableAmount = useClaimableTokens(guildPlatform)

  const { roles } = useGuild()
  const { roleIds } = useMembership()
  const rolePlatforms = useRolePlatformsOfReward(guildPlatform.id)
  const rolePlatformIds = rolePlatforms
    .filter((rp) => roleIds?.includes(rp.roleId) || false)
    .map((rp) => rp.id)

  if (claimableAmount <= 0) return null

  return (
    <Card
      border={"2px solid transparent"}
      height={100}
      position={"relative"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      background={`linear-gradient(${modalBg}, ${modalBg}) padding-box, linear-gradient(to bottom, var(--chakra-colors-gold-400), ${modalBg}) border-box`}
      _before={{
        content: { md: '""' },
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: `linear-gradient(to top right, ${modalBg} 30%, transparent), url('/landing/${bgFile}')`,
        bgSize: "400px",
        bgRepeat: "no-repeat",
        bgPosition: "top 7px right 7px",
        opacity: "0.07",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        bg: `url('/img/confetti_overlay.png'), linear-gradient(to right, ${gradientColor}, transparent)`,
        bgSize: "250px",
        bgRepeat: "no-repeat",
        bgPosition: { base: "top 0px left -140px", sm: "top 0px left -90px" },
        opacity: "1",
        zIndex: "0",
      }}
    >
      <HStack
        spacing={1}
        pl={{ base: "85px", sm: "120px", md: "130px" }}
        pr={6}
        alignItems={"center"}
        w="full"
        zIndex={1}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          left={{ base: "-28px", sm: "0px" }}
          top={{ base: "-25px", sm: "-16px" }}
          zIndex={-1}
        >
          <Image
            priority
            src={"/img/cup.png"}
            alt="Cup"
            width={150}
            height={100}
            draggable={false}
            objectFit="cover"
            style={{ objectPosition: "-30px 0px" }}
          />
        </Box>
        <Stack spacing={0} overflow={"hidden"} mr={"auto"}>
          <Text
            colorScheme={"gray"}
            fontSize={{ base: "sm" }}
            fontWeight={"semibold"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
          >
            You're eligible to claim
          </Text>
          <Flex flexDir={"row"} alignItems={"center"} gap={4}>
            <Heading
              fontSize={{ base: "large", sm: "x-large" }}
              fontFamily="display"
              mt={0}
              mb={"4px"}
              color={headingColor}
            >
              {claimableAmount} {token.data.symbol}
            </Heading>
            <HStack gap={1} display={{ lg: "inherit", base: "none" }}>
              <AvailabilityTags
                rolePlatform={roles
                  .flatMap((role) => role.rolePlatforms)
                  .find((rp) => rp.id === rolePlatformIds[0])}
              />
            </HStack>
          </Flex>
        </Stack>

        <RolePlatformProvider
          rolePlatform={{
            ...rolePlatforms[0],
            guildPlatform,
          }}
        >
          <ClaimTokenButton
            size={{ base: "sm", sm: "md" }}
            w="auto"
            flexShrink={0}
            rolePlatform={rolePlatforms[0]}
          />
        </RolePlatformProvider>
      </HStack>
    </Card>
  )
}

const LeaderboardAirdropCardWrapper = ({
  guildPlatform,
}: {
  guildPlatform: GuildPlatform
}) => {
  const accessedTokenRewards = useTokenRewards(true)
  const isAccessed = accessedTokenRewards.find((gp) => gp.id === guildPlatform.id)

  if (!isAccessed)
    return <LeaderboardAirdropFallbackCard guildPlatform={guildPlatform} />

  return (
    <TokenRewardProvider guildPlatform={guildPlatform}>
      <LeaderboardAirdropCard />
    </TokenRewardProvider>
  )
}

export { LeaderboardAirdropCardWrapper as LeaderboardAirdropCard }
