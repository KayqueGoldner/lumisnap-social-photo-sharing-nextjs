import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomeHeader } from "@/modules/home/ui/layout/home-header";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <HomeHeader session={session} />
      <main className="relative size-full">{children}</main>
    </>
  );
};

export default RootLayout;
