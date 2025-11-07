"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function Header() {
  const [activeSection, setActiveSection] = useState("resumo")
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["resumo", "introducao", "teoria", "resultados", "conclusao"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <nav className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("resumo")}
            className={`text-sm transition-colors hover:text-primary ${
              activeSection === "resumo" ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            Resumo
          </button>
          <button
            onClick={() => scrollToSection("introducao")}
            className={`text-sm transition-colors hover:text-primary ${
              activeSection === "introducao" ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            Introdução
          </button>
          <button
            onClick={() => scrollToSection("teoria")}
            className={`text-sm transition-colors hover:text-primary ${
              activeSection === "teoria" ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            Teoria
          </button>
          <button
            onClick={() => scrollToSection("resultados")}
            className={`text-sm transition-colors hover:text-primary ${
              activeSection === "resultados" ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            Resultados
          </button>
          <button
            onClick={() => scrollToSection("conclusao")}
            className={`text-sm transition-colors hover:text-primary ${
              activeSection === "conclusao" ? "text-primary font-bold" : "text-muted-foreground"
            }`}
          >
            Conclusão
          </button>
        </nav>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )
}
