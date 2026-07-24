import React, { useState } from 'react';
import { ArrowRight, Award, Building2, Code, Landmark, Linkedin, Mail, Monitor, Pen, Phone, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

type IconType = typeof Users;

type Person = {
  name: string;
  role: string;
  detail?: string;
};

const studentLeads: Array<{ name: string; role: string; icon: IconType; iconColor: string; iconBg: string; ring: string }> = [
  { name: 'Rashmi Halkarni', role: 'Overall Lead', icon: Star, iconColor: 'text-amber-500', iconBg: 'bg-amber-50 dark:bg-amber-900/20', ring: 'ring-amber-300 dark:ring-amber-700' },
  { name: 'Arya Mane', role: 'HR Lead', icon: Users, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-50 dark:bg-indigo-900/20', ring: 'ring-indigo-300 dark:ring-indigo-700' },
  { name: 'Sneha Kolvekar', role: 'Content Lead', icon: Pen, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50 dark:bg-emerald-900/20', ring: 'ring-emerald-300 dark:ring-emerald-700' },
  { name: 'Akash Janawad', role: 'Media Lead', icon: Award, iconColor: 'text-rose-500', iconBg: 'bg-rose-50 dark:bg-rose-900/20', ring: 'ring-rose-300 dark:ring-rose-700' },
  { name: 'Sushil Chandaragi', role: 'Technical Lead', icon: Code, iconColor: 'text-blue-500', iconBg: 'bg-blue-50 dark:bg-blue-900/20', ring: 'ring-blue-300 dark:ring-blue-700' },
  { name: 'Adarsh Kapse', role: 'Design Lead', icon: Monitor, iconColor: 'text-teal-500', iconBg: 'bg-teal-50 dark:bg-teal-900/20', ring: 'ring-teal-300 dark:ring-teal-700' },
];

const studentTeams = [
  { label: 'Technical Team', members: ['Sarvadnya Patil', 'Mahammadismail Y Quadri', 'Ummehani Maniyar', 'Mohammed Adil', 'Ashish Bevinakatti', 'Omganesh Matiwade', 'Vaibhav Chavan Patil', 'Nikhita Rajesh Patil', 'Risa Patil', 'Aishwarya D'] },
  { label: 'Design Team', members: ['Karan Jadhav', 'Darshan Patil', 'Srushti Honnagi', 'Punyashree Mattad', 'Manyata Tegnale', 'Iqra Sanadi', 'Sanjana Mudalagi', 'Gopalkrishna Tarale'] },
  { label: 'Content Team', members: ['Aadya Kulkarni', 'Vipul More', 'Aymaan Sait', 'Aditi Kulkarni', 'Samiksha Yadav', 'Spoorthi C', 'Sarvesh Naik'] },
  { label: 'Media Team', members: ['Vivek Mavinkatti', 'Vikas Koppad', 'Vikas Angadi', 'Basavaraj Patil', 'Aditya Abdulpur', 'Chetan Walikar', 'Kshitij Jagajampi', 'Niranjan Pawar', 'Vishal Malagi', 'Srusti Singadi', 'Shashank Iranatti'] },
  { label: 'HR Team', members: ['Ramkrishna Huddar', 'Pallavi Bhat', 'Keerti Mahantshetti', 'Shamsher Patil', 'Rikhil Gopi', 'Salil', 'Darshan Kittur', 'Spoorti Jarali', 'Ishan Bagewadi', 'Varsha Dandgall', 'Ranjita Shet', 'Siri Shet'] },
];

const committees: Record<string, { description: string; people: Person[] }> = {
  advisory: {
    description: 'Strategic guidance for CNEST from academic, industry, and Government of Karnataka representatives.',
    people: [
      { name: 'Dr. Praveen A. Ghorpade', role: 'Committee Member' },
      { name: 'Suhasini S', role: 'Committee Member' },
      { name: 'Rajendrakumar Harkuni', role: 'Committee Member' },
      { name: 'To Be Assigned', role: 'Government of Karnataka Representative', detail: 'Designated Government of Karnataka role.' },
    ],
  },
  governing: {
    description: 'The governing body provides institutional oversight and direction for CNEST.',
    people: [
      { name: 'Dr. S. F. Patil', role: 'Governing Body Member' },
      { name: 'Dr. Sachin Sabnis', role: 'Governing Body Member' },
      { name: 'To Be Assigned', role: 'KLE Technological University Representative', detail: 'Designated KLE Technological University role.' },
      { name: 'Dr. Arun Sadanand Tigadi', role: 'CEO, TBI' },
    ],
  },
  management: {
    description: 'The project management committee guides execution, coordination, and delivery of the TBI programme.',
    people: [
      { name: 'Dr. Uma Mudenagudi', role: 'Committee Member' },
      { name: 'Dr. D. A. Torse', role: 'Committee Member' },
      { name: 'Sanil Netalkar', role: 'Committee Member' },
      { name: 'Vinayak Hiremath', role: 'Committee Member' },
      { name: 'Ram Subramanian', role: 'Committee Member' },
      { name: 'Dr. Vinayak Hosamani', role: 'Committee Member' },
      { name: 'To Be Assigned', role: 'Government of Karnataka Representative', detail: 'Designated Government of Karnataka role.' },
      { name: 'Dr. Arun Sadanand Tigadi', role: 'CEO, TBI' },
    ],
  },
  recruitment: {
    description: 'The recruitment and selection committee oversees the selection process for CNEST positions and programmes.',
    people: [
      { name: 'To Be Assigned', role: 'Chairperson' },
      { name: 'To Be Assigned', role: 'Member Secretary' },
      { name: 'To Be Assigned', role: 'Committee Member' },
    ],
  },
};

const tabs: Array<{ id: string; label: string; icon: IconType }> = [
  { id: 'staff', label: 'CNEST Staff', icon: Users },
  { id: 'governing', label: 'Governing Body', icon: Building2 },
  { id: 'advisory', label: 'State Expert Advisory Committee', icon: Landmark },
  { id: 'management', label: 'Project Management Committee', icon: Users },
  { id: 'recruitment', label: 'Recruitment & Selection Committee', icon: Award },
  { id: 'students', label: 'Student Team', icon: Award },
];

const CommitteePanel: React.FC<{ committee: { description: string; people: Person[] } }> = ({ committee }) => (
  <div>
    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mb-8">{committee.description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {committee.people.map((person, index) => (
        <article key={`${person.role}-${index}`} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5"><Users className="w-5 h-5" /></div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{person.name}</h3>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">{person.role}</p>
          {person.detail && <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">{person.detail}</p>}
        </article>
      ))}
    </div>
  </div>
);

const StudentTeam: React.FC = () => {
  const [activeTab, setActiveTab] = useState('staff');

  useDocumentMetadata('Team & Governance | CNEST TBI', 'Meet the staff, student community, and governance committees guiding CNEST TBI.');

  const renderPanel = () => {
    if (activeTab === 'staff') {
      return <div className="max-w-6xl">
        <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="grid items-center gap-10 px-7 py-10 sm:px-10 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)] lg:gap-16 lg:px-14 lg:py-14">
            <div className="flex justify-center lg:justify-start">
              <div className="relative aspect-square w-full max-w-[20rem]">
                <div className="absolute inset-0 rounded-full border border-blue-500/70" aria-hidden="true" />
                <div className="absolute inset-3 rounded-full border border-cyan-400/80" aria-hidden="true" />
                <div className="absolute inset-6 overflow-hidden rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 p-[2px] shadow-[0_20px_45px_rgba(37,99,235,0.18)]">
                  <div className="h-full w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                    <img src="/arunsir.png" alt="Dr. Arun Sadanand Tigadi" className="h-full w-full scale-110 object-cover object-center" loading="lazy" />
                  </div>
                </div>
                <div className="absolute -left-4 top-1/4 h-20 w-20 rounded-full bg-blue-400/20 blur-2xl" aria-hidden="true" />
                <div className="absolute -bottom-2 right-0 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" aria-hidden="true" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">CNEST leadership</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white">Dr. Arun Sadanand Tigadi</h2>
              <p className="mt-3 text-base font-semibold text-blue-600 dark:text-blue-400">PI, CNEST TBI 2.0 · Associate Professor, Department of E&amp;C</p>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 lg:mx-0">Dr. Tigadi leads CNEST in supporting technology entrepreneurship and innovation in North Karnataka, helping bold ideas grow into meaningful ventures.</p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <a href="mailto:cnest.mss@kletech.ac.in" className="inline-flex items-center justify-center gap-2 text-gray-700 transition-colors hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-300">
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" /> cnest.mss@kletech.ac.in
                </a>
                <a href="tel:08312491836" className="inline-flex items-center justify-center gap-2 text-gray-700 transition-colors hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-300">
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" /> 0831-2491836
                </a>
                <a href="https://www.linkedin.com/in/dr-arun-sadanand-tigadi-2b024055/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-gray-700 transition-colors hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-300">
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" /> LinkedIn
                </a>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30">
                Connect with CNEST <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <article className="group relative min-h-[11.5rem] overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm transition-shadow hover:shadow-md dark:border-blue-900/50 dark:from-blue-950/30 dark:via-gray-800 dark:to-cyan-950/20">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-400/15 blur-2xl" aria-hidden="true" />
            <div className="relative flex items-center gap-5">
              <div className="shrink-0 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-500 p-[3px] shadow-lg shadow-blue-500/20">
                <img src="/sachin-sabnis.jpg" alt="Sachin Mulgund, CNEST Staff" className="h-24 w-24 rounded-full object-cover object-center" loading="lazy" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">CNEST Operaions Manager</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">Sachin Mulgund</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">Supporting the CNEST team and its innovation community.</p>
                <a href="https://www.linkedin.com/in/sachinmulgund?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-cyan-600 dark:text-blue-300 dark:hover:text-cyan-300">
                  <Linkedin className="h-4 w-4" /> View LinkedIn profile
                </a>
              </div>
            </div>
          </article>
          <article className="group relative min-h-[11.5rem] overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm transition-shadow hover:shadow-md dark:border-blue-900/50 dark:from-blue-950/30 dark:via-gray-800 dark:to-cyan-950/20">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-400/15 blur-2xl" aria-hidden="true" />
            <div className="relative flex items-center gap-5">
              <div className="shrink-0 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 p-[3px] shadow-lg shadow-blue-500/20">
                <img src="/namita.jpg" alt="Namita Prabhu, CNEST Staff" className="h-24 w-24 rounded-full object-cover object-center" loading="lazy" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">CNEST Outreach Manager</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">Namita Prabhu</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">Supporting the CNEST team and its innovation community.</p>
                <a href="https://www.linkedin.com/in/namita-prabhu-ba6523161?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-cyan-600 dark:text-blue-300 dark:hover:text-cyan-300">
                  <Linkedin className="h-4 w-4" /> View LinkedIn profile
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>;
    }
    if (activeTab === 'students') {
      return <div className="space-y-12">
        <div><h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Team Leads</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{studentLeads.map((lead) => { const Icon = lead.icon; return <article key={lead.name} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-gray-100 dark:border-gray-700"><div className={`w-20 h-20 rounded-full ring-2 ${lead.ring} ${lead.iconBg} flex items-center justify-center`}><Icon className={`w-8 h-8 ${lead.iconColor}`} /></div><div><p className="font-bold text-gray-900 dark:text-white text-sm">{lead.name}</p><p className={`text-xs mt-0.5 font-semibold ${lead.iconColor}`}>{lead.role}</p></div></article>; })}</div></div>
        <div className="space-y-10"><h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">All Members</h2>{studentTeams.map((team) => <section key={team.label}><div className="flex items-center gap-3 mb-5 pb-3 border-b-2 border-blue-200 dark:border-blue-800"><h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{team.label}</h3><span className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">{team.members.length} members</span></div><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">{team.members.map((name) => <div key={name} className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700"><p className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</p></div>)}</div></section>)}</div>
      </div>;
    }
    return <CommitteePanel committee={committees[activeTab]} />;
  };

  return <main className="pt-28 pb-20 min-h-screen bg-white dark:bg-gray-900"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><header className="mb-10"><p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">CNEST TBI</p><h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">Team &amp; Governance</h1><p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">The people, student community, and committees supporting CNEST.</p></header><div className="mb-10"><div className="flex flex-wrap gap-2" role="tablist" aria-label="Team and governance sections">{tabs.map((tab) => { const Icon = tab.icon; const selected = activeTab === tab.id; return <button key={tab.id} type="button" role="tab" aria-selected={selected} onClick={() => setActiveTab(tab.id)} className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${selected ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400'}`}><Icon className="w-4 h-4" />{tab.label}</button>; })}</div></div><section role="tabpanel">{renderPanel()}</section></div></main>;
};

export default StudentTeam;
