import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface BirdCardProps {
  name: string;
  latinName: string;
  image: string;
  status: string;
  description: string;
  fullDescription?: string;
  habitat?: string;
  threats?: string[];
}

const BirdCard = ({ 
  name, 
  latinName, 
  status, 
  image, 
  description,
  fullDescription,
  habitat,
  threats = []
}: BirdCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <Card className="bird-card overflow-hidden">
        <div className="bird-tag absolute top-3 right-3 z-10 bg-redbird px-3 py-1 rounded-full text-white text-xs font-medium">{status}</div>
        <div className="overflow-hidden h-60 relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>
        <CardContent className="bird-card-content p-5">
          <h3 className="text-lg font-bold text-redbird">{name}</h3>
          <p className="text-sm italic text-gray-500 mb-2">{latinName}</p>
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full border-redbird text-redbird hover:bg-redbird hover:text-white transition-colors duration-300"
              >
                Узнать больше
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-redbird text-2xl">{name}</DialogTitle>
                <DialogDescription className="italic">{latinName}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-64 object-cover rounded-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="px-1 py-1 bg-redbird-muted rounded-md text-redbird font-medium inline-block">
                  {status}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Описание</h4>
                  <p className="text-gray-700">{fullDescription || description}</p>
                </div>
                {habitat && (
                  <div>
                    <h4 className="font-semibold text-lg">Ареал обитания</h4>
                    <p className="text-gray-700">{habitat}</p>
                  </div>
                )}
                {threats && threats.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-lg">Угрозы виду</h4>
                    <ul className="list-disc pl-5">
                      {threats.map((threat, index) => (
                        <li key={index} className="text-gray-700">{threat}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-lg">Как можно помочь</h4>
                  <p className="text-gray-700 mb-4">
                    Поддержите программы сохранения редких видов и проекты по защите 
                    естественной среды обитания этих птиц.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="bg-redbird hover:bg-redbird-dark transition-colors duration-300"
                      onClick={handleDonateClick}
                    >
                      Сделать пожертвование
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
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </>
  );
};

export default BirdCard;
