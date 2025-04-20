import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const PigeonHelp = () => {
  const { toast } = useToast();

  const handleVolunteerClick = () => {
    toast({
      title: "Стать волонтёром",
      description: "Привет! 👋 Стать волонтёром в Red Pigeon прямо сейчас не получится 😥, но не расстраивайтесь! Мы уже работаем над добавлением этой крутой возможности! 🤩 Оставайтесь с нами, скоро вы сможете помогать нам делать мир лучше! ✨",
      duration: 5000,
    });
  };

  const handleDonateClick = () => {
    toast({
      title: "Сделать пожертвование",
      description: "Прямо сейчас вы не можете сделать пожертвование на корм для наших птичек 😔. Но мы работаем над этим! Скоро вы сможете помочь нам заботиться о пернатых друзьях! 🐦 Оставайтесь с нами! ❤️",
      duration: 5000,
    });
  };

  return (
    <section id="pigeon-help" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="section-title">Помощь городским голубям</h2>
            <p className="text-gray-600 my-4">
              Городские голуби часто остаются без внимания, но на самом деле они нуждаются в нашей заботе не меньше, чем редкие виды. Red Pigeon активно участвует в программах помощи городским птицам.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Чем мы помогаем голубям</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Организуем безопасные кормушки в городских парках</li>
                  <li>Оказываем ветеринарную помощь раненым и больным птицам</li>
                  <li>Создаем информационные программы о правильном кормлении голубей</li>
                  <li>Боремся с мифами и предрассудками о городских птицах</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Как вы можете помочь</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Правильно кормите птиц (зерновые культуры вместо хлеба)</li>
                  <li>Сообщайте нам о раненых или больных голубях</li>
                  <li>Расскажите друзьям о важности заботы о городских птицах</li>
                  <li>Поддержите наши программы финансово или став волонтером</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button 
                  className="bg-redbird hover:bg-redbird-dark transition-colors duration-300"
                  onClick={handleDonateClick}
                >
                  Поддержать программу помощи голубям
                </Button>
                <Button 
                  variant="outline" 
                  className="border-redbird text-redbird hover:bg-redbird hover:text-white transition-colors duration-300"
                  onClick={handleVolunteerClick}
                >
                  Стать волонтёром
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Pigeon_in_Berlin.jpg" 
                alt="Городской голубь" 
                className="rounded-lg shadow-xl w-full object-cover max-h-[500px]"
              />
              <div className="absolute -bottom-4 -left-4 bg-redbird px-6 py-4 rounded-lg shadow-lg text-white">
                <p className="text-xl font-semibold">Более 200</p>
                <p className="text-sm">спасенных голубей за год</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PigeonHelp;
