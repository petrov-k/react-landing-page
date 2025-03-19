interface SuitableForCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const SuitableForCard: React.FC<SuitableForCardProps> = ({ index, title, description, image, tags }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        {/* Heading */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="text-4xl font-bold">{title}</h3>
          <h3 className="text-lg font-semibold shrink-0 inline-block bg-gray-200 text-black px-4 py-1 rounded-2xl shadow-md">{String(index).padStart(2, '0')}</h3>
        </div>
        {/* Image */}
        <div className="w-full h-48 lg:h-64 mb-6">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-3xl" />
        </div>
        {/* Description  */}
        <div className="mb-6">
          <p className="text-lg lg:text-xl font-semibold">{description}</p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap items-start gap-2 mb-6">
          {tags.map((tag, index) => (
            <p key={index} className="text-sm lg:text-base font-semibold inline-block bg-gray-200 text-black px-3 py-1.5 rounded-2xl hover:bg-gray-300 transition-colors">{tag}</p>
          ))}
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-gray-500 mt-auto"></div>
      </div>
    </div>
  );
};
