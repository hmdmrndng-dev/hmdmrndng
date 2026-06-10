import { personal } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {personal.name}. Built with React &amp;
        Tailwind CSS.
      </p>
    </footer>
  )
}
