import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  images: string[];
  highlights: string[];
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  description,
  images,
  highlights,
}) => {
  return (
    <div className="bg-white dark:bg-[#24221F] rounded-2xl border border-[#E3DFD7] dark:border-[#33302B] shadow-[0_4px_20px_rgba(44,41,38,0.03)] hover:shadow-[0_12px_30px_rgba(44,41,38,0.07)] overflow-hidden mb-10 transition-all duration-300">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {images.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl border border-[#E3DFD7]/60 dark:border-[#33302B]/60 shadow-sm"
    >
      <img
        src={img}
        alt={`${title} ${index + 1}`}
        className="w-full h-64 object-cover hover:scale-105 transition duration-300"
      />
    </div>
  ))}
</div>

      <div className="p-8 border-t border-[#E3DFD7]/40 dark:border-[#33302B]/40">
        {date && (
          <p className="text-xs font-mono font-bold text-[#3E5C4B] dark:text-[#88B098] uppercase tracking-widest mb-1">
            {date}
          </p>
        )}

        <h3 className="text-2xl md:text-3xl font-black text-[#2C2926] dark:text-[#F5F2ED] mt-2 tracking-tight">
          {title}
        </h3>

        <p className="mt-4 text-[#615C56] dark:text-[#A39E96] leading-relaxed text-sm">
          {description}
        </p>

        <div className="mt-6">
          <h4 className="font-bold text-sm text-[#2C2926] dark:text-[#F5F2ED] uppercase tracking-wider mb-2 font-mono">
            Highlights
          </h4>

          <ul className="list-disc ml-6 text-[#615C56] dark:text-[#A39E96] space-y-2 text-sm">
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCard;