import { useEffect, useState } from "react"
import { IconArrowUp } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex size-10 items-center justify-center rounded-full",
        "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40",
        "active:scale-90 cursor-pointer",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <IconArrowUp className="size-4" />
    </button>
  )
}
