import { useState } from "react";
import { Search as SearchIcon, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const searchResults = [
  { id: 1, type: "course", title: "Mathématiques Avancées", category: "Sciences", match: "Chapitre 5: Calcul intégral" },
  { id: 2, type: "homework", title: "Devoir de Physique", category: "Sciences", match: "Mécanique quantique" },
  { id: 3, type: "member", title: "Marie Dupont", category: "Étudiante", match: "Groupe A" },
  { id: 4, type: "event", title: "Conférence IA", category: "Événement", match: "15 Décembre 2024" },
];

const filters = ["Tout", "Cours", "Devoirs", "Membres", "Événements"];

export default function Search() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tout");

  return (
    <div className="min-h-screen px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display text-3xl font-bold mb-2">Recherche</h1>
          <p className="text-muted-foreground">Trouvez des cours, devoirs, membres et événements</p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6 animate-slide-up">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Rechercher..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-12 py-6 text-lg glass border-primary/20 focus:border-primary focus:shadow-glow-sm"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setQuery("")}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
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

        {/* Results */}
        <div className="space-y-4">
          {searchResults.map((result, index) => (
            <Card 
              key={result.id} 
              className="glass glass-hover cursor-pointer animate-slide-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{result.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {result.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{result.match}</p>
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
