import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { experiences } from "@/data/resume"

export function ExperienceList() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b p-6">
        <CardTitle className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <h2 className="text-inherit font-inherit">Experience</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <div key={`${exp.org}-${exp.period}`}>
              {index > 0 && <Separator className="my-6" />}
              <article className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-base font-medium text-foreground/80">
                      {exp.org}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-3 text-sm leading-7 text-foreground/80 sm:text-base">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1 shrink-0 rounded-full bg-foreground/40"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
