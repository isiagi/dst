// Aggregates searchable content from data files for the search bar

// About
import { aboutSectionData as aboutV1 } from '../../data/about-section/v1';
import { aboutSectionData as aboutV2 } from '../../data/about-section/v2';
// Services
import {
  serviceSectionData,
  dstServices,
} from '../../data/service-section/v1/service-list-page/index';
// Projects
import { projectSectionData as projectV1Home } from '../../data/project-section/v1/home-page';
import { projectSectionData as projectV1List } from '../../data/project-section/v1/list-page';
import { projectSectionData as projectV2Home } from '../../data/project-section/v2/home-page';
// Blogs
import { blogSectionData as blogV1 } from '../../data/blog-section/v1';
import { blogSectionData as blogV2 } from '../../data/blog-section/v2';
// FAQ
import { faqSectionData } from '../../data/faq-section/v1';
// Menu
import { menuItemsProps } from '../../data/layout/header/menu';

export interface SearchIndexItem {
  title: string;
  description?: string;
  href: string;
  type: string;
}

function fromAbout() {
  const items: SearchIndexItem[] = [];
  // v1
  if (aboutV1.sectionHeading) {
    items.push({
      title: aboutV1.sectionHeading.title,
      description: aboutV1.sectionHeading.description,
      href: '/about',
      type: 'about',
    });
  }
  if (aboutV1.description) {
    items.push({
      title: 'About DST',
      description: aboutV1.description,
      href: '/about',
      type: 'about',
    });
  }
  // v2
  if (aboutV2.sectionHeading) {
    items.push({
      title: aboutV2.sectionHeading.title,
      description: aboutV2.sectionHeading.description,
      href: '/about',
      type: 'about',
    });
  }
  return items;
}

function fromServices() {
  const items: SearchIndexItem[] = [];
  // serviceSectionData.services
  if (serviceSectionData.services) {
    for (const s of serviceSectionData.services) {
      items.push({
        title: s.title,
        description: s.description,
        href: s.slug,
        type: 'service',
      });
    }
  }
  // dstServices (detailed)
  if (dstServices) {
    for (const s of dstServices) {
      items.push({
        title: s.name,
        description: s.long || s.short,
        href: `/services/${s.name}`,
        type: 'service',
      });
      if (s.subsections) {
        for (const sub of s.subsections) {
          items.push({
            title: `${s.name}: ${sub.heading}`,
            description: sub.text,
            href: `/services/${s.name}`,
            type: 'service',
          });
        }
      }
    }
  }
  return items;
}

function fromProjects() {
  const items: SearchIndexItem[] = [];
  // v1 home
  if (projectV1Home.works) {
    for (const p of projectV1Home.works) {
      items.push({
        title: p.title,
        description: p.description,
        href: p.slug,
        type: 'project',
      });
    }
  }
  // v1 list
  if (projectV1List.works) {
    for (const p of projectV1List.works) {
      items.push({
        title: p.title,
        description: p.description,
        href: p.slug,
        type: 'project',
      });
    }
  }
  // v2 home
  if (projectV2Home.projects) {
    for (const p of projectV2Home.projects) {
      items.push({
        title: p.title,
        description: p.description,
        href: p.slug,
        type: 'project',
      });
    }
  }
  return items;
}

function fromBlogs() {
  const items: SearchIndexItem[] = [];
  // v1
  if (blogV1.blogs) {
    for (const b of blogV1.blogs) {
      items.push({
        title: b.title,
        description: b.image?.alt,
        href: b.slug,
        type: 'blog',
      });
    }
  }
  // v2
  if (blogV2.blogs) {
    for (const b of blogV2.blogs) {
      items.push({
        title: b.title,
        description: b.image?.alt,
        href: b.slug,
        type: 'blog',
      });
    }
  }
  return items;
}

function fromFaqs() {
  const items: SearchIndexItem[] = [];
  if (faqSectionData.faqItems) {
    for (const f of faqSectionData.faqItems) {
      items.push({
        title: f.question,
        description: f.answer,
        href: '/faq',
        type: 'faq',
      });
    }
  }
  return items;
}

function fromMenu() {
  const items: SearchIndexItem[] = [];
  for (const menu of menuItemsProps) {
    if ('subMenuItems' in menu && Array.isArray(menu.subMenuItems)) {
      for (const sub of menu.subMenuItems) {
        items.push({
          title: sub.label || menu.title,
          description: menu.title,
          href: sub.href,
          type: 'menu',
        });
      }
    } else if ('label' in menu && menu.label) {
      items.push({
        title: menu.label,
        description: '',
        href: menu.href,
        type: 'menu',
      });
    }
  }
  return items;
}

export const searchIndex: SearchIndexItem[] = [
  ...fromAbout(),
  ...fromServices(),
  ...fromProjects(),
  ...fromBlogs(),
  ...fromFaqs(),
  ...fromMenu(),
];

export function searchContent(query: string): SearchIndexItem[] {
  if (!query) return [];
  const q = query.toLowerCase();
  return searchIndex.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
  );
}
