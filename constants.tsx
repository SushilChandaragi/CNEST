import React from 'react';
import { NavItem, ServiceItem, TeamMember } from './types';
import { 
  Rocket, 
  Banknote, 
  Users, 
  Megaphone, 
  PenTool, 
  Cpu, 
  Target,
  Lightbulb
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Seed Funding',
    description: 'Access to funding and seed capital to kickstart your venture and fuel early-stage growth.',
    icon: <Banknote className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Technical Expertise',
    description: 'Guidance from industry veterans in Science & Technology to build robust, scalable products.',
    icon: <Cpu className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'HR & Talent',
    description: 'Expert support in team building, human resources management, and talent acquisition.',
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Media & Publicity',
    description: 'Strategic branding, public relations, and media outreach to put your startup on the map.',
    icon: <Megaphone className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Content & Journaling',
    description: 'Professional content writing and documentation services to articulate your vision clearly.',
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Mentorship',
    description: 'One-on-one mentorship sessions with successful entrepreneurs and academic leaders.',
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Dr. Leader Name', role: 'Director', image: 'https://picsum.photos/200/200?random=1' },
  { name: 'Prof. Co-Lead', role: 'Head of Operations', image: 'https://picsum.photos/200/200?random=2' },
  { name: 'Expert Name', role: 'Technical Advisor', image: 'https://picsum.photos/200/200?random=3' },
  { name: 'Manager Name', role: 'Community Manager', image: 'https://picsum.photos/200/200?random=4' },
];

export const CONTACT_LINK = "https://forms.gle/BRL3qLoXRQyJ1vde6"; // Placeholder for Google Form