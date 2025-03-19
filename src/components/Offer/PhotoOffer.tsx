export const PhotoOffer: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-t from-black via-black/30 to-transparent bg-green-200 text-black rounded-3xl mb-1 overflow-hidden">
      <img
        src="/images/IMG_0673.png"
        alt="Міні курс з побудови власного фінансового плану"
        className="absolute right-[-25%] top-1/2 -translate-y-1/2 w-80 h-full object-cover z-0 sm:right-0 sm:w-96 md:w-[450px] lg:w-[500px]"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-red-500 mr-2 text-lg">❌</span>
            <span className="inline-block text-black text-lg bg-white px-2 py-1 rounded-xl shadow-md font-bold">БЕЗ хаосу</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2 text-lg">❌</span>
            <span className="inline-block text-black text-lg bg-white px-2 py-1 rounded-xl shadow-md font-bold">БЕЗ стресу</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2 text-lg">✅</span>
            <span className="inline-block text-black text-lg bg-white px-2 py-1 rounded-xl shadow-md font-bold">З повного нуля</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2 text-lg">✅</span>
            <span className="inline-block text-black text-lg bg-white px-2 py-1 rounded-xl shadow-md font-bold">Чіткий план,<br /> який працює</span>
          </div>
        </div>
        <div className="text-white text-sm leading-tight mt-10 w-3/4">
          <span className="font-bold text-lg">Я покажу, як за 5 тижнів організувати свої фінанси, зробити план і почати примножувати свої активи</span>
        </div>
      </div>
    </section>
  );
};
