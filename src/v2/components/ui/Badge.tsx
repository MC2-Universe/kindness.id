import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"
import { ElementRef, HTMLAttributes, forwardRef } from "react"

export const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 transition-colors focus:outline-none focus-visible:ring-4 focus:ring-ring font-medium max-w-max gap-1.5",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--badge-bg)/0.32)] dark:bg-[hsl(var(--badge-bg)/0.16)] text-[hsl(var(--badge-color))]",
        outline: "border text-muted-foreground",
      },
      colorScheme: {
        gray: "[--badge-bg:var(--secondary-subtle)] [--badge-color:var(--secondary-subtle-foreground)]",
        blue: "[--badge-bg:var(--info-subtle)] [--badge-color:var(--info-subtle-foreground)]",
        green:
          "[--badge-bg:var(--success-subtle)] [--badge-color:var(--success-subtle-foreground)]",
        orange:
          "[--badge-bg:var(--warning-subtle)] [--badge-color:var(--warning-subtle-foreground)]",
        red: "[--badge-bg:var(--destructive-subtle)] [--badge-color:var(--destructive-subtle-foreground)]",
        gold: "[--badge-bg:var(--gold)] [--badge-color:var(--gold)]",
      },
      size: {
        sm: "text-xs h-5",
        md: "text-sm h-6",
        lg: "text-base h-8",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        colorScheme: "gray",
        className:
          "bg-[hsl(var(--badge-bg)/0.12)] text-[hsl(var(--badge-color)/0.8)]",
      },
    ],
    defaultVariants: {
      variant: "default",
      colorScheme: "gray",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<ElementRef<"div">, BadgeProps>(
  ({ className, variant, colorScheme, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant, colorScheme, size }), className)}
      {...props}
    />
  )
)

export { Badge }
