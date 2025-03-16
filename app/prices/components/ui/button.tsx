import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold transition-colors retro-btn border-2 border-black",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        secondary: "bg-white text-black",
        outline: "bg-transparent border-2 border-black text-black",
        destructive: "bg-red-500 text-white border-2 border-black",
        link: "underline-offset-4 hover:underline text-black bg-transparent border-0",
      },
      size: {
        default: "px-8 py-3", 
        sm: "px-4 py-2",
        lg: "px-10 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }