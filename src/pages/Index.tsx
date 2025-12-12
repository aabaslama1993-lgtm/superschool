import { BookOpen, Users, FileText, Calendar, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const stats = [
  { label: "Cours actifs", value: "12", icon: BookOpen, trend: "+2 cette semaine" },
  { label: "Devoirs en cours", value: "5", icon: FileText, trend: "3 à rendre" },
  { label: "Messages", value: "24", icon: Users, trend: "8 non lus" },
  { label: "Événements", value: "3", icon: Calendar, trend: "Prochain: demain" },
];

const recentCourses = [
  { id: 1, title: "Mathématiques Avancées", progress: 75, instructor: "Prof. Martin" },
  { id: 2, title: "Physique Quantique", progress: 45, instructor: "Prof. Dubois" },
  { id: 3, title: "Programmation Python", progress: 90, instructor: "Prof. Bernard" },
];

const upcomingTasks = [
  { id: 1, title: "Devoir de maths", due: "2 jours", priority: "high" },
  { id: 2, title: "Projet de groupe", due: "5 jours", priority: "medium" },
  { id: 3, title: "Quiz de physique", due: "1 semaine", priority: "low" },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-50" />
        
        <div className="relative px-4 md:px-8 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Bienvenue sur <span className="text-gradient">EduConnect</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Votre plateforme d'apprentissage tout-en-un. Suivez vos cours, gérez vos devoirs et connectez-vous avec votre communauté.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 md:px-8 -mt-2">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="glass glass-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                      <p className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-primary mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {stat.trend}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Courses */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-semibold">Cours récents</h2>
                <Button variant="ghost" size="sm" asChild>
                  <NavLink to="/courses">Voir tout</NavLink>
                </Button>
              </div>
              <div className="space-y-4">
                {recentCourses.map((course, index) => (
                  <Card 
                    key={course.id} 
                    className="glass glass-hover animate-slide-up cursor-pointer"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">{course.progress}%</p>
                          <div className="w-20 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-semibold">À venir</h2>
                <Button variant="ghost" size="sm" asChild>
                  <NavLink to="/homework">Voir tout</NavLink>
                </Button>
              </div>
              <Card className="glass">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {upcomingTasks.map((task) => (
                      <div 
                        key={task.id} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          task.priority === 'high' ? 'bg-destructive' :
                          task.priority === 'medium' ? 'bg-warning' : 'bg-success'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{task.title}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {task.due}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
