import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIVision = () => {
  const visionImages = [
    {
      src: "https://cdn.poehali.dev/files/9db11738-189a-447d-8422-d31a0a133253.jpg",
      alt: "Сотрудник Red Pigeon с кормом для птиц",
      title: "Униформа сотрудников Red Pigeon",
      description: "ИИ видит наших сотрудников в фирменной одежде Red Pigeon, позаботившихся о качественном корме для птиц."
    },
    {
      src: "https://cdn.poehali.dev/files/f23f6c88-d5b9-45bf-b125-6363ffb4ffc4.jpg",
      alt: "Реабилитационный центр Red Pigeon",
      title: "Наш реабилитационный центр",
      description: "Здание реабилитационного центра Red Pigeon в представлении ИИ - небольшое белое здание с красным логотипом организации."
    },
    {
      src: "https://cdn.poehali.dev/files/cb0db136-abc2-48c8-b759-c0a111569e5f.jpg",
      alt: "Ветеринар лечит голубя",
      title: "Забота о пернатых пациентах",
      description: "Так ИИ видит процесс лечения птиц в нашей клинике - ветеринар в защитной маске оказывает помощь голубю."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Как нас видит ИИ?</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Современный искусственный интеллект создаёт уникальные визуальные интерпретации нашего реабилитационного центра и работы с птицами. Посмотрите, как ИИ представляет деятельность Red Pigeon!
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-64"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-700">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">О технологии ИИ-визуализации</h2>
          <p className="text-gray-700 mb-4">
            Искусственный интеллект создаёт изображения на основе текстовых описаний, используя нейросети, обученные на миллионах изображений. 
            Это позволяет ИИ формировать собственное "представление" о нашей организации и её деятельности.
          </p>
          <p className="text-gray-700">
            Хотя эти изображения являются синтетическими, они представляют интересный взгляд на то, как технологии интерпретируют нашу миссию по спасению и реабилитации птиц.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIVision;
