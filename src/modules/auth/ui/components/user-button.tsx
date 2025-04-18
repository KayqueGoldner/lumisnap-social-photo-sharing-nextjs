"use client";

import { Session } from "next-auth";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { useActionState } from "react";
import { FaPlus } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { cn, getRandomColor } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOutAction } from "@/modules/auth/actions/auth-actions";
import { SubmitButton } from "@/components/submit-button";
import { useCreatePostModal } from "@/modules/post/hooks/use-create-post-modal";

interface UserButtonProps {
  session: Session;
  showUserName?: boolean;
}

export const UserButton = ({
  session,
  showUserName = true,
}: UserButtonProps) => {
  const [state, formAction] = useActionState(signOutAction, null);
  const { onOpen } = useCreatePostModal();

  return (
    <Popover>
      <PopoverTrigger asChild>
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
              style={{
                backgroundColor: getRandomColor(session.user?.name ?? ""),
              }}
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
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="overflow-hidden p-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2">
            <Image
              src={session.user?.image ?? ""}
              width={33}
              height={33}
              alt={session.user?.name ?? "user avatar"}
              className="size-7 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-sm font-medium">{session.user?.name}</p>
              <p className="text-muted-foreground text-xs">
                {session.user?.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <Button
              variant="ghost"
              className="bg-muted hover:bg-primary h-10 justify-start rounded-none hover:text-white"
              onClick={onOpen}
            >
              <FaPlus className="mr-2 size-4" />
              <span>Create a post</span>
            </Button>
            <form action={() => formAction("/")} className="h-10">
              <SubmitButton
                variant="ghost"
                className="bg-destructive hover:bg-destructive/80 size-full justify-start rounded-none text-white hover:text-white"
              >
                <LogOutIcon className="mr-2 size-4" />
                <span>Log out</span>
              </SubmitButton>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
