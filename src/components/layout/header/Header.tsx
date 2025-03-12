import React from "react"
import { Bell, Moon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SelectLanguages from "./selectLanguages"

export default function DashboardHeader({
  children
}:{
  children: React.ReactNode
}) {
 

  return (
    <header className="bg-white border-b py-2 px-4">
      <div className="flex items-center justify-between">

        {/* Search */}
        <div className="relative flex gap-2 items-center">
          {children}
          <div className="relative hidden md:block">
            <Input
              type="search"
              placeholder="بحث"
              className="w-64 ps-10 pr-4 py-2 bg-[#f5f7fa] border-none rounded-full text-right"
            />
            <Search className="md:absolute start-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9ba6b1]" />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full md:hidden flex" >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* User and controls */}
        <div className="flex items-center gap-4">

          <div className="relative">
            <SelectLanguages />
          </div>

          <Button variant="ghost" size="icon" className="rounded-full" >
            <Moon className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                <Avatar className="h-10 w-10 bg-[hsla(250,48%,31%,0.6)]">
                  <AvatarImage src="/avatar/user.png" alt="User" />
                  <AvatarFallback className="bg-primary text-white">MO</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" forceMount>
              <DropdownMenuLabel>حسابي</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
              <DropdownMenuItem>الإعدادات</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">تسجيل الخروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

