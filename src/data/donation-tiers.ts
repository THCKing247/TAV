export type DonationTier = {
  id: string;
  amount: string;
  title: string;
  impact: string;
};

export const donationTiers: DonationTier[] = [
  {
    id: "neighbor",
    amount: "$25",
    title: "Neighbor",
    impact: "Supplies for a community table, printing for resource handouts, or snacks for a youth night.",
  },
  {
    id: "builder",
    amount: "$75",
    title: "Builder",
    impact: "Equipment rentals, vendor stipends, or transportation support so families can attend flagship events.",
  },
  {
    id: "cornerstone",
    amount: "$250",
    title: "Cornerstone",
    impact: "Seed funding for a micro-grant, a workshop series slot, or a partnership activation in Pinellas Park.",
  },
  {
    id: "village-circle",
    amount: "$500+",
    title: "Village Circle",
    impact: "Sponsor-level visibility and deeper investment in outreach, entrepreneurship showcases, and year-round programming.",
  },
];
