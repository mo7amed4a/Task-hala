;
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "@/components/layout/sidebar/Logo";
import { Navigation } from "./sidebar/Navigation.template";


export default function SidebarApp() {
  return  (
    <Sidebar className="border-none " side="right">
      <SidebarHeader />
      <SidebarContent className="px-2 hidden-scrollbar">
        <div className="rounded-2xl dark:bg-[hsla(215,49%,7%,1)] py-4">
            <SidebarGroup className="pb-0 items-center">
                <Logo />
            </SidebarGroup>
            <SidebarGroup className="py-4 space-y-4">
              <Navigation />
            </SidebarGroup>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
