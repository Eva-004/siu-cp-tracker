"use client";

import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r min-h-[calc(100vh-4rem)]">
      <SidebarContent />
    </aside>
  );
}