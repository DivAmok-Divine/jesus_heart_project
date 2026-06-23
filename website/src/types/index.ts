export type ProjectStatus = 'completed' | 'upcoming';

/** A measurable result shown as a stat card on a project. */
export interface ProjectStat {
  value: string;
  label: string;
}

/** A phase in a project timeline. */
export interface TimelinePhase {
  phase: string; // e.g. "Phase 1"
  title: string;
  detail: string;
}

/** A fundable line item from a project budget. */
export interface BudgetItem {
  label: string;
  amount: number;
  note?: string;
}

/** A program-specific impact giving level. */
export interface GivingTier {
  amount: number;
  title: string;
  impact: string;
  image?: string;
}

/** Fundraising progress for a project (placeholder figures until real data is provided). */
export interface ProjectFund {
  goal: number;
  raised: number;
  currency: string;
  donors?: number;
  placeholder?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  placeholder?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  date: string; // human readable, e.g. "14 September 2023"
  year: number; // for sorting
  location: string;
  /** Headline metric, e.g. "400 students" */
  metricLabel: string;
  metricValue: string;
  summary: string;
  tagline?: string;
  need?: string[]; // the problem / context this project addresses
  description: string[]; // paragraphs
  highlights: string[]; // key activities
  outcomes: string[];
  stats?: ProjectStat[]; // per-project impact numbers
  timeline?: TimelinePhase[]; // phased plan (mainly for upcoming projects)
  budget?: BudgetItem[]; // fundable line items
  budgetTotal?: number;
  budgetCurrency?: string;
  tiers?: GivingTier[]; // program-specific giving levels
  fund?: ProjectFund; // fundraising progress (placeholder until real)
  testimonial?: Testimonial;
  partnersInvolved?: string[];
  videoUrl?: string; // placeholder for a future project video
  cover: string;
  gallery: string[];
}

export type TeamCategory = 'founder' | 'team' | 'advisor';

export interface TeamMember {
  name: string;
  role: string;
  category: TeamCategory;
  bio: string;
  image?: string;
}

export interface CoreValue {
  title: string;
  description: string;
  /** lucide-react icon name */
  icon: string;
}

export interface ImpactStat {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

export interface Partner {
  name: string;
  short?: string;
  logo?: string;
  website?: string;
}
