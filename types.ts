import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}