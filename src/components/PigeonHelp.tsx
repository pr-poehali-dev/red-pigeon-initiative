import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PigeonHelp = () => {
  const helpMethods = [
    {
      title: "Подкормка в зимний период",
      description: "Зимой голубям особенно тяжело найти пищу. Правильная подкормка зерновыми смесями поможет им пережить холода.",
      icon: "🌾"
    },
    {
      title: "Оказание первой помощи",
      description: "Если вы нашли раненого или больного голубя, узнайте, как оказать ему первую помощь и куда обратиться.",
      icon: "🩹"
    },
    {
      title: "Создание голубятни",
      description: "Установка специальных домиков-голубятен в парках помогает птицам пережить непогоду и выводить потомство.",
      icon: "🏠"
    }
  ];

  return (
    <section id="help-pigeons" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h2 className="section-title">Помощь городским голубям</h2>
            <p className="text-gray-700 mb-6">
              Городские голуби, хоть и не относятся к редким видам, также нуждаются в нашей 
              заботе и внимании. Эти птицы страдают от урбанизации, недостатка пищи и 
              различных болезней.
            </p>
            <p className="text-gray-700 mb-6">
              Мы разработали программу поддержки городских голубей, которая включает в себя лечение, 
              реабилитацию больных особей и обустройство безопасных мест обитания.
            </p>
            <div className="space-y-4 mb-8">
              {helpMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-2xl">{method.icon}</div>
                  <div>
                    <h3 className="font-semibold text-redbird">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="bg-redbird hover:bg-redbird-dark">
              Стать волонтером
            </Button>
          </div>
          <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-white p-6 rounded-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-redbird">Центр реабилитации</h3>
              <p className="text-gray-700 mb-6">
                Наш центр реабилитации принимает травмированных и больных голубей. 
                Здесь они получают профессиональную ветеринарную помощь и шанс вернуться в природу.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-redbird-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-redbird">Что мы делаем</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-redbird" />
                      <span>Лечение травм и болезней</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-redbird" />
                      <span>Реабилитация и адаптация</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-redbird" />
                      <span>Возвращение в природу</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-redbird-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-redbird">Как помочь центру</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-redbird" />
                      <span>Денежные пожертвования</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-redbird" />
                      <span>Волонтерская помощь</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-redbird" />
                      <span>Материальная поддержка</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="Центр реабилитации голубей" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PigeonHelp;
