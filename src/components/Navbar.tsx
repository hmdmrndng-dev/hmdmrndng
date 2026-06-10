import { useEffect, useRef, useState } from "react"
import { IconBrandGithub, IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { personal } from "@/data/portfolio"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [clickedLink, setClickedLink] = useState("")
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => {
    setClickedLink(id)
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    clickTimerRef.current = setTimeout(() => setClickedLink(""), 300)
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#about"
          className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          {personal.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            const isClicked = clickedLink === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "relative rounded-md px-3 py-1.5 text-sm transition-all duration-150 select-none",
                  "hover:bg-muted hover:text-foreground",
                  "active:scale-95",
                  isClicked && "scale-95",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary transition-all" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub className="size-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <IconSun className="size-4" />
            ) : (
              <IconMoon className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <IconX className="size-4" />
            ) : (
              <IconMenu2 className="size-4" />
            )}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-3 md:hidden">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            const isClicked = clickedLink === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-all duration-150 select-none",
                  "hover:bg-muted hover:text-foreground",
                  "active:scale-[0.97]",
                  isClicked && "scale-[0.97]",
                  isActive
                    ? "text-foreground font-medium bg-muted/50"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      )}
    </header>
  )
}
