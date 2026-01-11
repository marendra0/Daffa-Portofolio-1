
import React from 'react';
import { Project, ProjectStatus, SocialLink } from './types';

export const MY_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Personal AI Assistant',
    description: 'A custom-built productivity agent powered by Gemini that manages my daily tasks.',
    status: ProjectStatus.IN_PROGRESS,
    tags: ['React', 'Gemini API', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/ai/600/400'
  },
  {
    id: '2',
    title: 'Minimalist Journal App',
    description: 'A clean, distractions-free markdown journaling platform for developers.',
    status: ProjectStatus.UPCOMING,
    tags: ['TypeScript', 'Supabase'],
    imageUrl: 'https://picsum.photos/seed/journal/600/400'
  },
  {
    id: '3',
    title: 'E-Commerce Dashboard',
    description: 'Analytics dashboard for managing multiple storefronts with real-time data.',
    status: ProjectStatus.COMPLETED,
    tags: ['Next.js', 'Chart.js', 'Prisma'],
    imageUrl: 'https://picsum.photos/seed/dash/600/400',
    link: 'https://github.com'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com', icon: '📸' },
  { platform: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { platform: 'GitHub', url: 'https://github.com', icon: '💻' }
];
