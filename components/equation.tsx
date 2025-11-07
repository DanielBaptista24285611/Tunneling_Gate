"use client"

import { useEffect, useRef, useState } from "react"

interface EquationProps {
  children: string
}

export function Equation({ children }: EquationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && typeof window !== "undefined") {
      // Load MathJax dynamically
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
      script.async = true

      if (!document.querySelector('script[src*="mathjax"]')) {
        document.head.appendChild(script)
      }

      script.onload = () => {
        if (window.MathJax) {
          window.MathJax.typesetPromise?.()
        }
      }
    }
  }, [isVisible])

  return (
    <div ref={ref} className={`equation transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="rounded-lg bg-muted/30 px-4 py-6">{children}</div>
    </div>
  )
}

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: () => Promise<void>
    }
  }
}
