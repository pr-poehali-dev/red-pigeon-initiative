import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BirdCardProps {
  name: string;
  latinName: string;
  image: string;
  status: string;
  description: string;
}

const BirdCard = ({ name, latinName, status, image, description }: BirdCardProps) => {
  return (
    <Card className="bird-card overflow-hidden">
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
        <h3 className="text-lg font-bold text-pigeon">{name}</h3>
        <p className="text-sm italic text-gray-500 mb-2">{latinName}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-3">{description}</p>
        <Button 
          variant="outline" 
          className="w-full border-pigeon text-pigeon hover:bg-pigeon hover:text-white"
        >
          Узнать больше
        </Button>
      </CardContent>
    </Card>
  );
};

export default BirdCard;
