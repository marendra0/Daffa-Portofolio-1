
export enum ProjectStatus {
  COMPLETED = 'Live',
  IN_PROGRESS = 'In Progress',
  UPCOMING = 'Upcoming'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
