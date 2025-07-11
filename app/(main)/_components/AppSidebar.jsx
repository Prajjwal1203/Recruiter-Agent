"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";
import { SideBarOptions } from "@/services/Constants";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {

  const path = usePathname();
  console.log(path);
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center mt-5">
        <Image
          src={"/wow.png"}
          alt="logo"
          height={100}
          width={200}
          className="w-[150px] h-[100px]"
        ></Image>
        <Button className="w-full mt-5">
          <Plus></Plus>Create New Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarContent>
          <SidebarMenu>
            {SideBarOptions.map((option,index)=>(
              <SidebarMenuItem key = {index} className='p-1'>
                <SidebarMenuButton asChild className={`p-5 ${path == option.path && 'bg-blue-100'}`}>
                  <Link href={option.path}>
                  <option.icon className={`${path == option.path && 'text-primary'}`}></option.icon>
                  <span className={`text-[16px] ${path == option.path && 'text-primary'}`}>{option.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
