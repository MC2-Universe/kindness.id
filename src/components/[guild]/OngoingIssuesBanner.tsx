import { Button } from "@chakra-ui/react"
import { ArrowSquareOut } from "@phosphor-icons/react"
import InfoBanner from "components/_app/InfoBanner"

const OngoingIssuesBanner = () => (
  <InfoBanner>
    We are aware of the ongoing difficulties which may impact your experience. Your
    patience is appreciated as we resolve this matter. If you need further
    assistance, you can{" "}
    <Button
      variant="link"
      size="sm"
      rightIcon={<ArrowSquareOut />}
      iconSpacing={0.5}
    >
      create a ticket
    </Button>
    . Thank you for your understanding.
  </InfoBanner>
)

export default OngoingIssuesBanner
