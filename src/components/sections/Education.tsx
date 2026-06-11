import * as React from "react"
import { IconSchool } from "@tabler/icons-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { education } from "@/data/portfolio"

export function Education() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Education</h2>
        <p className="mb-12 text-muted-foreground">My academic background.</p>

        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          className="px-12"
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          orientation="horizontal"
        >
          <CarouselContent>
            {education.map((edu) => (
              <CarouselItem key={edu.institution + edu.degree}>
                <Card
                  className={cn(
                    "h-full border-none",
                    edu.bg &&
                      `${edu.bg} bg-white/70 bg-cover bg-center bg-blend-overlay dark:bg-black/60`
                  )}
                >
                  <CardHeader className="pb-2">
                    <div className="flex flex-col items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <IconSchool className="size-4" />
                        </span>
                        <div>
                          <p className="font-semibold uppercase">
                            {edu.degree}
                            {edu.units && `, ${edu.units} UNITS`}
                          </p>
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
                  {edu.details && (
                    <CardContent>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        {edu.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {education.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
