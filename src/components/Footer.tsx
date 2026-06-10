import { personal } from "@/data/portfolio"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react"
import StackIcon from "tech-stack-icons"

const builtWith = [
  { name: "react", label: "React" },
  { name: "vitejs", label: "Vite" },
  { name: "tailwindcss", label: "Tailwind CSS" },
  { name: "shadcnui", label: "shadcn/ui" },
]

const deployedOn = [{ name: "vercel", label: "Vercel" }]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col items-center gap-6 text-center">
        <p className="text-sm text-muted-foreground">
          Character reference available upon request.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground/70">
          <span className="font-medium text-muted-foreground/90">Built with</span>
          <div className="flex items-center gap-2">
            {builtWith.map(({ name, label }) => (
              <span key={name} className="flex items-center gap-1">
                <StackIcon name={name} className="size-4" />
                <span>{label}</span>
              </span>
            ))}
          </div>
          <span className="font-medium text-muted-foreground/90">Deployed on</span>
          <div className="flex items-center gap-2">
            {deployedOn.map(({ name, label }) => (
              <span key={name} className="flex items-center gap-1">
                <StackIcon name={name} className="size-4" />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconBrandGithub className="size-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconBrandLinkedin className="size-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconMail className="size-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground/50">
          © {year} {personal.name}
        </p>
      </div>
    </footer>
  )
}
