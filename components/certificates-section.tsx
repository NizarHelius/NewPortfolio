"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications and achievements that validate my expertise and commitment to continuous
            learning in web development.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Certifications</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                I hold various professional certifications in web development, Laravel, and modern JavaScript
                frameworks. Detailed certificates and references are available upon request.
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
                <Mail className="w-4 h-4 mr-2" />
                Request Certificates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Stats */}
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Skills Acquired</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
