import { auth } from "@/lib/auth";
import { SignInForm } from "@/modules/auth/ui/components/sign-in-form";
import { UserButton } from "@/modules/auth/ui/components/user-button";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <SignInForm />
      <UserButton session={session} />
    </div>
  );
}
