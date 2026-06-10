import {
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { personal, techStack } from "@/data/portfolio"
import StackIcon from "tech-stack-icons"
import avatarImg from "/albertwhisker.jpeg"

export function HeroSection() {
  return (
    <section id="about" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6 md:flex-row md:gap-4">
          {/* Left About Me (1/3) */}
          <div className="flex flex-col md:w-1/3 items-center">
            <div className="mb-5 flex size-40 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20">
              <img
                src={avatarImg}
                alt={personal.name}
                className="h-40 w-40 rounded-full object-cover"
              />
            </div>

            <h1 className="mb-1 text-2xl font-bold tracking-tight">
              {personal.name}
            </h1>
            <p className="mb-4 text-sm font-medium text-primary">
              {personal.role}
            </p>

            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" size="icon-sm" asChild>
                <a href={`mailto:${personal.email}`}>
                  <IconMail />
                </a>
              </Button>
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IconBrandGithub />
                </a>
              </Button>
              <Button variant="ghost" size="icon-sm" asChild>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin />
                </a>
              </Button>
            </div>
          </div>

          {/* Right � Tech Stack (2/3) */}
          <div id="tech-stack" className="flex-1">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-justify">
              Hi, I'm {personal.name}.
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              {personal.bio}
            </p>
            <p className="mb-8 font-bold">Technologies I work with.</p>

            <div className="flex flex-wrap gap-8">
              {techStack.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <StackIcon
                        key={item.name}
                        name={item.icon}
                        className="h-6"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:scale-95 active:shadow-md"
          >
            <span className="relative z-10">View My Projects</span>
            <IconArrowDown className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </section>
  )
}
