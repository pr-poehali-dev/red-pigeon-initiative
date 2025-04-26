import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AIVision = () => {
  const aiImages = [
    {
      url: "https://cdn.poehali.dev/files/9db11738-189a-447d-8422-d31a0a133253.jpg",
      caption: "Наш сотрудник в фирменной красно-белой униформе Red Pigeon помогает птицам с кормлением. ИИ видит нашу миссию в заботе о пернатых друзьях!"
    },
    {
      url: "https://cdn.poehali.dev/files/f23f6c88-d5b9-45bf-b125-6363ffb4ffc4.jpg",
      caption: "Реабилитационный центр Red Pigeon в представлении ИИ. Мечта, которую мы стремимся воплотить в реальность для помощи птицам!"
    },
    {
      url: "https://cdn.poehali.dev/files/cb0db136-abc2-48c8-b759-c0a111569e5f.jpg",
      caption: "ИИ представляет наших специалистов, заботящихся о птицах. Профессиональная ветеринарная помощь - основа нашей работы по спасению пернатых."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-redbird mb-8">
          Как нас видит ИИ?
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 text-center mb-6">
            Искусственный интеллект создал эти изображения, отражающие его представление о нашей организации Red Pigeon.
            Интересно увидеть, как ИИ интерпретирует нашу миссию по защите и спасению птиц!
          </p>
        </div>
        
        <div className="grid gap-8 mb-12">
          {aiImages.map((image, index) => (
            <Card key={index} className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={image.url} 
                    alt={`ИИ изображение ${index + 1}`} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 md:w-1/2 flex items-center">
                  <p className="text-gray-700 text-lg">{image.caption}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-redbird mb-4">Интересный факт</h2>
          <p className="text-gray-700">
            Эти изображения были сгенерированы с помощью нейросетей и искусственного интеллекта. 
            Хотя они не отражают нашу реальную организацию на данный момент, 
            они показывают потенциал того, к чему мы стремимся в будущем - создать полноценный 
            реабилитационный центр для птиц с профессиональным штатом сотрудников.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIVision;
