import {
  Icon,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react"
import { ArrowSquareOut, Question } from "@phosphor-icons/react"

const FeePopover = () => (
  <Popover placement="top" trigger="hover">
    <PopoverTrigger>
      <Icon as={Question} color="gray" />
    </PopoverTrigger>
    <PopoverContent w="max-content">
      <PopoverArrow />
      <PopoverBody fontSize="sm">
        {`Learn more about `}
        <Link
          isExternal
          href="https://help.kindness.id/en/articles/8193498-guild-base-fee"
        >
          Guild base fee <Icon as={ArrowSquareOut} ml={1} />
        </Link>
      </PopoverBody>
    </PopoverContent>
  </Popover>
)

export default FeePopover
