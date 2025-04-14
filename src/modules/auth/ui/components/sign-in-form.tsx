"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { signInAction } from "@/modules/auth/actions/auth-actions";
import { cn } from "@/lib/utils";

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
      <form action={() => signInAction("github")} className="w-full">
        <Button variant="outline" className="w-full flex-1">
          <FaGithub className="size-6" />
          Continue with GitHub
        </Button>
      </form>
      <form action={() => signInAction("google")} className="w-full">
        <Button variant="outline" className="w-full flex-1">
          <FcGoogle className="size-6" />
          Continue with Google
        </Button>
      </form>
    </div>
  );
};
