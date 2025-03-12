import { createRoot } from "react-dom/client";
import "./index.css";

import { StrictMode, Suspense } from "react";
import Home from "./pages/Home";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarApp from "@/components/layout/SidebarApp";
import HeaderApp from "@/components/layout/header/Header";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<>Loading ..</>}>
    <SidebarProvider>
        <SidebarApp />
        <div className="w-full">
          <HeaderApp>
            <SidebarTrigger />
          </HeaderApp>
          <main className="w-full p-4 lg:p-8">
            <Home />
          </main>
        </div>
      </SidebarProvider>
    </Suspense>
  </StrictMode>
);
