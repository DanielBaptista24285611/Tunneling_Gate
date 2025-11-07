// Theme toggle
const themeToggle = document.getElementById("theme-toggle")
const html = document.documentElement

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  html.classList.add("dark")
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark")
  const theme = html.classList.contains("dark") ? "dark" : "light"
  localStorage.setItem("theme", theme)
})

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      const headerOffset = 80
      const elementPosition = targetSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Active section highlighting
function updateActiveSection() {
  const sections = document.querySelectorAll("section[id]")
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("data-section") === sectionId) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", updateActiveSection)
window.addEventListener("load", updateActiveSection)
