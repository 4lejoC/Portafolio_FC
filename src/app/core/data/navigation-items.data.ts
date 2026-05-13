import { NavigationItem } from '../models/site-page.model';
import { sectionPages } from './section-pages.data';

export const navigationItems: NavigationItem[] = sectionPages.map((page) => ({
  id: page.id,
  route: page.route,
  index: page.index,
  title: page.title,
  subtitle: page.subtitle,
  promise: page.promise,
  accent: page.accent,
  topicCount: page.topics.length
}));
