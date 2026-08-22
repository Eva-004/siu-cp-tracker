"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, ShieldCheck } from "lucide-react";

export default function SidebarContent({ onSelect }) {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/", icon: LayoutDashboard, iconColor: "text-amber-400" },
    { name: "Tracker", href: "/tracker", icon: Target, iconColor: "text-cyan-400" },
    { name: "Admin", href: "/admin", icon: ShieldCheck, iconColor: "text-emerald-400" },
  ];

  return (
    <div className="flex h-full w-full flex-col justify-between p-4 bg-card text-card-foreground">
      <div className="flex flex-col gap-12">
        {links.slice(0, 2).map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onSelect}
              className={`flex items-center justify-center gap-3 rounded-xl px-4 py-3 font-semibold transition-all shadow-sm ${
                isActive
                  ? "bg-cyan-700 text-white shadow-md shadow-cyan-700/20"
                  : "bg-muted/50 hover:bg-muted text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${item.iconColor}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="border-t pt-4">
        {(() => {
          const adminLink = links[2];
          const Icon = adminLink.icon;
          const isActive = pathname === adminLink.href;
          return (
            <Link
              href={adminLink.href}
              onClick={onSelect}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#03254C] text-white font-bold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className={`h-4 w-4 ${adminLink.iconColor}`} />
              <span>{adminLink.name}</span>
            </Link>
          );
        })()}
      </div>
    </div>
  );
}