import { IconBriefcase } from "@tabler/icons-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { workExperience } from "@/data/portfolio"

export function WorkExperience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          Work Experience
        </h2>
        <p className="mb-12 text-muted-foreground">My professional journey.</p>

        <div className="flex flex-col gap-6">
          {workExperience.map((job) => (
            <Card key={`${job.company}-${job.period}`}>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconBriefcase className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold">{job.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
