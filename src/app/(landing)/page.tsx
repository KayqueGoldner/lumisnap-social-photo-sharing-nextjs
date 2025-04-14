import { redirect } from "next/navigation";
import Image from "next/image";

import { auth } from "@/lib/auth";
import { SignInForm } from "@/modules/auth/ui/components/sign-in-form";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/home");
  }

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <section className="flex items-start justify-center gap-16">
        <div className="space-y-4">
          <Image src="/logo.svg" alt="Lumisnap" width={100} height={100} />
          <h1 className="text-4xl font-bold">Lumisnap</h1>
          <p className="text-muted-foreground text-base">
            Social media for your photos
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="max-w-md text-2xl font-bold">
            Log in to access a huge amount of content and communities.
          </h1>
          <SignInForm className="flex-col" />
        </div>
      </section>
    </main>
  );
}
