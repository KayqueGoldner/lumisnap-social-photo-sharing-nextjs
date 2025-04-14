import { auth } from "@/lib/auth";
import { UserButton } from "@/modules/auth/ui/components/user-button";
import { SignInDialogButton } from "@/modules/auth/ui/components/sign-in-dialog-button";

const HomePage = async () => {
  const session = await auth();

  return (
    <div>
      <UserButton session={session} />
      <SignInDialogButton />
    </div>
  );
};

export default HomePage;
