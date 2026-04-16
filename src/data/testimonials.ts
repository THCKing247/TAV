export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "TAV doesn’t just announce an event—they build a whole vibe where you feel seen. My kids still talk about the resource fair.",
    attribution: "Neighborhood parent",
    context: "Pinellas Park",
  },
  {
    id: "2",
    quote:
      "As a small vendor, the market night put me in front of people who actually live here. That’s the kind of exposure money can’t buy.",
    attribution: "Local entrepreneur",
    context: "Tampa Bay",
  },
  {
    id: "3",
    quote:
      "They answer the phone like neighbors, not a call center. That grassroots energy is why I keep volunteering.",
    attribution: "Community volunteer",
    context: "Pinellas County",
  },
];
