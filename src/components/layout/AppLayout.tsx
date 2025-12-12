import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { MobileNav } from "./MobileNav";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col min-h-screen pb-16 md:pb-0">
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </main>
        <MobileNav />
      </div>
    </SidebarProvider>
  );
}
