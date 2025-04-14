"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { useSignInFormModal } from "@/modules/auth/hooks/use-sign-in-form-modal";

import { SignInForm } from "./sign-in-form";

export function SignInFormDialog() {
  const { isOpen, closeModal } = useSignInFormModal();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Log in to your account</DialogTitle>
        </DialogHeader>
        <SignInForm />
      </DialogContent>
    </Dialog>
  );
}
