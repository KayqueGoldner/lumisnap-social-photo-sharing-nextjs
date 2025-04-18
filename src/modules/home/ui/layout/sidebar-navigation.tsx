"use client";

import Link from "next/link";
import {
  RiBookmarkLine,
  RiCommunityLine,
  RiHome2Line,
  RiMessage2Line,
  RiNotificationLine,
  RiSettingsLine,
} from "react-icons/ri";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";

const SIDEBAR_NAVIGATION_ITEMS = [
  {
    label: "Home",
    href: "/home",
    icon: RiHome2Line,
  },
  {
    label: "Communities",
    href: "/communities",
    icon: RiCommunityLine,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: RiMessage2Line,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: RiNotificationLine,
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: RiBookmarkLine,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: RiSettingsLine,
  },
];

export const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-20 left-0 flex w-14 shrink-0 flex-col gap-6 px-2 sm:w-20 sm:px-5 md:w-60 lg:w-72">
      <div className="flex flex-col">
        {SIDEBAR_NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={buttonVariants({
              variant: pathname === item.href ? "default" : "ghost",
              className: "h-11 justify-start",
            })}
          >
            <item.icon className="size-4" />
            <span className="hidden text-sm font-medium md:block">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
