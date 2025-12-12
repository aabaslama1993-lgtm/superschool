import { useState } from "react";
import { Search, Filter, MoreHorizontal, MessageCircle, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const members = [
  { 
    id: 1, 
    name: "Marie Dupont", 
    role: "Étudiante",
    group: "Groupe A",
    online: true,
    lastSeen: "En ligne",
    courses: ["Maths", "Physique"]
  },
  { 
    id: 2, 
    name: "Lucas Bernard", 
    role: "Étudiant",
    group: "Groupe A",
    online: true,
    lastSeen: "En ligne",
    courses: ["Python", "IA"]
  },
  { 
    id: 3, 
    name: "Sophie Laurent", 
    role: "Étudiante",
    group: "Groupe B",
    online: false,
    lastSeen: "Il y a 2 heures",
    courses: ["Chimie", "Maths"]
  },
  { 
    id: 4, 
    name: "Prof. Martin", 
    role: "Enseignant",
    group: "Staff",
    online: false,
    lastSeen: "Il y a 30 min",
    courses: ["Maths Avancées"]
  },
  { 
    id: 5, 
    name: "Pierre Durand", 
    role: "Étudiant",
    group: "Groupe A",
    online: false,
    lastSeen: "Hier à 18:30",
    courses: ["Python", "Maths"]
  },
  { 
    id: 6, 
    name: "Emma Martin", 
    role: "Étudiante",
    group: "Groupe C",
    online: true,
    lastSeen: "En ligne",
    courses: ["Physique", "IA"]
  },
  { 
    id: 7, 
    name: "Prof. Dubois", 
    role: "Enseignant",
    group: "Staff",
    online: true,
    lastSeen: "En ligne",
    courses: ["Physique Quantique"]
  },
  { 
    id: 8, 
    name: "Julie Moreau", 
    role: "Étudiante",
    group: "Groupe B",
    online: false,
    lastSeen: "Il y a 5 heures",
    courses: ["Chimie"]
  },
];

const filters = ["Tous", "En ligne", "Étudiants", "Enseignants"];

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      activeFilter === "Tous" ||
      (activeFilter === "En ligne" && member.online) ||
      (activeFilter === "Étudiants" && member.role.includes("Étudiant")) ||
      (activeFilter === "Enseignants" && member.role === "Enseignant");
    return matchesSearch && matchesFilter;
  });

  const onlineCount = members.filter(m => m.online).length;

  return (
    <div className="min-h-screen px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-display text-3xl font-bold">Membres</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">{onlineCount} en ligne</span>
            </div>
          </div>
          <p className="text-muted-foreground">Connectez-vous avec les membres de la communauté</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4 animate-slide-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher un membre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 glass"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "shadow-glow-sm" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="glass glass-hover animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-card ${
                      member.online ? 'bg-success' : 'bg-offline'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold truncate">{member.name}</h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <MessageCircle className="w-4 h-4 mr-2" /> Envoyer un message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserPlus className="w-4 h-4 mr-2" /> Ajouter aux contacts
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {member.role}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {member.group}
                      </Badge>
                    </div>
                    <p className={`text-xs mt-2 ${member.online ? 'text-success' : 'text-muted-foreground'}`}>
                      {member.lastSeen}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {member.courses.map((course) => (
                        <span 
                          key={course} 
                          className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
