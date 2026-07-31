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
  { name: 'Rashmi Halkarni', role: 'Overall Lead', icon: Star, iconColor: 'text-[#3E5C4B] dark:text-[#88B098]', iconBg: 'bg-[#E8ECE7] dark:bg-[#1E2B24]', ring: 'ring-[#3E5C4B]/30 dark:ring-[#88B098]/30' },
  { name: 'Arya Mane', role: 'HR Lead', icon: Users, iconColor: 'text-[#3E5C4B] dark:text-[#88B098]', iconBg: 'bg-[#E8ECE7] dark:bg-[#1E2B24]', ring: 'ring-[#3E5C4B]/30 dark:ring-[#88B098]/30' },
  { name: 'Sneha Kolvekar', role: 'Content Lead', icon: Pen, iconColor: 'text-[#3E5C4B] dark:text-[#88B098]', iconBg: 'bg-[#E8ECE7] dark:bg-[#1E2B24]', ring: 'ring-[#3E5C4B]/30 dark:ring-[#88B098]/30' },
  { name: 'Akash Janawad', role: 'Media Lead', icon: Award, iconColor: 'text-[#3E5C4B] dark:text-[#88B098]', iconBg: 'bg-[#E8ECE7] dark:bg-[#1E2B24]', ring: 'ring-[#3E5C4B]/30 dark:ring-[#88B098]/30' },
  { name: 'Sushil Chandaragi', role: 'Technical Lead', icon: Code, iconColor: 'text-[#3E5C4B] dark:text-[#88B098]', iconBg: 'bg-[#E8ECE7] dark:bg-[#1E2B24]', ring: 'ring-[#3E5C4B]/30 dark:ring-[#88B098]/30' },
  { name: 'Adarsh Kapse', role: 'Design Lead', icon: Monitor, iconColor: 'text-[#3E5C4B] dark:text-[#88B098]', iconBg: 'bg-[#E8ECE7] dark:bg-[#1E2B24]', ring: 'ring-[#3E5C4B]/30 dark:ring-[#88B098]/30' },
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
    ],
  },
  governing: {
    description: 'The governing body provides institutional oversight and direction for CNEST.',
    people: [
      { name: 'Dr. S. F. Patil', role: 'Governing Body Member' },
      { name: 'Dr. Sachin Sabnis', role: 'Governing Body Member' },
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
      { name: 'Dr. Arun Sadanand Tigadi', role: 'CEO, TBI' },
    ],
  },
  recruitment: {
    description: 'The recruitment and selection committee oversees the selection process for CNEST positions and programmes.',
    people: [
      { name: 'Dr. S. F. Patil', role: 'Member' },
      { name: 'Dr. B.B. Kotturshettar', role: 'Member' },
      { name: 'Dr. Manisha Tapale', role: 'Member' },
      { name: 'Dr. Vinayak Hosamani ', role: 'Member' },
      { name: 'Mr. Rakshit Kalyani', role: 'Member' },
      { name: 'Mr. Shankar', role: 'Member' },

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
    <p className="text-[#615C56] dark:text-[#A39E96] text-base max-w-3xl mb-8 font-normal">{committee.description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {committee.people.map((person, index) => (
        <article key={`${person.role}-${index}`} className="bg-white dark:bg-[#24221F] rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] p-6 shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] transition-all">
          <div className="w-11 h-11 rounded-xl bg-[#E8ECE7] dark:bg-[#1E2B24] text-[#2C4035] dark:text-[#A8C3B3] flex items-center justify-center mb-5"><Users className="w-5 h-5" /></div>
          <h3 className="font-black text-lg text-[#2C2926] dark:text-[#F5F2ED]">{person.name}</h3>
          <p className="text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] mt-1">{person.role}</p>
          {person.detail && <p className="text-xs text-[#615C56] dark:text-[#A39E96] mt-3 leading-relaxed">{person.detail}</p>}
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
        <article className="overflow-hidden rounded-2xl border border-[#E3DFD7] bg-white shadow-[0_4px_20px_rgba(44,41,38,0.03)] dark:border-[#33302B] dark:bg-[#24221F]">
          <div className="grid items-center gap-10 px-7 py-10 sm:px-10 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)] lg:gap-16 lg:px-14 lg:py-14">
            <div className="flex justify-center lg:justify-start">
              <div className="relative aspect-square w-full max-w-[20rem]">
                <div className="absolute inset-0 rounded-full border border-[#3E5C4B]/40" aria-hidden="true" />
                <div className="absolute inset-3 rounded-full border border-[#88B098]/40" aria-hidden="true" />
                <div className="absolute inset-6 overflow-hidden rounded-full bg-[#2C4035] p-[2px] shadow-lg">
                  <div className="h-full w-full overflow-hidden rounded-full bg-[#F7F5F0] dark:bg-[#171614]">
                    <img src="/arunsir.png" alt="Dr. Arun Sadanand Tigadi" className="h-full w-full scale-110 object-cover object-center" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#3E5C4B] dark:text-[#88B098]">CNEST leadership</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#2C2926] sm:text-4xl dark:text-[#F5F2ED]">Dr. Arun Sadanand Tigadi</h2>
              <p className="mt-2 text-sm font-semibold text-[#3E5C4B] dark:text-[#88B098]">PI, CNEST TBI 2.0 · Associate Professor, Department of E&amp;C</p>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#615C56] dark:text-[#A39E96] lg:mx-0">Dr. Tigadi leads CNEST in supporting technology entrepreneurship and innovation in North Karnataka, helping bold ideas grow into meaningful ventures.</p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <a href="mailto:cnest.mss@kletech.ac.in" className="inline-flex items-center justify-center gap-2 text-[#615C56] transition-colors hover:text-[#2C4035] dark:text-[#A39E96] dark:hover:text-[#88B098]">
                  <Mail className="h-4 w-4 text-[#3E5C4B] dark:text-[#88B098]" /> cnest.mss@kletech.ac.in
                </a>
                <a href="tel:08312491836" className="inline-flex items-center justify-center gap-2 text-[#615C56] transition-colors hover:text-[#2C4035] dark:text-[#A39E96] dark:hover:text-[#88B098]">
                  <Phone className="h-4 w-4 text-[#3E5C4B] dark:text-[#88B098]" /> 0831-2491836
                </a>
                <a href="https://www.linkedin.com/in/dr-arun-sadanand-tigadi-2b024055/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-[#615C56] transition-colors hover:text-[#2C4035] dark:text-[#A39E96] dark:hover:text-[#88B098]">
                  <Linkedin className="h-4 w-4 text-[#3E5C4B] dark:text-[#88B098]" /> LinkedIn
                </a>
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#2C4035] hover:bg-[#1E2B24] dark:bg-[#88B098] dark:hover:bg-[#A8C3B3] px-6 py-3.5 text-sm font-bold text-[#F7F5F0] dark:text-[#171614] shadow-md transition-all hover:-translate-y-0.5">
                Connect with CNEST <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <article className="group relative min-h-[11.5rem] overflow-hidden rounded-2xl border border-[#E3DFD7] bg-white p-8 shadow-[0_4px_20px_rgba(44,41,38,0.03)] transition-all hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] dark:border-[#33302B] dark:bg-[#24221F]">
            <div className="relative flex items-center gap-5">
              <div className="shrink-0 rounded-full bg-[#2C4035] p-[3px] shadow-md">
                <img src="/sachin-sabnis.jpg" alt="Sachin Mulgund, CNEST Staff" className="h-24 w-24 rounded-full object-cover object-center" loading="lazy" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#3E5C4B] dark:text-[#88B098]">CNEST Operations Manager</p>
                <h3 className="mt-1 text-2xl font-black text-[#2C2926] dark:text-[#F5F2ED]">Sachin Mulgund</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#615C56] dark:text-[#A39E96]">Supporting the CNEST team and its innovation community.</p>
                <a href="https://www.linkedin.com/in/sachinmulgund?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#3E5C4B] hover:underline dark:text-[#88B098]">
                  <Linkedin className="h-4 w-4" /> View LinkedIn profile
                </a>
              </div>
            </div>
          </article>
          <article className="group relative min-h-[11.5rem] overflow-hidden rounded-2xl border border-[#E3DFD7] bg-white p-8 shadow-[0_4px_20px_rgba(44,41,38,0.03)] transition-all hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] dark:border-[#33302B] dark:bg-[#24221F]">
            <div className="relative flex items-center gap-5">
              <div className="shrink-0 rounded-full bg-[#2C4035] p-[3px] shadow-md">
                <img src="/namita.jpg" alt="Namita Prabhu, CNEST Staff" className="h-24 w-24 rounded-full object-cover object-center" loading="lazy" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#3E5C4B] dark:text-[#88B098]">CNEST Outreach Manager</p>
                <h3 className="mt-1 text-2xl font-black text-[#2C2926] dark:text-[#F5F2ED]">Namita Prabhu</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#615C56] dark:text-[#A39E96]">Supporting the CNEST team and its innovation community.</p>
                <a href="https://www.linkedin.com/in/namita-prabhu-ba6523161?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#3E5C4B] hover:underline dark:text-[#88B098]">
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
        <div><h2 className="text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] uppercase tracking-widest mb-6">Team Leads</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{studentLeads.map((lead) => { const Icon = lead.icon; return <article key={lead.name} className="bg-white dark:bg-[#24221F] rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-[#E3DFD7] dark:border-[#33302B] shadow-sm"><div className={`w-16 h-16 rounded-full bg-[#E8ECE7] dark:bg-[#1E2B24] text-[#2C4035] dark:text-[#A8C3B3] flex items-center justify-center`}><Icon className="w-7 h-7" /></div><div><p className="font-bold text-[#2C2926] dark:text-[#F5F2ED] text-sm">{lead.name}</p><p className="text-xs mt-0.5 font-bold text-[#3E5C4B] dark:text-[#88B098]">{lead.role}</p></div></article>; })}</div></div>
        <div className="space-y-10"><h2 className="text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] uppercase tracking-widest">All Members</h2>{studentTeams.map((team) => <section key={team.label}><div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#E3DFD7] dark:border-[#33302B]"><h3 className="text-lg font-black text-[#2C2926] dark:text-[#F5F2ED]">{team.label}</h3><span className="ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E8ECE7] dark:bg-[#1E2B24] text-[#2C4035] dark:text-[#A8C3B3] border border-[#C5D1C8] dark:border-[#34483E]">{team.members.length} members</span></div><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">{team.members.map((name) => <div key={name} className="bg-white dark:bg-[#24221F] rounded-xl px-4 py-3 border border-[#E3DFD7] dark:border-[#33302B]"><p className="text-xs font-medium text-[#2C2926] dark:text-[#F5F2ED]">{name}</p></div>)}</div></section>)}</div>
      </div>;
    }
    return <CommitteePanel committee={committees[activeTab]} />;
  };

  return <main className="pt-28 pb-20 min-h-screen bg-[#F7F5F0] dark:bg-[#171614] transition-colors duration-300"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><header className="mb-10"><p className="text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] uppercase tracking-widest mb-2">CNEST TBI</p><h1 className="text-4xl md:text-5xl font-black text-[#2C2926] dark:text-[#F5F2ED] mb-3 tracking-tight">Team &amp; Governance</h1><p className="text-[#615C56] dark:text-[#A39E96] text-base max-w-2xl font-normal">The people, student community, and committees supporting CNEST.</p></header><div className="mb-10"><div className="flex flex-wrap gap-2" role="tablist" aria-label="Team and governance sections">{tabs.map((tab) => { const Icon = tab.icon; const selected = activeTab === tab.id; return <button key={tab.id} type="button" role="tab" aria-selected={selected} onClick={() => setActiveTab(tab.id)} className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 ${selected ? 'bg-[#2C4035] text-[#F7F5F0] dark:bg-[#88B098] dark:text-[#171614] shadow-sm' : 'bg-white dark:bg-[#24221F] text-[#615C56] dark:text-[#A39E96] border border-[#E3DFD7] dark:border-[#33302B] hover:bg-[#E8ECE7] dark:hover:bg-[#1E2B24]'}`}><Icon className="w-4 h-4" />{tab.label}</button>; })}</div></div><section role="tabpanel">{renderPanel()}</section></div></main>;
};

export default StudentTeam;
