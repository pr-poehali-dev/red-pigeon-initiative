import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Updates = () => {
  const updates = [
    {
      id: 1,
      date: "15 ноября 2023",
      title: "Запуск проекта Red Pigeon",
      description: "Мы официально запустили наш проект по сохранению и защите редких видов птиц. Наш сайт теперь доступен для всех желающих узнать больше о птицах, занесенных в Красную книгу."
    },
    {
      id: 2,
      date: "3 января 2024",
      title: "Добавлен раздел о оседлых морских птицах",
      description: "Мы расширили нашу базу данных и добавили информацию о оседлых морских птицах, которые обитают в холодных водах и тоже нуждаются в нашем внимании."
    },
    {
      id: 3,
      date: "20 марта 2024",
      title: "Новый раздел - Желтая книга",
      description: "Мы создали раздел, посвященный птицам, которые пока не находятся под критической угрозой исчезновения, но требуют нашего внимания и заботы, чтобы не оказаться в Красной книге."
    },
    {
      id: 4,
      date: "5 апреля 2024", 
      title: "Создан раздел 'Спонсоры'",
      description: "Мы запустили новый раздел для тех, кто хочет поддержать наш проект. В будущем мы планируем создать реабилитационный центр для птиц с помощью наших спонсоров."
    },
    {
      id: 5,
      date: "12 апреля 2024",
      title: "Обновление интерфейса",
      description: "Мы улучшили интерфейс сайта, чтобы сделать его более удобным для пользователей. Теперь вы можете легко переключаться между различными категориями птиц."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-redbird text-center">Наши обновления</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="space-y-8">
            {updates.map((update) => (
              <div key={update.id} className="animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">{update.title}</h2>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">{update.date}</span>
                </div>
                <p className="mt-2 text-gray-600">{update.description}</p>
                <Separator className="mt-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Updates;
