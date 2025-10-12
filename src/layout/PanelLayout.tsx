import { AppSidebar } from "@/components/App-sidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function PanelLayout() {
  return (
    <SidebarProvider
      dir="rtl"
      style={{
        "--sidebar-width": "20rem",
      }}
    >
      <div className="flex gap-4 w-full">
        <AppSidebar />
        <main className="w-full px-10">
          <Header />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
