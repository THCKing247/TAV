export type Program = {
  id: string;
  anchorId: string;
  title: string;
  description: string;
  audience: string;
  href: string;
};

export const programs: Program[] = [
  {
    id: "events",
    anchorId: "community-events",
    title: "Community Events",
    description:
      "Flagship gatherings that bring neighbors together—resource fairs, block parties, youth showcases, and seasonal celebrations rooted in Pinellas Park pride.",
    audience: "Families, youth, seniors, and anyone who wants to plug into local culture.",
    href: "/events",
  },
  {
    id: "youth-family",
    anchorId: "youth-family",
    title: "Youth & Family Support",
    description:
      "Warm introductions to trusted programs, mentoring touchpoints, and family-friendly spaces where questions are welcomed and no one has to navigate systems alone.",
    audience: "Parents, caregivers, and young people seeking steady support.",
    href: "/programs#youth-family",
  },
  {
    id: "entrepreneurship",
    anchorId: "entrepreneurship",
    title: "Entrepreneurship Resources",
    description:
      "Workshops, pop-up showcases, and connector sessions that help side hustles grow into neighborhood assets—because local business is community strength.",
    audience: "Aspiring and early-stage entrepreneurs in the Tampa Bay area.",
    href: "/programs#entrepreneurship",
  },
  {
    id: "partnerships",
    anchorId: "partnerships",
    title: "Community Partnerships",
    description:
      "Collaborations with schools, faith communities, and civic organizations to multiply impact and keep resources flowing where they are needed most.",
    audience: "Organizations ready to co-create solutions with residents.",
    href: "/programs#partnerships",
  },
  {
    id: "outreach",
    anchorId: "outreach",
    title: "Local Outreach Initiatives",
    description:
      "Door-to-door listening, pop-up resource tables, and targeted outreach that meets people where they are—literally and figuratively.",
    audience: "Neighborhoods and groups that want proactive, respectful engagement.",
    href: "/programs#outreach",
  },
];
