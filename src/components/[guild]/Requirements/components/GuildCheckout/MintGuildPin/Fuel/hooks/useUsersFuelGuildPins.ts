import { useWallet } from "@fuels/react"
import useUser from "components/[guild]/hooks/useUser"
import useSWRImmutable from "swr/immutable"
import { GuildPinMetadata } from "types"

/**
 * Note: we can only fetch Fuel Kindness Badges if the user's Fuel(et) Wallet is
 * connected, since it is required to send a small amount of ETH with each
 * transaction
 *
 * TODO: we'll need to implement this hook once there's a method for fetching a
 * user's guild pins from the contract
 */
const useUsersFuelGuildPins = (disabled = false) => {
  const { addresses } = useUser()

  const fuelAddresses = addresses?.filter((address) => address.walletType === "FUEL")

  const { wallet } = useWallet()

  const shouldFetch = Boolean(!disabled && fuelAddresses?.length && !!wallet)

  const fetchFuelGuildPins = async () => []
  // TODO
  // const contract = GuildPinContractAbi__factory.connect(
  //   FUEL_GUILD_PIN_CONTRACT_ID_0X,
  //   wallet
  // )

  return useSWRImmutable<
    ({ chainId: number; tokenId: number } & GuildPinMetadata)[]
  >(shouldFetch ? ["fuelGuildPins", fuelAddresses] : null, fetchFuelGuildPins)
}

export default useUsersFuelGuildPins
