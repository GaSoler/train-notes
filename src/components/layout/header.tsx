import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Dumbbell, LogOut, Search } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HeaderLink } from "./header-link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <div className="border-b flex w-full items-center justify-between space-x-4 bg-[#f9f9f9] p-4 dark:bg-background/50">
      <div className="flex items-center gap-2">
        <Link href="/" className="p-1 flex items-center rounded-sm bg-primary">
          <Dumbbell className="stroke-background" width={24} height={24} />
        </Link>

        <h1 className="font-bold text-md text-foreground">Train Notes</h1>
      </div>

      <div className="flex gap-4">
        <HeaderLink href="/" label="Home" />
        <HeaderLink href="routines" label="Routines" />
        <HeaderLink href="exercises" label="Exercises" />
        <HeaderLink href="history" label="History" />
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="icon"><Search className="h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100" width={24} height={24} /></Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@gasoler" />
              <AvatarFallback>GS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="gap-2">Logout <LogOut size={16} /></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>


    </div>
  )
}