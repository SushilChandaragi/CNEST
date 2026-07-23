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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-10">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {images.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-3xl shadow-lg"
    >
      <img
        src={img}
        alt={`${title} ${index + 1}`}
        className="w-full h-64 object-cover hover:scale-105 transition duration-300"
      />
    </div>
  ))}
</div>

      <div className="p-8">
        <p className="text-sm font-semibold text-blue-600">
          {date}
        </p>

        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2">
            Highlights
          </h4>

          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-2">
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