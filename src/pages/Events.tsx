import { Calendar, MapPin, Clock, Users, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Conférence: L'avenir de l'IA",
    date: "15 Déc 2024",
    time: "14:00 - 16:00",
    location: "Amphithéâtre A",
    attendees: 156,
    category: "Conférence",
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Atelier Python Avancé",
    date: "18 Déc 2024",
    time: "10:00 - 12:00",
    location: "Salle Info 201",
    attendees: 32,
    category: "Atelier",
    isUpcoming: true,
  },
  {
    id: 3,
    title: "Remise des diplômes",
    date: "20 Déc 2024",
    time: "18:00 - 21:00",
    location: "Grand Amphithéâtre",
    attendees: 500,
    category: "Cérémonie",
    isUpcoming: true,
  },
  {
    id: 4,
    title: "Hackathon Innovation",
    date: "5 Jan 2025",
    time: "09:00 - 21:00",
    location: "Campus Principal",
    attendees: 89,
    category: "Compétition",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Séminaire Recherche",
    date: "10 Déc 2024",
    time: "14:00 - 17:00",
    location: "Salle de conférence B",
    attendees: 45,
    category: "Séminaire",
    isUpcoming: false,
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Conférence': return 'bg-primary/10 text-primary border-primary/20';
    case 'Atelier': return 'bg-success/10 text-success border-success/20';
    case 'Cérémonie': return 'bg-warning/10 text-warning border-warning/20';
    case 'Compétition': return 'bg-destructive/10 text-destructive border-destructive/20';
    default: return 'bg-muted text-muted-foreground';
  }
};

export default function Events() {
  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  return (
    <div className="min-h-screen px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2">Événements</h1>
            <p className="text-muted-foreground">Découvrez les événements à venir</p>
          </div>
          <Button className="shadow-glow-sm">
            <Plus className="w-4 h-4 mr-2" /> Créer
          </Button>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <h2 className="font-display text-xl font-semibold mb-4">À venir</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="glass glass-hover overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Date Card */}
                    <div className="w-20 md:w-24 bg-gradient-primary flex flex-col items-center justify-center p-4 text-primary-foreground">
                      <span className="text-2xl md:text-3xl font-bold">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="text-xs md:text-sm opacity-90">
                        {event.date.split(' ')[1]} {event.date.split(' ')[2]}
                      </span>
                    </div>
                    
                    {/* Event Details */}
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Badge variant="outline" className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                          <h3 className="font-semibold text-lg mt-2">{event.title}</h3>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {event.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {event.attendees} participants
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mt-4">
                        <Button size="sm">Participer</Button>
                        <Button size="sm" variant="outline">Plus d'infos</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-semibold mb-4 text-muted-foreground">Passés</h2>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <Card key={event.id} className="glass opacity-60">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
