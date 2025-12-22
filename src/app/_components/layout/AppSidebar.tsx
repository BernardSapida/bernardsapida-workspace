"use client";

import {
  Avatar,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { useAuth } from "~/features/auth/hooks/useAuth";
import { getNavigation } from "~/lib/constants/nav";
import { APP_CONFIG } from "~/lib/constants/config";

export default function AppSidebar() {
  const pathname = usePathname();
  const { role, signOut, user } = useAuth();
  const roleNavigation = getNavigation(role);

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <aside className="flex flex-col border-gray-400/20 border-r-1 md:w-72">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 px-3 py-6 md:justify-start">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-md">
          <LuBriefcaseBusiness className="text-xl text-white" />
        </div>
        <div className="hidden font-bold text-xl md:block">
          {APP_CONFIG.APP_NAME}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        {roleNavigation.map((nav) => (
          <div key={nav.title}>
            <p className="mb-1 text-center text-default-500 text-xs md:text-left">
              {nav.title}
            </p>{" "}
            <div className="mb-2 space-y-1">
              {nav.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Tooltip
                    closeDelay={0}
                    content={
                      <div>
                        <h3 className="font-bold">{item.label}</h3>
                        <p>{item.description}</p>
                      </div>
                    }
                    key={item.href}
                    offset={0}
                    placement="right"
                    showArrow={true}
                  >
                    <Link
                      className={`flex w-full items-center justify-center rounded-lg px-3 py-4 transition-colors md:justify-start ${
                        isActive
                          ? "border-blue-500 border-l-4 bg-blue-50 text-blue-500"
                          : "text-default-700 hover:bg-default-50"
                      }`}
                      href={item.href}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Icon size={20} />
                        <div className="relative hidden w-40 items-center gap-4 font-medium text-sm md:flex">
                          <p>{item.label}</p>
                        </div>
                      </div>
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <Divider />

      <Dropdown placement="bottom-start">
        <DropdownTrigger className="justify-start p-6">
          <div className="flex cursor-pointer gap-2">
            <Avatar
              isBordered
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <div className="hidden md:block">
              <div className="flex gap-2">
                <p className="text-sm">{user?.fullname}</p>
              </div>
              <p className="text-default-400 text-xs">{user?.email}</p>
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem
            className="h-14 gap-2 rounded-none py-10 hover:bg-transparent!"
            key="profile"
          >
            <p>Signed in as</p>
            <p className="font-bold text-sm">{user?.fullname}</p>
            <p className="text-default-400 text-xs">{user?.email}</p>
          </DropdownItem>
          <DropdownItem color="danger" key="signout" onPress={handleSignout}>
            <div className="flex flex-row gap-2 text-danger">
              <MdOutlineLogout size={18} /> Sign Out
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </aside>
  );
}
