"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "yesinline-flex yesitems-center yesjustify-center yesrounded-md yestext-sm yesfont-medium yesring-offset-background yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-2 focus-visible:yesring-ring focus-visible:yesring-offset-2 disabled:yespointer-events-none disabled:yesopacity-50 data-[state=on]:yesbg-docblue data-[state=on]:yestext-accent-foreground",
  {
    variants: {
      variant: {
        default: "yesbg-transparent",
        outline:
          "yesborder yesborder-input yesbg-transparent hover:yesbg-accent hover:yestext-accent-foreground",
      },
      size: {
        default: "yesh-10 yespx-3",
        sm: "yesh-9 yespx-2.5",
        lg: "yesh-11 yespx-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
