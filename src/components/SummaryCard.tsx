import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { summary } from "@/data/resume"

export function SummaryCard() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b p-6">
        <CardTitle className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <h2 className="text-inherit font-inherit">Professional Summary</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6 text-base leading-7 text-foreground/80">
        {summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  )
}
