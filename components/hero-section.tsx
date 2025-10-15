"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const { toast } = useToast()

  const downloadResume = async () => {
    try {
      const res = await fetch("/Nizar_Barhdadi_Resume.pdf")

      if (!res.ok) {
        throw new Error(
          "Resume not found. Please add 'Nizar_Barhdadi_Resume.pdf' to the project's /public folder."
        )
      }

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Nizar_Barhdadi_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (err: any) {
      console.error("Download resume error:", err)
      toast({
        title: "Download failed",
        description: err?.message || "Could not download resume. Make sure the PDF exists in /public.",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted -z-10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Nizar Barhdadi
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">Full-Stack Web Developer</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                Junior Full-Stack Web Developer with hands-on experience building Laravel + MySQL web applications and
                responsive front-end interfaces. Currently building a SaaS reservation platform as a final-year project.
                Fast learner, team player, and focused on shipping reliable features.
              </p>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-3">
              {["Laravel", "React", "JavaScript", "PHP", "MySQL", "Livewire", "Tailwind CSS"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/NizarHelius" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/nizar-barhdadi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={scrollToContact}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                <img
                  src="/professional-developer-headshot.png"
                  alt="Alex Johnson - Full-Stack Developer"
                  className="w-full h-full rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>

              {/* Floating skill icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">⚛️</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-2xl">🚀</span>
              </div>
              <div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
