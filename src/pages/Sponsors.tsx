import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sponsors = () => {
  const { toast } = useToast();
  const [isTestStarted, setIsTestStarted] = useState(false);

  const handleTestClick = () => {
    setIsTestStarted(true);
    toast({
      title: "Сообщение от Red Pigeon",
      description: "Мы всё ещё находимся в процессе развития и, к сожалению, пока не имеем собственного реабилитационного центра 😥. Прямая связь с нами сейчас ограничена, но не стоит грустить! 😊 Мы работаем над этим и мечтаем о создании такого центра! 💖🤩 Мы верим, что с вашей поддержкой мы сможем открыть такой центр! 🌟 Оставайтесь с нами, следите за обновлениями, и вскоре вы сможете стать нашим спонсором и внести свой вклад в спасение птиц! 🐦💪🕊️✨",
      duration: 10000,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-redbird text-center">Спонсоры проекта</h1>
        
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8 shadow-lg">
            <CardHeader className="bg-redbird-muted">
              <CardTitle className="text-2xl text-redbird">Стать спонсором Red Pigeon</CardTitle>
              <CardDescription>
                Ваша поддержка поможет нам защитить птиц, находящихся под угрозой исчезновения
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">
                Проект Red Pigeon стремится создать реабилитационный центр для птиц, где мы сможем:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Лечить и восстанавливать раненых и больных птиц</li>
                <li>Проводить исследования по сохранению видов</li>
                <li>Организовывать образовательные программы о важности сохранения птиц</li>
                <li>Разрабатывать и внедрять проекты по восстановлению природных местообитаний</li>
              </ul>
              <p className="font-medium">
                Мы должны полностью убедиться, что наша компания вам интересна, поэтому просим вас пройти небольшой тест.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Button 
                className="bg-redbird hover:bg-redbird-dark text-white px-8"
                onClick={handleTestClick}
              >
                Пройти тест
              </Button>
            </CardFooter>
          </Card>

          {isTestStarted && (
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-redbird">Спасибо за интерес к нашему проекту!</h2>
              <p className="mb-3">
                Мы ценим ваше желание помочь птицам. В настоящее время мы активно работаем над созданием 
                реабилитационного центра, который поможет множеству птиц получить необходимую помощь.
              </p>
              <p>
                Следите за нашими обновлениями, и вы узнаете, когда мы будем готовы принимать спонсорскую поддержку. 
                Вместе мы сможем сделать мир лучше для наших пернатых друзей!
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
