import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomepageTabs } from "@/modules/home/ui/layout/homepage-tabs";
import { HomeCreatePost } from "@/modules/home/ui/layout/home-create-post";

const HomePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <section className="relative size-full lg:min-w-md">
      <HomeCreatePost session={session} />
      <HomepageTabs />
      <div className="h-[400vh] w-full bg-green-500" />
    </section>
  );
};

export default HomePage;
