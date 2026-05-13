import { SectionPageData } from '../models/site-page.model';
import { cybersecurityPage } from './cybersecurity-page.data';
import { governancePage } from './governance-page.data';
import { informationSecurityPage } from './information-security-page.data';
import { projectsPage } from './projects-page.data';
import { trainingPage } from './training-page.data';

export const sectionPages: SectionPageData[] = [
  projectsPage,
  cybersecurityPage,
  informationSecurityPage,
  governancePage,
  trainingPage
];
