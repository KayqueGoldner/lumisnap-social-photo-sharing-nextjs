"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog";
import { signInAction } from "@/modules/auth/actions/auth-actions";
import { useSignInFormModal } from "@/modules/auth/hooks/use-sign-in-form-modal";

export function SignInForm() {
  const { isOpen, closeModal } = useSignInFormModal();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Log in to your account</DialogTitle>
        </DialogHeader>
        <div className="flex w-full items-center justify-center gap-x-2 py-6">
          <form action={() => signInAction("github")} className="w-full">
            <Button variant="outline" className="h-40 w-full flex-1 flex-col">
              <FaGithub className="size-10" />
              Log in with GitHub
            </Button>
          </form>
          <form action={() => signInAction("google")} className="w-full">
            <Button variant="outline" className="h-40 w-full flex-1 flex-col">
              <FcGoogle className="size-10" />
              Log in with Google
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
