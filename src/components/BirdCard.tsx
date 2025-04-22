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
  theme?: string;
}

const BirdCard = ({ 
  name, 
  latinName, 
  status, 
  image, 
  description,
  fullDescription,
  habitat,
  threats = [],
  theme = ""
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

  // Определяем классы в зависимости от темы
  const getThemeClasses = () => {
    if (theme === "cold") {
      return {
        card: "bg-blue-800 border-blue-700",
        tag: "bg-blue-600",
        title: "text-blue-300",
        latin: "text-blue-400",
        description: "text-blue-200",
        button: "border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white",
        dialog: {
          title: "text-blue-500",
          tag: "bg-blue-800 text-blue-300",
          section: "text-blue-600",
          content: "text-blue-700",
          primary: "bg-blue-600 hover:bg-blue-700",
          secondary: "border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
        }
      };
    } else if (theme === "yellow") {
      return {
        card: "bg-amber-100 border-amber-300",
        tag: "bg-amber-500",
        title: "text-amber-700",
        latin: "text-amber-600",
        description: "text-amber-800",
        button: "border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white",
        dialog: {
          title: "text-amber-600",
          tag: "bg-amber-100 text-amber-800",
          section: "text-amber-700",
          content: "text-amber-900",
          primary: "bg-amber-500 hover:bg-amber-600 text-white",
          secondary: "border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white"
        }
      };
    }
    
    return {
      card: "",
      tag: "bg-redbird",
      title: "text-redbird",
      latin: "text-gray-500",
      description: "text-gray-700",
      button: "border-redbird text-redbird hover:bg-redbird hover:text-white",
      dialog: {
        title: "text-redbird",
        tag: "bg-redbird-muted text-redbird",
        section: "text-gray-900",
        content: "text-gray-700",
        primary: "bg-redbird hover:bg-redbird-dark",
        secondary: "border-redbird text-redbird hover:bg-redbird hover:text-white"
      }
    };
  };

  const themeClasses = getThemeClasses();

  return (
    <>
      <Card className={`bird-card overflow-hidden ${themeClasses.card}`}>
        <div className={`bird-tag absolute top-3 right-3 z-10 ${themeClasses.tag} px-3 py-1 rounded-full text-white text-xs font-medium`}>{status}</div>
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
          <h3 className={`text-lg font-bold ${themeClasses.title}`}>{name}</h3>
          <p className={`text-sm italic ${themeClasses.latin} mb-2`}>{latinName}</p>
          <p className={`text-sm ${themeClasses.description} mb-4 line-clamp-3`}>{description}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className={`w-full ${themeClasses.button} transition-colors duration-300`}
              >
                Узнать больше
              </Button>
            </DialogTrigger>
            <DialogContent className={`sm:max-w-[600px] max-h-[90vh] overflow-y-auto ${
              theme === "cold" ? "bg-blue-100" : 
              theme === "yellow" ? "bg-amber-50" : 
              ""
            }`}>
              <DialogHeader>
                <DialogTitle className={themeClasses.dialog.title}>{name}</DialogTitle>
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
                <div className={`px-1 py-1 ${themeClasses.dialog.tag} font-medium inline-block rounded-md`}>
                  {status}
                </div>
                <div>
                  <h4 className={`font-semibold text-lg ${themeClasses.dialog.section}`}>Описание</h4>
                  <p className={themeClasses.dialog.content}>{fullDescription || description}</p>
                </div>
                {habitat && (
                  <div>
                    <h4 className={`font-semibold text-lg ${themeClasses.dialog.section}`}>Ареал обитания</h4>
                    <p className={themeClasses.dialog.content}>{habitat}</p>
                  </div>
                )}
                {threats && threats.length > 0 && (
                  <div>
                    <h4 className={`font-semibold text-lg ${themeClasses.dialog.section}`}>Угрозы виду</h4>
                    <ul className="list-disc pl-5">
                      {threats.map((threat, index) => (
                        <li key={index} className={themeClasses.dialog.content}>{threat}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className={`font-semibold text-lg ${themeClasses.dialog.section}`}>Как можно помочь</h4>
                  <p className={`${themeClasses.dialog.content} mb-4`}>
                    Поддержите программы сохранения редких видов и проекты по защите 
                    естественной среды обитания этих птиц.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className={themeClasses.dialog.primary}
                      onClick={handleDonateClick}
                    >
                      Сделать пожертвование
                    </Button>
                    <Button 
                      variant="outline" 
                      className={themeClasses.dialog.secondary}
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
