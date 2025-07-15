import React from "react";
import {AppSidebar} from "./_components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import WelcomeContainer from "./dashboard/_components/WelcomeContainer";

function Dashboardprovider({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar /> 
      <div className="w-full p-10">
        {/*<SidebarTrigger />*/}
        <WelcomeContainer></WelcomeContainer>
        {children}
      </div>
    </SidebarProvider>
  );
}

export default Dashboardprovider;
