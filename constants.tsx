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
  Lightbulb,
  FlaskConical,
  Building2,
  FileText,
  MapPin
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Incubation Support',
    description: 'End-to-end support from idea validation and product roadmap to MVP development, go-to-market strategy, and scale-up.',
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Mentorship & Expertise',
    description: 'Access to domain experts, industry mentors, faculty researchers, and CXO-level founders for strategic and technical guidance.',
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Infrastructure',
    description: '5,100 sq. ft. dedicated space with cubicles, collaboration zones, meeting rooms, auditoriums, and prototyping lab access.',
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Funding Facilitation',
    description: 'Access to GoK grants, NAIN, SISF, BIRAC schemes, angel networks, VC connect, and investor demo days.',
    icon: <Banknote className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'IP & Legal Support',
    description: 'Patent filing guidance, technology transfer support, company incorporation, contracts, and regulatory compliance assistance.',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Ecosystem & Network',
    description: 'Industry collaborations across MedTech, AgriTech & foundry sectors, strong alumni network, and national/international exposure opportunities.',
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
];

// Contact link for application form
export const CONTACT_LINK = "mailto:arun.tigadi@klescet.ac.in";