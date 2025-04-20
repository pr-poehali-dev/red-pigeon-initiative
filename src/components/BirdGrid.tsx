import BirdCard from "@/components/BirdCard";

// Данные о птицах, занесенных в Красную книгу
const endangeredBirds = [
  {
    id: 1,
    name: "Стерх",
    latinName: "Grus leucogeranus",
    status: "На грани исчезновения",
    image: "/placeholder.svg",
    description: "Редкий вид журавлей, находящийся под угрозой исчезновения. Обитает в России, в основном в Якутии."
  },
  {
    id: 2,
    name: "Кречет",
    latinName: "Falco rusticolus",
    status: "Уязвимый",
    image: "/placeholder.svg",
    description: "Самый крупный из соколов, находится под угрозой исчезновения из-за браконьерства и разрушения среды обитания."
  },
  {
    id: 3,
    name: "Орлан-белохвост",
    latinName: "Haliaeetus albicilla",
    status: "Восстанавливающийся",
    image: "/placeholder.svg",
    description: "Крупная хищная птица из семейства ястребиных, обитающая в Евразии. Занесена в Красную книгу многих стран."
  }
];

const BirdGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-pigeon-dark">Птицы, нуждающиеся в защите</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Эти птицы находятся под угрозой исчезновения и включены в Красную книгу. Каждый из нас может внести вклад в их сохранение.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {endangeredBirds.map((bird) => (
            <BirdCard
              key={bird.id}
              name={bird.name}
              latinName={bird.latinName}
              status={bird.status}
              image={bird.image}
              description={bird.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BirdGrid;
