import React from 'react';
import { Star, Monitor, Pen, Camera, Users, Code } from 'lucide-react';

const leads = [
  { name: 'Rashmi Halkarni',  role: 'Overall Lead',   icon: Star,    iconColor: 'text-amber-500',   iconBg: 'bg-amber-50 dark:bg-amber-900/20',    ring: 'ring-amber-300 dark:ring-amber-700' },
  { name: 'Arya Mane',        role: 'HR Lead',         icon: Users,   iconColor: 'text-indigo-500',  iconBg: 'bg-indigo-50 dark:bg-indigo-900/20',  ring: 'ring-indigo-300 dark:ring-indigo-700' },
  { name: 'Sneha Kolvekar',   role: 'Content Lead',    icon: Pen,     iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50 dark:bg-emerald-900/20',ring: 'ring-emerald-300 dark:ring-emerald-700' },
  { name: 'Akash Janawad',    role: 'Media Lead',      icon: Camera,  iconColor: 'text-rose-500',    iconBg: 'bg-rose-50 dark:bg-rose-900/20',      ring: 'ring-rose-300 dark:ring-rose-700' },
  { name: 'Sushil Chandaragi',role: 'Technical Lead',  icon: Code,    iconColor: 'text-blue-500',    iconBg: 'bg-blue-50 dark:bg-blue-900/20',      ring: 'ring-blue-300 dark:ring-blue-700' },
  { name: 'Adarsh Kapse',     role: 'Design Lead',     icon: Monitor, iconColor: 'text-violet-500',  iconBg: 'bg-violet-50 dark:bg-violet-900/20',  ring: 'ring-violet-300 dark:ring-violet-700' },
];

const teams = [
  {
    label: 'Technical Team',
    icon: Code,
    accent: 'border-blue-400 dark:border-blue-600',
    labelColor: 'text-blue-600 dark:text-blue-400',
    countBg: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    members: [
      'Sarvadnya Patil', 'Mahammadismail Y Quadri', 'Ummehani Maniyar',
      'Mohammed Adil', 'Ashish Bevinakatti', 'Omganesh Matiwade',
      'Vaibhav Chavan Patil', 'Nikhita Rajesh Patil', 'Risa Patil', 'Aishwarya D',
    ],
  },
  {
    label: 'Design Team',
    icon: Monitor,
    accent: 'border-violet-400 dark:border-violet-600',
    labelColor: 'text-violet-600 dark:text-violet-400',
    countBg: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
    members: [
      'Karan Jadhav', 'Darshan Patil', 'Srushti Honnagi',
      'Punyashree Mattad', 'Manyata Tegnale', 'Iqra Sanadi', 'Sanjana Mudalagi',
      'Gopalkrishna Tarale',
    ],
  },
  {
    label: 'Content Team',
    icon: Pen,
    accent: 'border-emerald-400 dark:border-emerald-600',
    labelColor: 'text-emerald-600 dark:text-emerald-400',
    countBg: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    members: [
      'Aadya Kulkarni', 'Vipul More',
      'Aymaan Sait', 'Aditi Kulkarni', 'Samiksha Yadav', 'Spoorthi C', 'Sarvesh Naik',
    ],
  },
  {
    label: 'Media Team',
    icon: Camera,
    accent: 'border-rose-400 dark:border-rose-600',
    labelColor: 'text-rose-600 dark:text-rose-400',
    countBg: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
    members: [
       'Vivek Mavinkatti', 'Vikas Koppad', 'Vikas Angadi',
      'Basavaraj Patil', 'Aditya Abdulpur', 'Chetan Walikar', 'Kshitij Jagajampi',
      'Niranjan Pawar', 'Vishal Malagi', 'Srusti Singadi', 'Shashank Iranatti',
    ],
  },
  {
    label: 'HR Team',
    icon: Users,
    accent: 'border-indigo-400 dark:border-indigo-600',
    labelColor: 'text-indigo-600 dark:text-indigo-400',
    countBg: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
    members: [
     'Ramkrishna Huddar', 'Pallavi Bhat', 'Keerti Mahantshetti',
      'Shamsher Patil', 'Rikhil Gopi', 'Salil', 'Darshan Kittur',
      'Spoorti Jarali', 'Ishan Bagewadi', 'Varsha Dandgall', 'Ranjita Shet', 'Siri Shet',
    ],
  },
];

const StudentTeam: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="mb-14">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">CNEST TBI 2025-26</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Student Team
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl">
            The student community behind CNEST.
          </p>
        </div>

        {/* --- LEADS --- */}
        <div className="mb-16">
          <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Team Leads
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {leads.map((lead) => {
              const Icon = lead.icon;
              return (
                <div
                  key={lead.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                >
                  {/* Photo placeholder */}
                  <div className={`w-20 h-20 rounded-full ring-2 ${lead.ring} ${lead.iconBg} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                    {/* Replace with <img> when photo is available */}
                    <Icon className={`w-8 h-8 ${lead.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm leading-snug">{lead.name}</p>
                    <p className={`text-xs mt-0.5 font-semibold ${lead.iconColor}`}>{lead.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- TEAMS --- */}
        <div className="space-y-12">
          <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            All Members
          </h2>

          {teams.map((team) => {
            const Icon = team.icon;
            return (
              <div key={team.label}>
                {/* Team heading */}
                <div className={`flex items-center gap-3 mb-5 pb-3 border-b-2 ${team.accent}`}>
                  <Icon className={`w-5 h-5 ${team.labelColor}`} />
                  <h3 className={`text-lg font-bold ${team.labelColor}`}>{team.label}</h3>
                  <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${team.countBg}`}>
                    {team.members.length} members
                  </span>
                </div>

                {/* Members grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {team.members.map((name, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
                    >
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-16">
          CNEST Student Body · Batch 2025 - 26 · KLE Technological University, Belagavi
        </p>

      </div>
    </div>
  );
};

export default StudentTeam;

