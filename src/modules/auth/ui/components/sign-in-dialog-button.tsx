"use client";

import { Button } from "@/components/ui/button";
import { useSignInFormModal } from "@/modules/auth/hooks/use-sign-in-form-modal";

export const SignInDialogButton = () => {
  const { openModal } = useSignInFormModal();

  return <Button onClick={openModal}>Sign In</Button>;
};
