import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-redbird-light">Red Pigeon</h3>
            <p className="text-gray-400 mb-4">
              Проект по защите и сохранению редких видов птиц, а также помощи городским голубям.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">Главная</a></li>
              <li><a href="#rare-birds" className="text-gray-400 hover:text-redbird-light transition-colors">Редкие птицы</a></li>
              <li><a href="#help-pigeons" className="text-gray-400 hover:text-redbird-light transition-colors">Помощь голубям</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-redbird-light transition-colors">О проекте</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Как помочь</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">Пожертвовать</a></li>
              <li><a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">Стать волонтером</a></li>
              <li><a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">Сообщить о птице</a></li>
              <li><a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">Поделиться информацией</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-redbird-light mr-2 mt-1" />
                <span className="text-gray-400">+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-redbird-light mr-2 mt-1" />
                <span className="text-gray-400">info@redpigeon.org</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-redbird-light mr-2 mt-1" />
                <span className="text-gray-400">г. Москва, ул. Птичья, д. 123</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2023 Red Pigeon. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-redbird-light text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-500 hover:text-redbird-light text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
