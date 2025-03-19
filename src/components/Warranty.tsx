import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

export const Warranty = () => {
  return (
    <section className="bg-gray-100 text-black font-semibold text-left rounded-3xl mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
        <div className="flex items-center gap-4 mb-6">
          <FontAwesomeIcon
            icon={faShieldHalved}
            className="text-4xl text-purple-500"
            aria-hidden="true"
          />
          <h2 className="text-2xl text-black font-bold uppercase">Поверну гроші якщо курс не зайде</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg lg:text-xl">
            Я гарантую, що ти отримаєш максимальну користь від курсу. Але якщо ти не будеш задоволений, ти можеш повернути гроші впродовж 14 днів після покупки.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Безумовне повернення коштів протягом перших 14 днів</li>
            <li>Жодних складних процедур - просто напишіть у підтримку телеграм бота</li>
            <li>Повний доступ до всіх матеріалів курсу під час пробного періоду</li>
            <li>Можливість переконатися в якості навчання без ризику</li>
          </ul>
          <p className="text-lg font-medium mt-4">
            Моя мета - ваш успіх та задоволення від навчання. Я впевнений в якості свого курсу настільки, що готовий надати таку гарантію.
          </p>
        </div>
      </div>
    </section>
  );
};
