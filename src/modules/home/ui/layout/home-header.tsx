import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { Session } from "next-auth";

import { Input } from "@/components/ui/input";
import { UserButton } from "@/modules/auth/ui/components/user-button";

interface HomeHeaderProps {
  session: Session;
}

export const HomeHeader = ({ session }: HomeHeaderProps) => {
  return (
    <header className="bg-background sticky top-0 left-0 z-10 flex h-14 w-full items-center justify-center border-b">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-medium"
        >
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
          Lumisnap
        </Link>
        <div className="relative flex w-full max-w-md items-center gap-2">
          <IoSearchOutline className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />
          <Input placeholder="Search" className="w-full pl-10" />
        </div>
        <div>
          <UserButton session={session} />
        </div>
      </div>
    </header>
  );
};
