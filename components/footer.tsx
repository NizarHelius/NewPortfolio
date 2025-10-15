"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Nizar Barhdadi</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Full-Stack Web Developer passionate about building scalable and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#certificates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Certificates
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-2 pt-2">
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
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:nizar.b.dev@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {currentYear} Nizar Barhdadi. Built with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" />{" "}
            using Next.js & Tailwind CSS
          </p>
          <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-full">
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
