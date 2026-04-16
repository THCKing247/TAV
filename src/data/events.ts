export type CommunityEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

export const upcomingEvents: CommunityEvent[] = [
  {
    id: "spring-resource-jam",
    title: "Spring Community Resource Jam",
    date: "Saturday, May 17, 2026",
    time: "10:00 a.m. – 2:00 p.m.",
    location: "Pinellas Park, FL (venue TBA)",
    description:
      "A high-energy afternoon of local vendors, family activities, and on-site connections to housing, workforce, and wellness resources.",
    featured: true,
    ctaLabel: "Save the date",
    ctaHref: "/contact",
  },
  {
    id: "youth-voices",
    title: "Youth Voices Open Mic & Mentorship Meet-Up",
    date: "Friday, June 6, 2026",
    time: "5:30 p.m. – 8:00 p.m.",
    location: "Community partner site — details coming soon",
    description:
      "Young leaders take the mic while mentors and neighbors cheer them on. Light dinner provided; all ages welcome to support.",
    ctaLabel: "Volunteer for setup",
    ctaHref: "/get-involved",
  },
  {
    id: "main-street-market",
    title: "Main Street Micro-Enterprise Market",
    date: "Saturday, July 12, 2026",
    time: "9:00 a.m. – 1:00 p.m.",
    location: "Downtown Pinellas Park corridor",
    description:
      "Pop-up booths for homegrown businesses, live music, and quick coaching sessions for entrepreneurs ready to level up.",
    ctaLabel: "Request a booth",
    ctaHref: "/contact",
  },
];

export const flagshipEvent = upcomingEvents.find((e) => e.featured) ?? upcomingEvents[0];
