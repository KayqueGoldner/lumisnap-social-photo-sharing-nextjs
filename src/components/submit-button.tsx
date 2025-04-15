import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps
  extends VariantProps<typeof buttonVariants>,
    React.ComponentProps<"button"> {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  pendingIcon?: React.ReactNode;
}

export const SubmitButton = ({
  children,
  className,
  variant,
  size,
  asChild = false,
  pendingIcon,
  ...props
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      asChild={asChild}
      className={cn(
        "h-auto w-full flex-1",
        className,
        pending && "items-center justify-center bg-gray-200 text-black",
      )}
      disabled={pending}
      {...props}
    >
      {pending ? (
        pendingIcon ? (
          pendingIcon
        ) : (
          <Loader2 className="mr-2 size-4 animate-spin text-black" />
        )
      ) : (
        children
      )}
    </Button>
  );
};
