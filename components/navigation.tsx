"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Nizar Barhdadi</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
