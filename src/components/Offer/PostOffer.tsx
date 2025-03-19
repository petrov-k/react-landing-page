export const PostOffer = () => {
  return (
    <div className="mb-8 lg:mb-12">
      {/* Message */}
      <section className="bg-gray-100 text-black rounded-3xl mb-1 lg:mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-12 text-left flex items-start justify-between gap-6 lg:gap-12">
          <img
            src="images/IMG_3305_crop.png"
            alt="Привіт"
            className="w-24 lg:w-32 xl:w-40 aspect-square shadow-lg rounded-full object-cover"
          />
          <div className="text-sm lg:text-xl font-semibold flex-1">
            👋 Привіт! Я — Кирило, і за 7 років активного управління власними фінансами я не просто розібрався,
            куди йдуть мої гроші, а створив зручну систему, яка буквально "
            <span className="relative inline-block">
              <span className="relative z-10">відкриває очі"</span>
              <span className="absolute bottom-0 left-0 w-full h-3 lg:h-4 bg-purple-500/30 -rotate-2"></span>
            </span>
          </div>
        </div>
      </section>

      {/* Message block */}
      <section className="bg-gray-100 text-black rounded-3xl mb-1 lg:mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-12 text-left flex items-start justify-between gap-6 lg:gap-12">
          <div className="text-sm lg:text-xl font-semibold flex-1">
            Ця система вже допомогла десяткам людей побачити свої фінанси по-новому — і я вірю, що вона змінить твоє
            життя так само,
            <span className="relative inline-block">
              <span className="relative z-10"> як змінила моє!</span>
              <span className="absolute bottom-0 left-0 w-full h-3 lg:h-4 bg-red-500/30"></span>
            </span>
          </div>
          <img
            src="images/sheets.png"
            alt="Фінансові таблиці"
            className="w-16 lg:w-24 xl:w-24 shadow-lg rounded-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};
