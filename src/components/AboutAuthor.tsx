export const AboutAuthor = () => {
  return (
    <section className="bg-gray-100 text-black text-left rounded-3xl mt-8" id="about-author">
      <div className="font-semibold max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <h2 className="text-4xl lg:text-4xl font-bold mb-8 uppercase">
          ХТО Я ТАКИЙ І ЩО ЦЕ ЗА МІНІ КУРС
        </h2>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="flex items-start px-2">
            <p className="text-lg leading-relaxed">
              <span className="text-4xl inline-block mr-4">👋</span>
              Привіт! Мене звати&nbsp;
              <span className="relative inline-block">
                <span className="relative z-10">Кирило Петров</span>
                <span className="absolute bottom-0 left-0 w-full h-5 lg:h-5 bg-purple-300/40 -rotate-2"></span>
              </span>
              &nbsp;і я той, хто колись сам боровся з фінансовими труднощами, але зумів перетворити хаос у свою суперсилу. Моя історія почалася 7 років тому, коли я заробляв стабільну зарплату, але щоразу наприкінці місяця дивився на порожній гаманець і не розумів, куди зникли гроші. Звідти я й почав свій шлях — із простих таблиць, аналізу витрат і перших маленьких заощаджень.
            </p>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">За ці роки я:</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Розробив систему, яка допомагає бачити гроші як ресурс, а не проблему</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Пройшов від нуля до фінансової впевненості: створив резервний фонд, інвестував у власний розвиток і навіть почав допомагати іншим</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>Почав інветувати та побудував повноцінний портфель із різних активів</span>
              </li>
            </ul>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-lg leading-relaxed mb-6">
              Моя мета проста: показати тобі, що фінанси — це не складна наука, а інструмент для твого щасливого життя. Я сам живу за принципами, які викладаю, і знаю, як зробити цей процес цікавим і доступним.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              Моя найбільша гордість — коли мої учні пишуть: "Кирило, я вперше відклала 50000 грн!" або "Твій дашборд змінив мій підхід до грошей!"
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <p className="text-lg font-medium text-blue-900">
              Тож якщо ти готовий взяти свої фінанси у свої руки, я тут, щоб провести тебе від точки А до фінансової свободи. Давай зробимо це разом?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
