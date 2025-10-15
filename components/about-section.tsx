"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap, Languages } from "lucide-react"

export function AboutSection() {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" },
    { name: "German", level: "Basic" },
    { name: "Arabic", level: "Native" },
  ]

  const timeline = [
    {
      year: "2024 - 2025",
      title: "Full-Stack Developer",
      organization: "Ecole Professionnelle d'Informatique et de Management (EPIM)",
      type: "work",
      description: "Building and deploying full-stack web applications with modern technologies.",
    },
    {
      year: "2024 - 2025",
      title: "Full-Stack Developer (Intern / Project)",
      organization: "MedYouIn",
      type: "work",
      description: "Built MVP of a multi-tenant SaaS reservation platform using Laravel & MySQL.",
    },
    {
      year: "2023 - 2025",
      
      title: "Diploma in Full-Stack Web Development",
      organization: "EPIM, Meknès",
      type: "education",
      description: "Comprehensive training in modern web development technologies and best practices.",
    },
    {
      year: "2021 - 2022",
      title: "Baccalauréat",
      organization: "Tarik Ibn Ziad, Meknès",
      type: "education",
      description: "Completed secondary education with focus on sciences.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Junior Full-Stack Web Developer with hands-on experience building Laravel + MySQL web applications and
              responsive front-end interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Profile Card */}
            <Card className="p-6 lg:col-span-1 animate-fade-in-up self-start">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Meknes, Morocco</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Experience</p>
                        <p className="text-sm text-muted-foreground">2+ Years</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Education</p>
                        <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Languages</h3>
                  </div>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-6 lg:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold mb-6">Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-border last:pb-0">
                    <div
                      className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full ${
                        item.type === "work" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                        <Badge variant={item.type === "work" ? "default" : "secondary"} className="text-xs">
                          {item.type === "work" ? "Work" : "Education"}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-primary">{item.organization}</p>
                      <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Technologies Mastered</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
