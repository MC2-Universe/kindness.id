import { accountModalAtom } from "@/components/Providers/atoms"
import { Badge, BadgeProps } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/Separator"
import { cn } from "@/lib/utils"
import {
  CaretDown,
  Check,
  CircleNotch,
  LockSimple,
  Warning,
  X,
} from "@phosphor-icons/react/dist/ssr"
import { useOpenJoinModal } from "components/[guild]/JoinModal/JoinModalProvider"
import { RecheckAccessesButton } from "components/[guild]/RecheckAccessesButton"
import useGuild from "components/[guild]/hooks/useGuild"
import useRequirements from "components/[guild]/hooks/useRequirements"
import useMembership, {
  useRoleMembership,
} from "components/explorer/hooks/useMembership"
import { useSetAtom } from "jotai"
import { ReactNode } from "react"

type Props = {
  roleId: number
  isOpen: boolean
  onToggle: () => void
}

const AccessIndicator = ({ roleId, isOpen, onToggle }: Props): JSX.Element => {
  const { roles } = useGuild()
  const role = roles?.find((r) => r.id === roleId)
  const { error, isValidating, reqAccesses, hasRoleAccess } =
    useRoleMembership(roleId)

  const accessedRequirementCount = reqAccesses?.filter((r) => r.access)?.length

  const setIsAccountModalOpen = useSetAtom(accountModalAtom)
  const { isMember } = useMembership()
  const openJoinModal = useOpenJoinModal()

  const { data: requirements } = useRequirements(roleId)
  const requirementsWithErrors =
    requirements?.filter((req) => {
      const relevantReq = reqAccesses?.find((r) => r.requirementId === req.id)
      return !relevantReq?.access && !!relevantReq?.errorMsg
    }) ?? []

  if (!isMember)
    return (
      <Button
        leftIcon={<LockSimple weight="bold" />}
        size="sm"
        onClick={openJoinModal}
        className={cn(ACCESS_INDICATOR_CLASSNAME, "w-full sm:max-w-max")}
      >
        Join collab to check access
      </Button>
    )

  if (hasRoleAccess)
    return (
      <div className="flex shrink-0">
        <AccessIndicatorUI
          colorScheme="green"
          label="You have access"
          icon={<Check weight="bold" />}
          className="flex-grow rounded-br-none sm:rounded-tr-none"
        />
        <Separator
          orientation="vertical"
          className="h-8 bg-success-subtle-foreground/25 dark:bg-white/25"
        />
        <Button
          size="sm"
          rightIcon={
            <CaretDown
              weight="bold"
              className={cn("transform duration-300", {
                "-rotate-180": isOpen,
              })}
            />
          }
          onClick={onToggle}
          className={cn(
            ACCESS_INDICATOR_CLASSNAME,
            "!rounded-tl-none rounded-br-2xl rounded-bl-none sm:rounded-br-lg"
          )}
        >
          <div
            className={cn(
              "-mr-1.5 w-0 overflow-hidden text-left opacity-0 transition-all duration-200",
              {
                "mr-1.5 w-[5.25rem] opacity-100": !isOpen,
              }
            )}
          >
            View details
          </div>
        </Button>
      </div>
    )

  if (isValidating)
    return <AccessIndicatorUI colorScheme="gray" label="Checking access" isLoading />

  if (
    reqAccesses?.some(
      (err) =>
        err.errorType === "PLATFORM_CONNECT_INVALID" ||
        err.errorType === "PLATFORM_NOT_CONNECTED"
    )
  )
    return (
      <Button
        colorScheme="info"
        variant="subtle"
        size="sm"
        leftIcon={<LockSimple weight="bold" />}
        onClick={() => setIsAccountModalOpen(true)}
        className={cn(ACCESS_INDICATOR_CLASSNAME, "w-full sm:max-w-max")}
      >
        Reconnect needed to check access
      </Button>
    )

  if (requirementsWithErrors?.length > 0 || error)
    return (
      <div className="flex shrink-0">
        <AccessIndicatorUI
          colorScheme="orange"
          label="Couldn't check access"
          icon={<Warning weight="bold" />}
          className="flex-grow rounded-br-none sm:rounded-tr-none"
        />
        <Separator orientation="vertical" className="h-8 dark:bg-white/25" />
        <RecheckAccessesButton
          roleId={roleId}
          size="sm"
          // Card's `overflow: clip` isn't enough in Safari, that's why we added rounded-br
          className="w-auto rounded-l-none rounded-tr-none rounded-br-2xl px-5 sm:rounded-tr-lg sm:rounded-br-lg sm:px-3"
        />
      </div>
    )

  return (
    <div className="flex shrink-0">
      <AccessIndicatorUI
        colorScheme="gray"
        label={`No access${
          role?.logic === "ANY_OF" && typeof accessedRequirementCount === "number"
            ? ` (${accessedRequirementCount}/${role?.anyOfNum})`
            : ""
        }`}
        icon={<X weight="bold" />}
        className="flex-grow rounded-br-none sm:rounded-tr-none"
      />
      <Separator orientation="vertical" className="h-8 dark:bg-white/25" />
      <RecheckAccessesButton
        roleId={roleId}
        size="sm"
        // Card's `overflow: clip` isn't enough in Safari, that's why we added rounded-br
        className="w-auto rounded-l-none rounded-tr-none rounded-br-2xl px-5 sm:rounded-tr-lg sm:rounded-br-lg sm:px-3"
      />
    </div>
  )
}

const ACCESS_INDICATOR_CLASSNAME =
  "max-w-none flex flex-row-reverse sm:flex-row shrink-0 justify-between rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none px-5 py-2 sm:justify-start sm:px-3 sm:py-0 sm:rounded-tl-lg sm:rounded-tr-lg text-sm"

const AccessIndicatorUI = ({
  isLoading,
  colorScheme,
  icon,
  label,
  className,
}: {
  isLoading?: boolean
  colorScheme: BadgeProps["colorScheme"]
  icon?: ReactNode
  label: string
  className?: string
}): JSX.Element => (
  <Badge
    size="lg"
    colorScheme={colorScheme}
    className={cn(ACCESS_INDICATOR_CLASSNAME, "h-8", className)}
  >
    {isLoading ? (
      <CircleNotch weight="bold" className="animate-spin duration-500" />
    ) : (
      icon
    )}
    <span>{label}</span>
  </Badge>
)

export { AccessIndicator }
