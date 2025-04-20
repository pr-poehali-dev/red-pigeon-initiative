import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake, Landmark, BookOpen } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake className="w-12 h-12 text-pigeon" />,
    title: "Поддержка и защита",
    description: "Мы помогаем защищать места обитания редких видов птиц и поддерживаем программы их сохранения."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-pigeon" />,
    title: "Информирование",
    description: "Распространяем информацию о видах, находящихся под угрозой исчезновения, и способах их сохранения."
  },
  {
    icon: <Landmark className="w-12 h-12 text-pigeon" />,
    title: "Научные исследования",
    description: "Поддерживаем научные проекты, направленные на изучение и сохранение популяций редких птиц."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-pigeon-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-pigeon-dark">Наша миссия</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
