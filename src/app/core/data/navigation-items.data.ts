import { NavigationItem } from '../models/site-page.model';
import { cybersecurityPage } from './cybersecurity-page.data';
import { governancePage } from './governance-page.data';
import { informationSecurityPage } from './information-security-page.data';
import { projectsPage } from './projects-page.data';
import { trainingPage } from './training-page.data';

const pages = [
  projectsPage,
  cybersecurityPage,
  informationSecurityPage,
  governancePage,
  trainingPage
];

export const navigationItems: NavigationItem[] = pages.map((page) => ({
  id: page.id,
  route: page.route,
  index: page.index,
  title: page.title,
  subtitle: page.subtitle,
  description: page.description,
  outcomes: page.outcomes,
  accent: page.accent,
  topicCount: page.topics.length
}));
