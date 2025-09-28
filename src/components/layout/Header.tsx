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
    <header className="h-16 border-b border-border bg-soft-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-classic-gold hover:text-bright-gold" />
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar transações..."
              className="w-64 bg-luxury-gray border-luxury-gray pl-10 focus:border-classic-gold focus:ring-classic-gold"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Sync Button */}
          <Button variant="outline" size="sm" className="btn-outline-gold hidden lg:flex">
            Sincronizar
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="relative h-8 w-8 text-classic-gold hover:text-bright-gold"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-bright-gold rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 bg-luxury-gray border-border">
              <DropdownMenuLabel className="text-classic-gold">Notificações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-soft-black">
                <div>
                  <p className="text-sm font-medium">Nova transação detectada</p>
                  <p className="text-xs text-muted-foreground">Débito de R$ 150,00 no cartão</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-soft-black">
                <div>
                  <p className="text-sm font-medium">Meta atingida!</p>
                  <p className="text-xs text-muted-foreground">Você economizou R$ 1.000 este mês</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8 border-2 border-classic-gold">
                  <AvatarImage src="/avatars/01.png" alt="@usuario" />
                  <AvatarFallback className="bg-classic-gold text-deep-black font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-luxury-gray border-border">
              <DropdownMenuLabel className="text-classic-gold">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">João Silva</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    joao@exemplo.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-soft-black">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-soft-black">
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}