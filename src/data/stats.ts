export type ImpactStat = {
  id: string;
  value: string;
  label: string;
  note?: string;
};

/** Placeholder figures — update when verified. */
export const impactStats: ImpactStat[] = [
  {
    id: "families",
    value: "500+",
    label: "Families served",
    note: "Through programs, referrals, and event connections",
  },
  {
    id: "events",
    value: "40+",
    label: "Community events hosted",
    note: "Neighborhood gatherings, resource fairs, and flagship celebrations",
  },
  {
    id: "partners",
    value: "25+",
    label: "Local partnerships",
    note: "Schools, small businesses, and civic groups",
  },
  {
    id: "volunteers",
    value: "120+",
    label: "Volunteers engaged",
    note: "Neighbors showing up to build something bigger together",
  },
];
