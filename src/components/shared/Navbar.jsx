"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button, Drawer } from "@heroui/react";
import { Menu, Moon, Sun, LayoutDashboard, Target, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Overview", href: "/", icon: LayoutDashboard, iconColor: "text-amber-400" },
    { name: "Tracker", href: "/tracker", icon: Target, iconColor: "text-cyan-400" },
    { name: "Admin", href: "/admin", icon: ShieldCheck, iconColor: "text-emerald-400" },
  ];

  const NavList = (
    <nav className="flex flex-col justify-between h-full py-2">
      <div className="flex flex-col gap-2">
        {links.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-semibold transition-all ${
                isActive
                  ? "bg-[#03254C] text-white shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Icon className={`h-5 w-5 ${item.iconColor}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="border-t border-white/20 pt-4 mt-auto">
        {(() => {
          const adminLink = links[2];
          const Icon = adminLink.icon;
          const isActive = pathname === adminLink.href;
          return (
            <Link
              href={adminLink.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#03254C] text-white font-bold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className={`h-4 w-4 ${adminLink.iconColor}`} />
              <span>{adminLink.name}</span>
            </Link>
          );
        })()}
      </div>
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
          
            <Button
              className="md:hidden"
              variant="flat"
              isIconOnly
              size="sm"
              onPress={() => setOpen(true)}
              aria-label="Open Navigation"
            >
              <Menu className="h-5 w-5" />
            </Button>

           
            <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Image
                  src="/images/SIUCPC.png"
                  alt="SIUCPC Logo"
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                CP Tracker
              </span>
            </Link>
          </div>

     
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                isIconOnly
                variant="outline"
                size="sm"
                className="h-9 w-9 rounded-lg"
                aria-label="Toggle Theme"
                onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4 text-muted-foreground transition-all hover:text-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-muted-foreground transition-all hover:text-foreground" />
                )}
              </Button>
            )}
          </div>
        </div>
      </header>

  
      <Drawer
        isOpen={open}
        onOpenChange={(isOpen) => setOpen(isOpen)}
      >
        <Drawer.Backdrop>
          <Drawer.Content placement="left" className="max-w-64 h-full">
            <Drawer.Dialog className="bg-[#03254C] h-full flex flex-col justify-between">
              <Drawer.CloseTrigger className="text-red-400" />

              <Drawer.Header>
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/SIUCPC.png"
                    alt="SIUCPC Logo"
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                  <Drawer.Heading className="text-white font-bold text-lg">
                    CP Tracker
                  </Drawer.Heading>
                </div>
              </Drawer.Header>

              <Drawer.Body className="flex-1">
                {NavList}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}