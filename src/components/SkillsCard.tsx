import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { skillGroups } from "@/data/resume"

export function SkillsCard() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b p-6">
        <CardTitle className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <h2 className="text-inherit font-inherit">Technical Skills</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-6 text-sm leading-7 text-foreground/80 sm:text-base">
        {skillGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <h3 className="font-medium text-foreground">{group.title}</h3>
            <p>{group.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
