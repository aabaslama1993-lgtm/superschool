import { BookOpen, Clock, Users, Play, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const courses = [
  { 
    id: 1, 
    title: "Mathématiques Avancées", 
    instructor: "Prof. Martin",
    progress: 75,
    lessons: 24,
    duration: "12h",
    students: 156,
    category: "Sciences",
    status: "in-progress"
  },
  { 
    id: 2, 
    title: "Physique Quantique", 
    instructor: "Prof. Dubois",
    progress: 45,
    lessons: 18,
    duration: "9h",
    students: 89,
    category: "Sciences",
    status: "in-progress"
  },
  { 
    id: 3, 
    title: "Programmation Python", 
    instructor: "Prof. Bernard",
    progress: 100,
    lessons: 32,
    duration: "16h",
    students: 234,
    category: "Informatique",
    status: "completed"
  },
  { 
    id: 4, 
    title: "Intelligence Artificielle", 
    instructor: "Prof. Leroy",
    progress: 20,
    lessons: 28,
    duration: "14h",
    students: 178,
    category: "Informatique",
    status: "in-progress"
  },
  { 
    id: 5, 
    title: "Chimie Organique", 
    instructor: "Prof. Moreau",
    progress: 0,
    lessons: 20,
    duration: "10h",
    students: 67,
    category: "Sciences",
    status: "not-started"
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display text-3xl font-bold mb-2">Mes Cours</h1>
          <p className="text-muted-foreground">Continuez votre apprentissage</p>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="glass animate-slide-up">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{courses.filter(c => c.status === 'in-progress').length}</p>
              <p className="text-sm text-muted-foreground">En cours</p>
            </CardContent>
          </Card>
          <Card className="glass animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-success">{courses.filter(c => c.status === 'completed').length}</p>
              <p className="text-sm text-muted-foreground">Terminés</p>
            </CardContent>
          </Card>
          <Card className="glass animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{courses.length}</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="glass glass-hover overflow-hidden animate-slide-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="h-2 bg-muted">
                  <div 
                    className="h-full bg-gradient-primary transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                        {course.status === 'completed' && (
                          <CheckCircle className="w-4 h-4 text-success" />
                        )}
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Play className="w-4 h-4" /> {course.lessons} leçons
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {course.students}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Progress value={course.progress} className="w-24 h-2" />
                      <span className="text-sm font-medium text-primary">{course.progress}%</span>
                    </div>
                    <Button size="sm" variant={course.progress === 100 ? "outline" : "default"}>
                      {course.progress === 0 ? "Commencer" : 
                       course.progress === 100 ? "Revoir" : "Continuer"}
                    </Button>
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
