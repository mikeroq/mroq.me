export type SkillPill = string

export type Experience = {
  title: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export type SkillGroup = {
  title: string
  body: string
}

export type ValueCard = {
  label: string
  body: string
}

export const profile = {
  name: "Mike Roquemore",
  role: "IT Generalist",
  location: "United States",
  emailUser: "me",
  emailDomain: "mikeroq.xyz",
  tagline:
    "IT professional with 15+ years of experience supporting users, systems, and operations across small business and multi-site environments.",
  socials: [
    {
      label: "linkedin.com/in/mikeroq",
      href: "https://www.linkedin.com/in/mikeroq/",
      icon: "linkedin" as const,
    },
    {
      label: "github.com/mikeroq",
      href: "https://github.com/mikeroq",
      icon: "github" as const,
    },
  ],
} as const

export const summary: string[] = [
  "Hands-on background in IT support, workstation deployment, Microsoft 365 administration, Entra ID, Intune, Active Directory, and Windows Server.",
  "Proven ability to build and support IT environments, manage device rollouts, troubleshoot complex issues, and serve as the primary IT resource or lead in lean organizations.",
  "Known for practical problem solving, strong ownership, and balancing daily support with systems administration and deployment work.",
]

export const coreStrengths: SkillPill[] = [
  "Microsoft 365",
  "Entra ID",
  "Intune",
  "Windows Server",
  "Active Directory",
  "Autopilot",
  "Deployment Automation",
  "Endpoint Support",
  "Vendor Coordination",
  "Procurement",
]

export const experiences: Experience[] = [
  {
    title: "IT Manager / Business Manager",
    org: "Respectful Partners, Inc. / Robert M. Greer Center",
    location: "Enid, OK",
    period: "Nov 2024 - Aug 2025",
    bullets: [
      "Led setup of the IT environment for a newly formed company assuming operations at the Robert M. Greer Center, establishing core systems, devices, and services needed for transition.",
      "Administered Microsoft 365 services including Exchange Online, Teams, SharePoint, Entra ID, and Universal Print, while configuring user accounts, groups, access, and single sign-on integrations.",
      "Supported deployment and management of approximately 100 computers, 60 mobile devices, and 5 copiers across a multi-building location using Intune and Autopilot.",
      "Assisted with selection, purchasing, and implementation of end-user hardware, mobile devices and plans, copier solutions, and business services including Freshservice, Adobe Acrobat, and eFax.",
      "Developed a workaround for printing and scan delivery in a restricted state-managed network environment using kiosk PCs, Universal Print, SharePoint, OneDrive, and Power Automate.",
      "Handled day-to-day financial tasks for an ICF/IID facility, including accounts payable and accounts receivable, reimbursement invoice and documentation submission to OKDHS, vendor contract and paperwork coordination, leadership updates, and monitoring bank accounts, debit cards, and transactions.",
    ],
  },
  {
    title: "IT Manager",
    org: "Supported Community Lifestyles (SCL)",
    location: "Ponca City, OK",
    period: "Mar 2022 - Feb 2025",
    bullets: [
      "Served as the sole internal IT resource for a multi-site organization supporting office locations, vocational sites, and group homes across four cities.",
      "Administered a mixed Windows environment including a central domain, file server, Active Directory, and Group Policy, while also supporting many standalone systems across remote sites.",
      "Developed and implemented MDT/WDS-based deployment processes to standardize builds, automate software installation, and apply user configurations and restrictions.",
      "Led a replacement project for approximately 55 computers across roughly 45 homes and office locations, handling imaging, deployment, data migration, and onsite printer setup.",
      "Managed hardware purchasing, vendor coordination, and technical planning while improving internal IT structure after the organization's prior reliance on outside providers.",
    ],
  },
  {
    title: "Freelance IT Support",
    org: "Independent Consulting",
    location: "Ponca City, OK",
    period: "Jul 2020 - Mar 2022",
    bullets: [
      "Provided ongoing IT support for former Midwest Computers business clients, continuing support relationships after the prior business closed.",
      "Supported small business environments with workstation troubleshooting, user support, printer issues, software setup, and general technical maintenance.",
      "Assisted with small Active Directory and Windows Server environments, including user accounts, shared resources, and basic administrative support.",
      "Performed onsite and remote support for hardware issues, operating system problems, software installs, and general business IT troubleshooting.",
    ],
  },
  {
    title: "Computer Technician",
    org: "Midwest Computers & More",
    location: "Ponca City, OK",
    period: "Aug 2011 - Jul 2020",
    bullets: [
      "Served as the primary technician in a mixed business IT support and computer repair environment, providing support for local businesses as well as hands-on repair and troubleshooting for end users.",
      "Supported multiple small business environments, including Active Directory domains, file shares, printers, workstations, user accounts, and general deskside and onsite technical issues.",
      "Rebuilt and migrated a small business domain environment, including user accounts, file shares, printers, data migration, and workstation cutover to a new domain with minimal disruption.",
      "Performed hardware replacement, operating system reloads, malware cleanup, software installation, and general troubleshooting across hundreds of customer and business systems.",
      "Worked independently for much of tenure, handling issues from front-line support through more advanced migration and systems work.",
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Identity",
    body: "Microsoft 365 Administration, Entra ID, Exchange Online, Microsoft Teams, SharePoint, Power Automate, Universal Print",
  },
  {
    title: "Endpoint Management & Deployment",
    body: "Intune, Windows Autopilot, MDT/WDS, desktop imaging, workstation deployment, mobile device management",
  },
  {
    title: "Systems Administration",
    body: "Active Directory, Windows Server, Group Policy, user account administration, file shares, printer deployment",
  },
  {
    title: "Support & Operations",
    body: "Hardware troubleshooting, software installation and support, printer/copier support, remote and onsite technical support, vendor coordination, hardware procurement, Freshservice",
  },
]

export const values: ValueCard[] = [
  {
    label: "Lean Team Leadership",
    body: "Comfortable operating as the primary IT resource, balancing strategic planning with frontline support.",
  },
  {
    label: "Deployment Focus",
    body: "Experienced with device rollouts, imaging, Intune enrollment, Autopilot, and environment standardization.",
  },
  {
    label: "Operational Ownership",
    body: "Strong follow-through across procurement, vendor management, user support, systems administration, and continuity work.",
  },
  {
    label: "Practical Problem Solving",
    body: "Known for turning constraints into workable systems, especially in small-business and distributed-site environments.",
  },
]
