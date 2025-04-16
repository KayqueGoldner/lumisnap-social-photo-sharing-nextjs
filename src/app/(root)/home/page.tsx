import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { HomepageTabs } from "@/modules/home/ui/layout/homepage-tabs";

const HomePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <section className="relative w-full lg:min-w-md">
      {/* new post component */}
      <HomepageTabs />
      <div className="h-screen pt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </div>
    </section>
  );
};

export default HomePage;
