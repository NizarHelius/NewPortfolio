"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number
  icon: string
  category: "Frontend" | "Backend" | "Database" | "Tools"
  years: number
}

const skills: Skill[] = [
  { name: "HTML", level: 95, icon: "🌐", category: "Frontend", years: 4 },
  { name: "CSS", level: 95, icon: "🎨", category: "Frontend", years: 4 },
  { name: "JavaScript", level: 90, icon: "📘", category: "Frontend", years: 3 },
  { name: "React", level: 85, icon: "⚛️", category: "Frontend", years: 2 },
  { name: "Bootstrap", level: 90, icon: "💨", category: "Frontend", years: 4 },
  { name: "PHP", level: 88, icon: "🐘", category: "Backend", years: 2 },
  { name: "Laravel", level: 90, icon: "🔴", category: "Backend", years: 2 },
  { name: "Livewire", level: 85, icon: "⚡", category: "Backend", years: 1 },
  { name: "MySQL", level: 88, icon: "🐬", category: "Database", years: 2 },
  { name: "SQL", level: 85, icon: "💾", category: "Database", years: 2 },
  { name: "MongoDB", level: 88, icon: "🍃", category: "Database", years: 1 },
  { name: "Git", level: 90, icon: "📝", category: "Tools", years: 2 },
  { name: "Composer", level: 85, icon: "🎼", category: "Tools", years: 2 },
  { name: "FIGMA", level: 80, icon: "🖌️", category: "Tools", years: 1 },
  { name: "NPM", level: 85, icon: "📦", category: "Tools", years: 2 },
  { name: "Vercel", level: 80, icon: "▲", category: "Tools", years: 1 },
  { name: "cPanel", level: 75, icon: "🖥️", category: "Tools", years: 1 },
]

interface SkillCardProps {
  skill: Skill
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [skill.level, index])

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl">{skill.icon}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.years} years experience</p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {skill.category}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Proficiency</span>
            <span className="font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${animatedLevel}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const categories = ["All", "Frontend", "Backend", "Database", "Tools"]

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical skills and proficiency levels, built through years of hands-on
            experience and continuous learning.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">17</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
