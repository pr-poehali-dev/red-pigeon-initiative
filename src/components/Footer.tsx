import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pigeon-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Red Pigeon</h3>
            <p className="text-sm text-gray-300">
              Проект, направленный на защиту и сохранение птиц, занесённых в Красную книгу.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white">Главная</Link></li>
              <li><Link to="/birds" className="text-sm text-gray-300 hover:text-white">Птицы</Link></li>
              <li><Link to="/help" className="text-sm text-gray-300 hover:text-white">Как помочь</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">О проекте</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Связаться с нами</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">info@redpigeon.org</li>
              <li className="text-sm text-gray-300">+7 (999) 123-45-67</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Подписаться на новости</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-white/10 text-white px-3 py-2 rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-pigeon text-white px-4 py-2 rounded-r-md hover:bg-pigeon-light transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Red Pigeon. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
