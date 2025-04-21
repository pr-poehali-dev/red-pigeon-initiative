import { WhatsApp, Phone, MapPin, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const handleContactClick = (type: string) => {
    if (type === "email") {
      toast(
        "К сожалению, у нас пока нет такого адреса электронной почты 😔. Мы активно развиваемся, следите за обновлениями! 🚀 Возможно, он появится в будущем! 📧",
        {
          duration: 5000,
        }
      );
    } else if (type === "address") {
      toast(
        "По этому адресу нас пока нет 🚧. Мы планируем расширяться! 🏘️ Следите за новостями, возможно, скоро мы будем и там! 🎉",
        {
          duration: 5000,
        }
      );
    }
  };

  const handleHelpClick = (type: string) => {
    if (type === "volunteer") {
      toast(
        "Привет! 👋 Стать волонтёром в Red Pigeon прямо сейчас не получится 😥, но не расстраивайтесь! Мы уже работаем над добавлением этой крутой возможности! 🤩 Оставайтесь с нами, скоро вы сможете помогать нам делать мир лучше! ✨",
        {
          duration: 5000,
        }
      );
    } else if (type === "donate") {
      toast(
        "Прямо сейчас вы не можете сделать пожертвование на корм для наших птичек 😔. Но мы работаем над этим! Скоро вы сможете помочь нам заботиться о пернатых друзьях! 🐦 Оставайтесь с нами! ❤️",
        {
          duration: 5000,
        }
      );
    } else if (type === "report") {
      toast(
        "К сожалению, сейчас мы не можем сообщить вам о найденной птичке 😔. Мы работаем над формой для таких сообщений! 📝 Пожалуйста, пока поищите информацию о помощи птицам в вашем регионе 📍 и следите за нашими обновлениями! 🕊️",
        {
          duration: 5000,
        }
      );
    } else if (type === "share") {
      toast(
        "К сожалению, сейчас нет возможности поделиться с нами информацией 😔. Мы работаем над разделом для ваших новостей и интересных фактов! 📝 Следите за обновлениями, и очень скоро вы сможете делиться своими знаниями! 🕊️",
        {
          duration: 5000,
        }
      );
    }
  };

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
                <WhatsApp size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-redbird-light transition-colors">
                <MessageSquare size={20} />
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
              <li>
                <button 
                  onClick={() => handleHelpClick("donate")} 
                  className="text-gray-400 hover:text-redbird-light transition-colors"
                >
                  Пожертвовать
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleHelpClick("volunteer")} 
                  className="text-gray-400 hover:text-redbird-light transition-colors"
                >
                  Стать волонтером
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleHelpClick("report")} 
                  className="text-gray-400 hover:text-redbird-light transition-colors"
                >
                  Сообщить о птице
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleHelpClick("share")} 
                  className="text-gray-400 hover:text-redbird-light transition-colors"
                >
                  Поделиться информацией
                </button>
              </li>
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
                <button 
                  onClick={() => handleContactClick("email")} 
                  className="flex items-start text-left"
                >
                  <Mail size={18} className="text-redbird-light mr-2 mt-1" />
                  <span className="text-gray-400">info@redpigeon.org</span>
                </button>
              </li>
              <li className="flex items-start">
                <button 
                  onClick={() => handleContactClick("address")} 
                  className="flex items-start text-left"
                >
                  <MapPin size={18} className="text-redbird-light mr-2 mt-1" />
                  <span className="text-gray-400">г. Москва, ул. Птичья, д. 123</span>
                </button>
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
