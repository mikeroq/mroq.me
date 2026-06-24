import { Mail, MapPin } from "lucide-react"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.97 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.64-2.81 5.66-5.49 5.96.43.37.82 1.11.82 2.24v3.32c0 .32.21.69.83.58A12 12 0 0012 .5z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.94 8.5A1.56 1.56 0 116.94 5.38 1.56 1.56 0 016.94 8.5zM5.5 9.75h2.88v8.75H5.5zm4.68 0h2.76v1.2h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.45 1.92 3.45 4.41v4.64h-2.88v-4.11c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17v4.18h-2.88z" />
    </svg>
  )
}

import { ThemeToggle } from "@/components/ThemeToggle"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { profile } from "@/data/resume"

export function SiteHeader() {
  const email = `${profile.emailUser}@${profile.emailDomain}`

  return (
    <Card className="gap-0 p-0">
      <CardHeader className="border-b p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-5">
            <Badge variant="secondary" className="w-fit">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
                {profile.role}
              </span>
            </Badge>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Avatar size="lg" className="size-24 sm:size-28">
                <AvatarImage
                  src="/headshot.jpg"
                  alt={`Portrait of ${profile.name}`}
                />
                <AvatarFallback className="text-base">
                  MR
                </AvatarFallback>
              </Avatar>
              <div className="space-y-3">
                <CardTitle className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  <h1 className="text-inherit font-inherit">{profile.name}</h1>
                </CardTitle>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {profile.tagline}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
                <MapPin className="size-3.5" aria-hidden="true" />
                {profile.location}
              </Badge>
              <Button
                asChild
                variant="outline"
                className="h-7 rounded-full px-3 py-1.5 text-xs font-normal"
              >
                <a href={`mailto:${email}`} aria-label="Email Mike Roquemore">
                  <Mail className="size-3.5" aria-hidden="true" />
                  {email}
                </a>
              </Button>
            </div>
          </div>

          <CardAction className="self-start lg:self-auto">
            <ThemeToggle />
          </CardAction>
        </div>
      </CardHeader>

      <CardContent className="grid gap-3 p-6 sm:grid-cols-2">
        {profile.socials.map((social) => (
          <Button
            key={social.href}
            asChild
            variant="outline"
            className="h-auto justify-start gap-3 whitespace-normal rounded-none px-4 py-3 text-left"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${social.label} (opens in new tab)`}
            >
              <span
                aria-hidden="true"
                className="flex size-7 shrink-0 items-center justify-center rounded-none bg-muted text-muted-foreground"
              >
                {social.icon === "linkedin" ? (
                  <LinkedinIcon className="size-4" />
                ) : (
                  <GithubIcon className="size-4" />
                )}
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  {social.icon === "linkedin" ? "LinkedIn" : "GitHub"}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {social.label}
                </span>
              </span>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
