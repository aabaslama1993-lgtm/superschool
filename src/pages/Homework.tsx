import { FileText, Clock, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const homework = [
  { 
    id: 1, 
    title: "Exercices de calcul intégral", 
    course: "Mathématiques Avancées",
    dueDate: "14 Dec 2024",
    daysLeft: 2,
    status: "pending",
    priority: "high"
  },
  { 
    id: 2, 
    title: "Projet de groupe - IA", 
    course: "Intelligence Artificielle",
    dueDate: "18 Dec 2024",
    daysLeft: 6,
    status: "in-progress",
    priority: "medium"
  },
  { 
    id: 3, 
    title: "Quiz de révision", 
    course: "Physique Quantique",
    dueDate: "20 Dec 2024",
    daysLeft: 8,
    status: "pending",
    priority: "low"
  },
  { 
    id: 4, 
    title: "TP Python - Analyse de données", 
    course: "Programmation Python",
    dueDate: "10 Dec 2024",
    daysLeft: -2,
    status: "completed",
    priority: "high"
  },
  { 
    id: 5, 
    title: "Rapport de laboratoire", 
    course: "Chimie Organique",
    dueDate: "8 Dec 2024",
    daysLeft: -4,
    status: "late",
    priority: "high"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-success/10 text-success border-success/20';
    case 'in-progress': return 'bg-primary/10 text-primary border-primary/20';
    case 'late': return 'bg-destructive/10 text-destructive border-destructive/20';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Terminé';
    case 'in-progress': return 'En cours';
    case 'late': return 'En retard';
    default: return 'À faire';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-destructive';
    case 'medium': return 'bg-warning';
    default: return 'bg-success';
  }
};

export default function Homework() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display text-3xl font-bold mb-2">Devoirs</h1>
          <p className="text-muted-foreground">Gérez vos travaux et échéances</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold">{homework.filter(h => h.status === 'pending').length}</p>
                  <p className="text-xs text-muted-foreground">À faire</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-xl font-bold">{homework.filter(h => h.status === 'in-progress').length}</p>
                  <p className="text-xs text-muted-foreground">En cours</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xl font-bold">{homework.filter(h => h.status === 'completed').length}</p>
                  <p className="text-xs text-muted-foreground">Terminés</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass animate-slide-up" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="text-xl font-bold">{homework.filter(h => h.status === 'late').length}</p>
                  <p className="text-xs text-muted-foreground">En retard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Homework List */}
        <div className="space-y-4">
          {homework.map((item, index) => (
            <Card 
              key={item.id} 
              className="glass glass-hover animate-slide-up"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`w-1.5 h-full min-h-[60px] rounded-full ${getPriorityColor(item.priority)}`} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.course}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(item.status)}>
                        {getStatusLabel(item.status)}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.dueDate}</span>
                        {item.daysLeft > 0 && (
                          <span className="text-primary">({item.daysLeft} jours restants)</span>
                        )}
                      </div>
                      {item.status !== 'completed' && (
                        <Button size="sm" variant={item.status === 'late' ? 'destructive' : 'default'}>
                          {item.status === 'in-progress' ? 'Continuer' : 'Commencer'}
                        </Button>
                      )}
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
