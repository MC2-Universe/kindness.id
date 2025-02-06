import { ButtonProps, IconButton, Tooltip } from "@chakra-ui/react"
import { Flag } from "@phosphor-icons/react"
import Button from "components/common/Button"
import useGuild from "./hooks/useGuild"

type Props = {
  layout?: "FULL" | "ICON"
} & ButtonProps

const label = "Report guild"
const className = "report-guild-btn"

const ReportGuildButton = ({
  layout = "FULL",
  ...buttonProps
}: Props): JSX.Element => {
  const { id, name } = useGuild()

  const baseButtonProps = {
    className,
    size: "sm",
    variant: "ghost",
  }

  return layout === "FULL" ? (
    <Button {...baseButtonProps} leftIcon={<Flag />} {...buttonProps}>
      {label}
    </Button>
  ) : (
    <Tooltip label={label} placement="top" hasArrow>
      <IconButton
        {...baseButtonProps}
        icon={<Flag />}
        aria-label={label}
        boxSize={8}
        rounded="full"
        minW="none"
        {...buttonProps}
      />
    </Tooltip>
  )
}

export default ReportGuildButton
