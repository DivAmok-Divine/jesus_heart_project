import type { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    name: 'Prince Kwakuvi Amaglo',
    role: 'Founder & Chief Executive Officer',
    category: 'founder',
    image: '/images/team/founder-1.jpg',
    bio: 'Prince is the visionary founder of The Jesus Heart Project. An entrepreneur, television producer, author and philanthropist, he serves as executive director of Atsu Prince A. Multimedia and is the author of “Church Media: The Art of Worship.” His humanitarian work reflects his deep Christian values and lifelong commitment to uplifting the underprivileged in northern Ghana.',
  },
  {
    name: 'Mark Gumah',
    role: 'Project Manager',
    category: 'team',
    image: '/images/team/project-manager.jpg',
    bio: 'Mark is the cornerstone of operational excellence, managing multiple concurrent projects with precision while building efficient systems that keep every initiative on track.',
  },
  {
    name: 'Marlene Gbedemah',
    role: 'Administrator',
    category: 'team',
    image: '/images/team/administrator.jpg',
    bio: 'Marlene is the organizational hub, ensuring seamless daily operations through meticulous attention to detail and strong administrative systems that support the whole team.',
  },
  {
    name: 'Valentine Ayine',
    role: 'Media Specialist',
    category: 'team',
    image: '/images/team/media-specialist.jpg',
    bio: 'Valentine leads the project’s media presence and communications, creating compelling content that increases visibility and tells the organization’s story to diverse audiences.',
  },
  {
    name: 'Selassie Michael Doli',
    role: 'Public Relations Manager',
    category: 'team',
    image: '/images/team/public-relations-manager.jpg',
    bio: 'Selassie manages the project’s public image and stakeholder relationships, building community partnerships and positive perception through strategic communication.',
  },
  {
    name: 'Esthela Yang',
    role: 'Human Resources Manager',
    category: 'team',
    image: '/images/team/human-resources-manager.jpg',
    bio: 'Esthela brings a people-centered approach to organizational development, focusing on talent management, team development and a positive workplace culture.',
  },
  {
    name: 'Pastor Emmanuel Konam',
    role: 'Field Officer',
    category: 'team',
    image: '/images/team/field-officer.jpg',
    bio: 'Pastor Emmanuel keeps the project rooted in the communities it serves, combining hands-on field experience with a pastoral heart to drive effective grassroots engagement.',
  },
  {
    name: 'Francisca Ackah Ndamani',
    role: 'Project Coordinator',
    category: 'team',
    image: '/images/team/project-coordinator.jpg',
    bio: 'Francisca is the organizational backbone of the team, coordinating multiple stakeholders and complex logistics to ensure initiatives are executed smoothly and on time.',
  },
  {
    name: 'Pastor Boaz Alhassan',
    role: 'Monitoring & Evaluation Officer',
    category: 'team',
    image: '/images/team/monitoring-evaluation-officer.jpg',
    bio: 'Pastor Boaz oversees monitoring and evaluation, tracking program performance and ensuring every initiative stays aligned with the organization’s mission and goals.',
  },
  {
    name: 'Pastor Chris Laar-Mong',
    role: 'Senior Advisory Team Member',
    category: 'advisor',
    image: '/images/team/advisor-1.jpg',
    bio: 'With over 10 years in ministry and community development, Pastor Chris advises on program design and rural development, helping initiatives meet both spiritual and practical goals.',
  },
  {
    name: 'Dr. Francis Addy',
    role: 'Senior Advisory Team Member',
    category: 'advisor',
    image: '/images/team/advisor-2.jpg',
    bio: 'Dr. Addy brings over 15 years of academic and practical experience in community development, program evaluation and evidence-based intervention design to the project’s strategy.',
  },
];

export const founder = team.find((m) => m.category === 'founder')!;
