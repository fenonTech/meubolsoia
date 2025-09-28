import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  PieChart,
  CreditCard,
  Target,
  Settings,
  Bell,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Receitas", url: "/receitas", icon: TrendingUp },
  { title: "Despesas", url: "/despesas", icon: CreditCard },
  { title: "Investimentos", url: "/investimentos", icon: PieChart },
  { title: "Metas", url: "/metas", icon: Target },
];

const settingsItems = [
  { title: "Configurações", url: "/configuracoes", icon: Settings },
  { title: "Notificações", url: "/notificacoes", icon: Bell },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getNavClass = (path: string) =>
    isActive(path) ? "nav-link active" : "nav-link";

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      className={`${isCollapsed ? "w-16" : "w-64"} border-r border-border transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 text-center">
          {!isCollapsed ? (
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">💰</span>
              <h1 className="text-2xl font-playfair font-bold text-gradient-gold">
                MeuBolso
              </h1>
            </div>
          ) : (
            <div className="w-8 h-8 mx-auto bg-gradient-to-r from-classic-gold to-bright-gold rounded-lg flex items-center justify-center">
              <span className="text-deep-black font-bold text-lg">💰</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup className="mb-6">
          <SidebarGroupLabel className="text-elegant-bronze text-sm font-medium mb-3">
            {!isCollapsed && "Navegação"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-elegant-bronze text-sm font-medium mb-3">
            {!isCollapsed && "Sistema"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              {/* Logout */}
              <SidebarMenuItem>
                <SidebarMenuButton className="nav-link text-destructive hover:text-destructive-foreground hover:bg-destructive">
                  <LogOut className="h-5 w-5 shrink-0" />
                  {!isCollapsed && <span className="font-medium">Sair</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}