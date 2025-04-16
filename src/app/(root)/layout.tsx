import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomeHeader } from "@/modules/home/ui/layout/home-header";
import { HomepageExplorerSidebar } from "@/modules/home/ui/layout/homepage-explorer-sidebar";
import { SidebarNavigation } from "@/modules/home/ui/layout/sidebar-navigation";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <HomeHeader session={session} />
      <main className="relative mx-auto flex size-full w-full max-w-screen-2xl gap-4 overflow-y-auto">
        <SidebarNavigation />
        {children}
        <HomepageExplorerSidebar />
      </main>
    </>
  );
};

export default RootLayout;
