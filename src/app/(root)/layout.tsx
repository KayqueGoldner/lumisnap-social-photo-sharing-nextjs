import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomeHeader } from "@/modules/home/ui/layout/home-header";
import { SidebarNavigation } from "@/components/sidebar-navigation";
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <HomeHeader session={session} />
      <main className="relative mx-auto flex size-full w-full max-w-screen-2xl gap-4 pt-20">
        <SidebarNavigation />
        {children}
      </main>
    </>
  );
};

export default RootLayout;
