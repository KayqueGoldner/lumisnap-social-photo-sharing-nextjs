"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const TABS = [
  {
    label: "Explorer",
    href: "/home",
  },
  {
    label: "Following",
    href: "/home/following",
  },
  {
    label: "Communities",
    href: "/home/communities",
  },
];

export const HomepageTabs = () => {
  const pathname = usePathname();

  return (
    <div className="bg-background sticky top-0 left-0 w-full pt-5 pb-2">
      <div className="flex gap-1">
        {TABS.map((tab) => (
          <Button
            key={tab.label}
            variant={pathname === tab.href ? "default" : "outline"}
            className="flex-1"
            asChild
          >
            <Link href={tab.href}>
              <span className="text-sm font-medium">{tab.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
