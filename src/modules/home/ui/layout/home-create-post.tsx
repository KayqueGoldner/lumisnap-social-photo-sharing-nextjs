"use client";

import { Session } from "next-auth";
import { UserButton } from "@/modules/auth/ui/components/user-button";
import { useCreatePostModal } from "@/modules/post/hooks/use-create-post-modal";

interface HomeCreatePostProps {
  session: Session;
}

export const HomeCreatePost = ({ session }: HomeCreatePostProps) => {
  const { onOpen } = useCreatePostModal();

  return (
    <div
      className="mt-5 mb-2 flex w-full cursor-pointer gap-2"
      onClick={onOpen}
    >
      <div className="bg-muted text-muted-foreground border-muted-foreground flex w-full flex-1 items-center gap-2 rounded-full border p-0.5 pl-2 text-sm">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <UserButton session={session} showUserName={false} />
        </div>
        <span>Create a post</span>
      </div>
    </div>
  );
};
