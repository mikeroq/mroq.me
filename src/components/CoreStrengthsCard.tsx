import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { coreStrengths } from "@/data/resume"

export function CoreStrengthsCard() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b p-6">
        <CardTitle className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <h2 className="text-inherit font-inherit">Core Strengths</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2">
          {coreStrengths.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
