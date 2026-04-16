export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const contactFaq: FaqItem[] = [
  {
    id: "response-time",
    question: "How quickly will someone respond to my message?",
    answer:
      "We aim to reply within two business days. For urgent safety matters, please contact local emergency services.",
  },
  {
    id: "volunteer-age",
    question: "Can youth volunteer?",
    answer:
      "Yes—many roles welcome teens alongside an adult. Tell us your age range in the form and we will match opportunities appropriately.",
  },
  {
    id: "service-area",
    question: "Do you only serve Pinellas Park?",
    answer:
      "Our roots are in Pinellas Park, but we collaborate across Pinellas County and the wider Tampa Bay region when it strengthens community outcomes.",
  },
];
