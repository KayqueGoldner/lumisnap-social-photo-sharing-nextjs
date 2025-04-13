"use client";

import { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import { useSignInFormModal } from "@/modules/auth/hooks/use-sign-in-form-modal";

interface UserButtonProps {
  session: Session | null;
  signInButton?: boolean;
}

export const UserButton = ({
  session,
  signInButton = true,
}: UserButtonProps) => {
  const { openModal } = useSignInFormModal();

  if (!session) {
    return (
      <Button type="button" onClick={openModal}>
        Sign In
      </Button>
    );
  }

  return <div>{session.user?.name}</div>;
};
