export interface SiteMetric {
  value: string;
  label: string;
  note: string;
}

export interface SectionTopic {
  title: string;
  summary: string;
  bullets: string[];
  standards: string[];
  note?: string;
}

export interface SectionPageData {
  id: string;
  route: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  topics: SectionTopic[];
  accent: string;
}

export interface NavigationItem {
  id: string;
  route: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  accent: string;
  topicCount: number;
}

export interface HomePageData {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  metrics: SiteMetric[];
}
