"use client";

import { Session } from "next-auth";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SignInDialogButton } from "@/modules/auth/ui/components/sign-in-dialog-button";
import { cn, getRandomColor } from "@/lib/utils";

interface UserButtonProps {
  session: Session | null;
  showUserName?: boolean;
}

export const UserButton = ({
  session,
  showUserName = true,
}: UserButtonProps) => {
  if (!session) {
    return <SignInDialogButton />;
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        "relative h-auto rounded-full p-1",
        showUserName && "p-1 pr-3 pl-1.5",
      )}
    >
      {session.user?.image ? (
        <Image
          src={session.user.image}
          width={33}
          height={33}
          alt={session.user.name ?? "user avatar"}
          className="size-7 rounded-full"
        />
      ) : (
        <div
          className="bg-muted flex size-full items-center justify-center rounded-full text-sm font-semibold"
          style={{ backgroundColor: getRandomColor(session.user?.name ?? "") }}
        >
          {session.user?.name?.charAt(0).toUpperCase()}
        </div>
      )}
      {showUserName && (
        <span className="block max-w-32 truncate text-sm font-medium">
          {session.user?.name}
        </span>
      )}
    </Button>
  );
};
