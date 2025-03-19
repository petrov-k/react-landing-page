import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Юридичні документи</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/policy"
                  className="text-gray-400 hover:text-white transition-colors underline"
                >
                  Політика конфіденційності
                </Link>
              </li>
              <li>
                <Link
                  to="/oferta"
                  className="text-gray-400 hover:text-white transition-colors underline"
                >
                  Договір оферти
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакти</h3>
            <p className="text-gray-400">
              ФОП Петров Кирило Олександрович<br />
              ІПН 3468905938<br />
              Email: kiraytbusiness@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Кирило Петров. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
