export interface NavItem {
  label: string;
  path: string;
  sectionId?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', sectionId: 'home' },
  { label: 'About Us', path: '/about', sectionId: 'about-us' },
  { label: 'Programs', path: '/programs', sectionId: 'programs' },
  { label: 'STEM Lab Setup', path: '/stem-lab-setup', sectionId: 'stem-lab-setup' },
  { label: 'Gallery', path: '/gallery', sectionId: 'gallery' },
  { label: 'Blog / News', path: '/blog', sectionId: 'blog' },
  { label: 'Contact', path: '/contact', sectionId: 'contact' },
];

export const FOOTER_CURRICULUM_LINKS: NavItem[] = [
  { label: 'Programs Overview', path: '/programs' },
  { label: 'Robotics Module', path: '/programs#robotics' },
  { label: 'Aeronautics Module', path: '/programs#aeronautics' },
  { label: 'Programming & Coding', path: '/programs#programming' },
  { label: 'STEM Lab Setup for Schools', path: '/stem-lab-setup' },
];

export const FOOTER_INSTITUTE_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery Documentation', path: '/gallery' },
  { label: 'Blog & News', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
];
