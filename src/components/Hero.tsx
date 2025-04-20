import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-redbird to-redbird-dark text-white">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fly-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Спасем птиц вместе!
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Проект "Red Pigeon" направлен на сохранение популяций редких видов птиц, 
              занесенных в Красную книгу, и оказание помощи обычным городским голубям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-redbird hover:bg-gray-100"
              >
                Узнать больше
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Как помочь
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
