"use client";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerBody, Button } from "@heroui/react";
import { Menu } from "lucide-react";
import SidebarContent from "./SidebarContent";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <div className="md:hidden fixed top-3 left-4 z-50">
        <Button
          isIconOnly
          variant="flat"
          size="sm"
          onClick={() => setIsOpen(true)}
          aria-label="Open Navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      
      <aside className="hidden md:block w-64 shrink-0 border-r min-h-[calc(100vh-4rem)]">
        <SidebarContent />
      </aside>

   
      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="left"
        size="xs"
      >
        <DrawerContent className="p-0">
          <DrawerBody className="p-0">
            <SidebarContent onSelect={() => setIsOpen(false)} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}