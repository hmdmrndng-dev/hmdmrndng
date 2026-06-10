import { IconSchool } from "@tabler/icons-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { education } from "@/data/portfolio"

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Education</h2>
        <p className="mb-12 text-muted-foreground">My academic background.</p>

        <div className="flex flex-col gap-6">
          {education.map((edu) => (
            <Card key={edu.institution}>
              <CardHeader className="pb-2">
                <div className="flex flex-col items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconSchool className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold uppercase">{edu.degree}{edu.units && `, ${edu.units} UNITS`}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span className="flex rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                    {edu.period} 
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {edu.details?.map((detail, index) => (
                    <li key={index}>{detail}</li>
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
