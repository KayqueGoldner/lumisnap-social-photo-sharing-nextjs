"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { signInAction } from "@/modules/auth/actions/auth-actions";
import { cn } from "@/lib/utils";
import { SubmitButton } from "@/components/submit-button";

interface SignInFormProps {
  className?: string;
}

export const SignInForm = ({ className }: SignInFormProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 py-6",
        className,
      )}
    >
      <form action={() => signInAction("github")} className="h-12 w-full">
        <SubmitButton variant="outline" className="size-full flex-1">
          <FaGithub className="size-6" />
          Continue with GitHub
        </SubmitButton>
      </form>
      <form action={() => signInAction("google")} className="h-12 w-full">
        <SubmitButton variant="outline" className="size-full flex-1">
          <FcGoogle className="size-6" />
          Continue with Google
        </SubmitButton>
      </form>
    </div>
  );
};
