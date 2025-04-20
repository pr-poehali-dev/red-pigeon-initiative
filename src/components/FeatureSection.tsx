
import { Button } from "@/components/ui/button";
import { ShieldAlert, Heart, HelpCircle } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <ShieldAlert className="h-10 w-10 text-redbird" />,
      title: "Защита редких видов",
      description: "Мы боремся за сохранение редких и исчезающих видов птиц, занесенных в Красную книгу."
    },
    {
      icon: <Heart className="h-10 w-10 text-redbird" />,
      title: "Забота о городских птицах",
      description: "Оказываем помощь травмированным и больным городским голубям и другим птицам."
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-redbird" />,
      title: "Просветительская деятельность",
      description: "Проводим образовательные мероприятия для повышения осведомленности о проблемах птиц."
    }
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Наша миссия</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Проект "Red Pigeon" объединяет усилия орнитологов, волонтеров и неравнодушных граждан 
            для сохранения птиц и их естественной среды обитания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-redbird-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-redbird-muted p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-redbird-dark">Присоединяйтесь к нам!</h3>
              <p className="text-gray-700">
                Вместе мы можем сделать больше для защиты птиц и сохранения биоразнообразия. 
                Станьте частью нашей команды или поддержите проект финансово.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                className="bg-redbird hover:bg-redbird-dark text-white"
              >
                Стать волонтером
              </Button>
              <Button 
                variant="outline" 
                className="border-redbird text-redbird hover:bg-redbird hover:text-white"
              >
                Сделать пожертвование
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
