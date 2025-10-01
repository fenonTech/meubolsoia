import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-soft-black sticky top-0 z-50">
      <div className="flex h-full items-center justify-end px-6 gap-4">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="sm"
          className="relative h-10 w-10 rounded-full text-bright-gold hover:text-bright-gold hover:bg-luxury-gray"
        >
          <Bell className="h-5 w-5" />
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-classic-gold">
            <AvatarImage src="/avatars/01.png" alt="Gustavo Nascimento" />
            <AvatarFallback className="bg-classic-gold text-deep-black font-semibold">
              GN
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-champagne hidden md:block">
            Gustavo Nascimento
          </span>
        </div>
      </div>
    </header>
  );
}