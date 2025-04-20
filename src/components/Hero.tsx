import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-pigeon-dark text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fly-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Спасаем птиц вместе
          </h1>
          <p className="text-xl mb-8">
            Многие виды птиц находятся на грани исчезновения. Присоединяйтесь к нашей миссии по защите и сохранению птиц, занесённых в Красную книгу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-pigeon-dark hover:bg-pigeon-muted hover:text-pigeon-dark"
            >
              Как помочь
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
