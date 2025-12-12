import { User, Bell, Shield, Palette, Globe, HelpCircle, LogOut, ChevronRight, Moon, Sun, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const settingsSections = [
  {
    title: "Compte",
    items: [
      { icon: User, label: "Profil", description: "Gérer vos informations personnelles" },
      { icon: Shield, label: "Sécurité", description: "Mot de passe et authentification" },
    ]
  },
  {
    title: "Préférences",
    items: [
      { icon: Bell, label: "Notifications", description: "Gérer vos alertes", hasSwitch: true },
      { icon: Palette, label: "Apparence", description: "Personnaliser l'interface" },
      { icon: Globe, label: "Langue", description: "Français" },
    ]
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Aide", description: "Centre d'aide et FAQ" },
      { icon: Smartphone, label: "Installer l'app", description: "Ajouter à l'écran d'accueil" },
    ]
  },
];

export default function Settings() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display text-3xl font-bold mb-2">Paramètres</h1>
          <p className="text-muted-foreground">Gérez votre compte et vos préférences</p>
        </div>

        {/* Profile Card */}
        <Card className="glass mb-6 animate-slide-up">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="font-display font-semibold text-xl">Jean Dupont</h2>
                <p className="text-muted-foreground">jean.dupont@email.com</p>
                <p className="text-sm text-primary mt-1">Étudiant • Groupe A</p>
              </div>
              <Button variant="outline" size="sm">
                Modifier
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <Card 
              key={section.title} 
              className="glass animate-slide-up"
              style={{ animationDelay: `${(sectionIndex + 1) * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                {section.items.map((item, index) => (
                  <div key={item.label}>
                    <button className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors text-left">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      {item.hasSwitch ? (
                        <Switch />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    {index < section.items.length - 1 && (
                      <Separator className="mx-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logout Button */}
        <Card className="glass mt-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <CardContent className="p-2">
            <button className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-destructive/10 transition-colors text-left group">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <LogOut className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-destructive">Déconnexion</p>
                <p className="text-sm text-muted-foreground">Se déconnecter de l'application</p>
              </div>
            </button>
          </CardContent>
        </Card>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          EduConnect v1.0.0
        </p>
      </div>
    </div>
  );
}
