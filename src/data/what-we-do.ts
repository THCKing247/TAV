export type WhatWeDoItem = {
  id: string;
  title: string;
  description: string;
  icon: "events" | "entrepreneurship" | "resources" | "outreach";
};

export const whatWeDo: WhatWeDoItem[] = [
  {
    id: "community-events",
    title: "Community Events",
    description:
      "Flagship gatherings that turn parking lots and parks into meeting grounds—music, resources, and real conversation.",
    icon: "events",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Support",
    description:
      "Showcases, coaching circles, and connector moments for neighbors building businesses that keep dollars local.",
    icon: "entrepreneurship",
  },
  {
    id: "resources",
    title: "Community Resources",
    description:
      "Warm handoffs, curated referrals, and on-site tables that help families find help without the runaround.",
    icon: "resources",
  },
  {
    id: "outreach",
    title: "Outreach & Partnerships",
    description:
      "Trusted collaborations with schools, civic groups, and grassroots leaders to extend reach block by block.",
    icon: "outreach",
  },
];
