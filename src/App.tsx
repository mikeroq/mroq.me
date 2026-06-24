import { CoreStrengthsCard } from "@/components/CoreStrengthsCard"
import { ExperienceList } from "@/components/ExperienceList"
import { SiteHeader } from "@/components/SiteHeader"
import { SkillsCard } from "@/components/SkillsCard"
import { SummaryCard } from "@/components/SummaryCard"
import { WhatIBringCard } from "@/components/WhatIBringCard"

export function App() {
  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <SiteHeader />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SummaryCard />
          <CoreStrengthsCard />
        </section>

        <ExperienceList />

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SkillsCard />
          <WhatIBringCard />
        </section>
      </div>
    </div>
  )
}

export default App
