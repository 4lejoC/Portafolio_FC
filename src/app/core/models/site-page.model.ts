export interface SiteMetric {
  value: string;
  label: string;
  note: string;
}

export interface HomeDifferentiator {
  title: string;
  summary: string;
}

export interface HomeProcessStep {
  index: string;
  title: string;
  summary: string;
}

export interface HomeEntryPoint {
  title: string;
  summary: string;
  route: string;
  label: string;
}

export interface SectionTopic {
  title: string;
  summary: string;
  bullets: string[];
  standards: string[];
  note?: string;
}

export interface DiagramNode {
  label: string;
  detail: string;
}

export interface SectionDiagram {
  eyebrow: string;
  title: string;
  summary: string;
  centerLabel: string;
  centerValue: string;
  nodes: DiagramNode[];
}

export interface SectionCallToAction {
  title: string;
  description: string;
  label: string;
}

export interface SectionPageData {
  id: string;
  route: string;
  index: string;
  title: string;
  subtitle: string;
  promise: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
  deliverables: string[];
  trustPoints: string[];
  topics: SectionTopic[];
  accent: string;
  diagram: SectionDiagram;
  cta: SectionCallToAction;
}

export interface NavigationItem {
  id: string;
  route: string;
  index: string;
  title: string;
  subtitle: string;
  promise: string;
  accent: string;
  topicCount: number;
}

export interface HomePageData {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: SiteMetric[];
  differentiators: HomeDifferentiator[];
  process: HomeProcessStep[];
  entryPoints: HomeEntryPoint[];
  closingTitle: string;
  closingDescription: string;
}
