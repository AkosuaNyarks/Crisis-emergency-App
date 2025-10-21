export type CrisisResources = {
  id: string;
  name: string;
  phone: string;
  description: string;
  available: string;
  category: "general" | "domestic violence" | "suicide" | "lgbtq";
};

export const crisisResources: CrisisResources[] = [
  {
    id: "988",
    name: "988  Suicide and Crisis Lifeline",
    phone: "",
    description:
      "Talk to a counselor for emotional distress or suicidal crisis",
    available: "24/7- Free and confidential",
    category: "general",
  },
  {
    id: "domestic-violence",
    name: "National Domestic Violence Hotline",
    phone: "1-800-799-7233",
    description: "Support for domestic violence survivors and their loved ones",
    available: "24/7-Free, confidential , multilingual",
    category: "domestic violence",
  },
  {
    id: "crisis-text",
    name: "Crisis Text Line",
    phone: "741741",
    description:
      "Text HOME to connect with a trained crisis counselor for support",
    available: "24/7-Free and confidential",
    category: "general",
  },
  {
    id: "trevor",
    name: "Trevor Project (LGBTQ+ Youth)",
    phone: "1-866-488-7386",
    description: "Crisis intervention and sucided prevention for LGBTQ+ youth",
    available: "24/7 - Free Confidential",
    category: "lgbtq",
  },
];
