import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomeHeader } from "@/modules/home/ui/layout/home-header";
import { HomepageExplorerSidebar } from "@/modules/home/ui/layout/homepage-explorer-sidebar";
import { SidebarNavigation } from "@/modules/home/ui/layout/sidebar-navigation";
import { CreatePostModal } from "@/modules/post/modals/create-post-modal";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <CreatePostModal />
      <HomeHeader session={session} />
      <main className="relative mx-auto flex size-full max-w-screen-2xl items-start gap-4 px-4">
        <SidebarNavigation />
        {children}
        <HomepageExplorerSidebar />
      </main>
    </>
  );
};

export default RootLayout;
