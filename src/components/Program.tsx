export const Program = () => {
  const programSteps = [
    {
      title: "Старт",
      description: "Гроші як ресурс — змінюємо мислення, закладаємо базу"
    },
    {
      title: "Точка А",
      description: "Чесний аудит твоїх фінансів"
    },
    {
      title: "Прогноз на 10 років",
      description: "Що буде, якщо нічого не змінити?"
    },
    {
      title: "Таблиця витрат",
      description: 'Заводимо та вчимося її "читати"'
    },
    {
      title: "Аналіз та оптимізація",
      description: 'Знаходимо "дірки" і латаємо їх'
    },
    {
      title: "Активи та власність",
      description: "Усе під контролем у твоєму дашборді"
    },
    {
      title: "План дій",
      description: "Будуємо стратегію на майбутнє"
    },
    {
      title: "Підсумки та масштабування",
      description: "Закріплюємо результат і йдемо далі!"
    }
  ];

  return (
    <section className="bg-gray-100 text-black text-left rounded-3xl mt-8" id="program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <h2 className="text-4xl lg:text-4xl font-bold mb-8 uppercase">Програма міні-курсу</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-semibold mt-12 text-lg text-gray-700">
          Кожен тиждень — це крок до твоєї фінансової свободи. Готовий пройти цей шлях?
        </p>
      </div>
    </section>
  );
};
