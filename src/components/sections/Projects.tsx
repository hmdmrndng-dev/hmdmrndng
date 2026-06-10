import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { projects } from "@/data/portfolio"
import StackIcon from "tech-stack-icons"

export function Projects() {
  return (
    <section id="projects" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mb-12 text-muted-foreground">Things I've built.</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <p className="font-semibold">{project.name}</p>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.items.map((item) => (
                    <StackIcon
                      key={item.name}
                      name={item.icon}
                      className="h-6"
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandGithub />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
