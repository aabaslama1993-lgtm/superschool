import { 
  Home, 
  Search, 
  BookOpen, 
  FileText, 
  MessageCircle, 
  Users, 
  Calendar, 
  Settings,
  GraduationCap
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "Recherche", url: "/search", icon: Search },
  { title: "Cours", url: "/courses", icon: BookOpen },
  { title: "Devoirs", url: "/homework", icon: FileText },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Membres", url: "/members", icon: Users },
  { title: "Événements", url: "/events", icon: Calendar },
  { title: "Paramètres", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="hidden md:flex border-r border-border/50 bg-sidebar">
      <SidebarHeader className="p-4 border-b border-border/50">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground">EduConnect</h1>
            <p className="text-xs text-muted-foreground">Plateforme éducative</p>
          </div>
        </NavLink>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-primary/10 text-primary shadow-glow-sm"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                        <span className="font-medium">{item.title}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
