import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-redbird-muted to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800 animate-fly-in">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <Button className="btn-redbird text-lg px-8 py-6 h-auto">
            {t('heroButton')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
