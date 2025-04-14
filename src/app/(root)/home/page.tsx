import { auth } from "@/lib/auth";
import { UserButton } from "@/modules/auth/ui/components/user-button";

const HomePage = async () => {
  const session = await auth();

  return (
    <div>
      <UserButton session={session} />
    </div>
  );
};

export default HomePage;
