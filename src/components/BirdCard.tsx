import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

  return (
    <>
      <Card className="bird-card">
        <div className="bird-tag">{status}</div>
        <img 
          src={image} 
          alt={name} 
          className="bird-card-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <CardContent className="bird-card-content">
          <h3 className="text-lg font-bold text-redbird">{name}</h3>
          <p className="text-sm italic text-gray-500 mb-2">{latinName}</p>
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full border-redbird text-redbird hover:bg-redbird hover:text-white"
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
                  <p className="text-gray-700">
                    Поддержите программы сохранения редких видов и проекты по защите 
                    естественной среды обитания этих птиц.
                  </p>
                  <Button className="mt-4 bg-redbird hover:bg-redbird-dark">
                    Поддержать программу защиты
                  </Button>
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
