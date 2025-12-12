import { Home, BookOpen, MessageCircle, Users, Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const mobileNavItems = [
  { title: "Accueil", url: "/", icon: Home },
  { title: "Cours", url: "/courses", icon: BookOpen },
  { title: "Messages", url: "/messages", icon: MessageCircle },
  { title: "Membres", url: "/members", icon: Users },
  { title: "Plus", url: "/settings", icon: Menu },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50">
      <div className="flex items-center justify-around py-2 px-2 safe-area-inset-bottom">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[4rem] ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <div className={`relative ${isActive ? "animate-scale-in" : ""}`}>
                <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                {isActive && (
                  <div className="absolute -inset-2 bg-primary/20 rounded-lg -z-10" />
                )}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? "text-primary" : ""}`}>
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
