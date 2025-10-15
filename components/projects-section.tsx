"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: "Frontend" | "Backend" | "Full Stack" | "SaaS"
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "Crovvu",
    description:
      "A modern social media platform built with Next.js and TypeScript, featuring real-time interactions, user authentication, and a responsive design.",
    longDescription:
      "A comprehensive social media platform that enables users to connect, share content, and interact in real-time. Built with modern web technologies, featuring user authentication, profile management, post creation, and real-time notifications. Implements responsive design principles for seamless experience across all devices.",
    image: "/crovvu-project.jpg",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Authentication"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: "2",
    title: "Culinary",
    description:
      "A recipe sharing and meal planning platform that helps users discover, save, and share their favorite recipes with a beautiful and intuitive interface.",
    longDescription:
      "An elegant recipe sharing platform designed for food enthusiasts. Users can discover new recipes, save their favorites, create meal plans, and share their culinary creations with the community. Features include advanced search filters, ingredient lists, step-by-step instructions, and nutritional information.",
    image: "/culinary-project.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "CSS"],
    category: "Full Stack",
    featured: true,
  },
  {
    id: "3",
    title: "FitFlow",
    description:
      "A comprehensive fitness tracking application that helps users monitor their workouts, set goals, and track their progress with detailed analytics.",
    longDescription:
      "A powerful fitness tracking application designed to help users achieve their health and fitness goals. Features include workout logging, progress tracking, goal setting, detailed analytics and charts, exercise library, and personalized workout recommendations. Built with a focus on user experience and data visualization.",
    image: "/fitflow-project.jpg",
    technologies: ["React", "TypeScript", "Chart.js", "Firebase", "Material-UI"],
    category: "Frontend",
    featured: false,
  },
  {
    id: "4",
    title: "Cozy Brew",
    description:
      "An e-commerce platform for coffee enthusiasts, featuring product catalog, shopping cart, and secure payment processing.",
    longDescription:
      "A fully-featured e-commerce platform tailored for coffee lovers. Includes product browsing with detailed descriptions, shopping cart functionality, user accounts, order history, secure payment integration, and admin dashboard for inventory management. Designed with a warm, inviting aesthetic that reflects the coffee culture.",
    image: "/cozy-brew-project.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    category: "Full Stack",
    featured: false,
  },
]

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="secondary" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
        {project.featured && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
        </div>

        <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [showAll, setShowAll] = useState(false)

  const categories = ["All", "Frontend", "Full Stack"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const displayedProjects = filteredProjects

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Built</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating expertise across different technologies and project types, from
            simple websites to complex SaaS applications.
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
