export type Tier = "standard" | "premium";

export interface Practitioner {
  id: string;
  name: string;
  /** Short professional title, e.g. "Aesthetic Nurse Prescriber" */
  title: string;
  specialisms: string[];
  location: string;
  region: string;
  tier: Tier;
  bio: string;
  yearsExperience: number;
  initials: string;
}
