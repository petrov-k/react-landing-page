interface FAQ {
  question: string;
  answer: string;
}

export const Questions: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "А якщо я не розумію нічого у фінансах?",
      answer: "Не переживай! Ми почнемо з нуля, розберемо все просто і на прикладах. Ти навіть не помітиш, як станеш експертом у своїх грошах."
    },
    {
      question: "Чи вистачить у мене часу на курс?",
      answer: "Лише 2-3 години на тиждень — і ти вже бачиш результати. Гнучкий формат дозволяє вчитися навіть офісним працівникам, фрілансерам чи мамам у декреті!"
    },
    {
      question: "А якщо я заробляю мало?",
      answer: "Курс не про те, скільки ти маєш, а про те, як ефективно використовувати кожен гривеник. Навіть із невеликого доходу ти створиш фінансову подушку!"
    },
    {
      question: "Чи спрацює це для мене?",
      answer: "Так, якщо ти готовий діяти! Моя система уже допомогла сотням людей — і ти станеш наступним успіхом."
    },
    {
      question: "Що, якщо я не впораюся з таблицями чи дашбордом?",
      answer: "Я проведу тебе крок за кроком. Ти отримаєш готові шаблони, які зроблять усе максимально простим і наочним."
    }
  ];

  return (
    <section className="bg-gray-100 text-black text-left rounded-3xl mt-8" id="questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
        <div className="text-left mb-12">
          <h2 className="text-4xl lg:text-4xl font-bold mb-6 uppercase">НАЙЧАСТІШІ ЗАПИТАННЯ</h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Цей курс — твій перший крок до фінансової свободи, але, можливо, у тебе є питання.
            Ось що хвилює інших — і як я допоможу тобі:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-4 flex items-start">
                <span className="text-purple-500 mr-3 text-lg">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 text-base lg:text-lg ml-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
