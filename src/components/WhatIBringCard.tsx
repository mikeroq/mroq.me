import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { values } from "@/data/resume"

export function WhatIBringCard() {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b p-6">
        <CardTitle className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <h2 className="text-inherit font-inherit">What I Bring</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 p-6 sm:grid-cols-2">
        {values.map((value) => (
          <Card key={value.label} size="sm" className="gap-2 bg-muted/30 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {value.label}
            </p>
            <p className="text-sm leading-6 text-foreground/80">{value.body}</p>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
