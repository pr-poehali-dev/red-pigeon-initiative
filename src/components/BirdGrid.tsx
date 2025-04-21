import BirdCard from "@/components/BirdCard";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Данные о птицах, занесенных в Красную книгу
const endangeredBirds = [
  {
    id: 1,
    name: "Дрофа",
    latinName: "Otis tarda",
    status: "На грани исчезновения",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Great_Bustard_in_Obere_Lobau_%2824168641539%29.jpg",
    description: "Крупная птица из семейства дрофиных, обитающая в степях Евразии. Популяция стремительно сокращается.",
    fullDescription: "Дрофа — одна из самых тяжелых летающих птиц. Самцы могут весить до 16 кг. Обитает в открытых ландшафтах: степях, полупустынях и агроценозах. Особенно чувствительна к беспокойству в период гнездования.",
    habitat: "Степи и полупустыни Евразии, сельскохозяйственные угодья.",
    threats: [
      "Интенсивное сельское хозяйство и распашка степей",
      "Охота и браконьерство",
      "Гибель кладок и птенцов при сельхозработах",
      "Фрагментация ареала обитания"
    ]
  },
  {
    id: 2,
    name: "Розовый пеликан",
    latinName: "Pelecanus onocrotalus",
    status: "Уязвимый",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Great_white_pelican_%28Pelecanus_onocrotalus%29_Lake_Nakuru.jpg",
    description: "Крупная водоплавающая птица с характерным розоватым оперением и большим клювом с горловым мешком.",
    fullDescription: "Розовый пеликан — крупная птица с размахом крыльев до 3 метров. Отличается розоватым оперением, которое особенно ярко в брачный период. Живет колониями на мелководных озерах, лиманах и в дельтах рек.",
    habitat: "Мелководные озера, лиманы, дельты рек Южной Европы, Азии и Северной Африки.",
    threats: [
      "Разрушение водно-болотных угодий",
      "Беспокойство в местах гнездования",
      "Загрязнение водоемов",
      "Браконьерство"
    ]
  },
  {
    id: 3,
    name: "Змееяд",
    latinName: "Circaetus gallicus",
    status: "Редкий",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Circaetus_gallicus_-_Short-toed_Snake_Eagle%2C_Adana_2017-10-29_09-1.jpg",
    description: "Хищная птица средних размеров из семейства ястребиных, специализирующаяся на питании змеями.",
    fullDescription: "Змееяд — хищная птица с характерной крупной головой и ярко-желтыми глазами. Питается преимущественно змеями, ящерицами и другими рептилиями. Гнездится на деревьях, обычно в малодоступных лесных массивах.",
    habitat: "Лесные массивы рядом с открытыми пространствами в Европе, Азии и Северной Африке.",
    threats: [
      "Вырубка лесов",
      "Снижение численности рептилий",
      "Беспокойство в местах гнездования",
      "Браконьерство"
    ]
  },
  {
    id: 4,
    name: "Желтоклювая цапля",
    latinName: "Egretta eulophotes",
    status: "Исчезающий",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Chinese_Egret-%28Egretta_eulophotes%29-_Breeding_plumage_at_Bali_National_Park%2C_Bali%2C_Indonesia_%286%29.jpg",
    description: "Редкая белая цапля среднего размера с характерным желтым клювом и черными ногами.",
    fullDescription: "Желтоклювая цапля — изящная птица с чисто-белым оперением, желтым клювом и черными ногами. В брачный период на затылке и спине развиваются длинные украшающие перья. Гнездится колониями на прибрежных островах.",
    habitat: "Прибрежные водно-болотные угодья Восточной Азии.",
    threats: [
      "Разрушение прибрежных местообитаний",
      "Загрязнение вод",
      "Беспокойство в местах гнездования",
      "Незаконный отлов"
    ]
  },
  {
    id: 5,
    name: "Беркут",
    latinName: "Aquila chrysaetos",
    status: "Уязвимый",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Golden_Eagle_in_flight_-_5.jpg",
    description: "Крупный орел с темно-бурым оперением и золотистыми перьями на затылке и шее.",
    fullDescription: "Беркут — один из самых крупных орлов, с размахом крыльев до 2,3 метра. Отличается темно-бурым оперением и золотистыми перьями на затылке. Мощный хищник, питается средними и мелкими млекопитающими и птицами.",
    habitat: "Горные и лесные районы Евразии, Северной Америки и Северной Африки.",
    threats: [
      "Браконьерство",
      "Отравление свинцовой дробью",
      "Разрушение мест обитания",
      "Гибель на ЛЭП"
    ]
  },
  {
    id: 6,
    name: "Серая куропатка",
    latinName: "Perdix perdix",
    status: "Уязвимый",
    image: "https://cdn.poehali.dev/files/8d1226dd-ca31-4b60-a037-a01f67e5eef1.jfif",
    description: "Небольшая птица семейства фазановых, обитающая в степных и сельскохозяйственных ландшафтах.",
    fullDescription: "Серая куропатка — компактная птица с пестрым оперением и характерным ржаво-рыжим пятном на брюхе у самцов. Ведет оседлый образ жизни, питается семенами, молодыми побегами и насекомыми. Гнездится на земле.",
    habitat: "Степи, луга, поля и агроландшафты Европы и Западной Азии.",
    threats: [
      "Интенсивное сельское хозяйство",
      "Применение пестицидов",
      "Хищничество",
      "Суровые зимы"
    ]
  }
];

// Данные о оседлых птицах
const sedentaryBirds = [
  {
    id: 1,
    name: "Кайра",
    latinName: "Uria aalge",
    status: "Оседлый",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Common_Murre_RWD.jpg",
    description: "Морская птица из семейства чистиковых, обитающая на скалистых берегах северных морей.",
    fullDescription: "Кайра — крупная морская птица с темным верхом и белым низом. Отличный ныряльщик, может погружаться на глубину до 180 метров. Гнездится огромными колониями на скалистых обрывах. На суше довольно неуклюжа, но прекрасно плавает и ныряет.",
    habitat: "Скалистые побережья Северной Атлантики и Тихого океана.",
    threats: [
      "Нефтяные разливы",
      "Рыболовные сети",
      "Изменение климата",
      "Беспокойство в местах гнездования"
    ]
  },
  {
    id: 2,
    name: "Краснозобик",
    latinName: "Calidris ferruginea",
    status: "Оседлый",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Curlew_Sandpiper.jpg",
    description: "Небольшой куличок с длинным, слегка изогнутым клювом и яркой ржаво-красной окраской в брачный период.",
    fullDescription: "Краснозобик — изящный кулик среднего размера. В брачном наряде голова, шея и нижняя сторона тела приобретают насыщенный каштаново-красный цвет. Гнездится в тундрах Сибири, зимует в Африке, Южной Азии и Австралии.",
    habitat: "Гнездится в арктической тундре, на пролете и зимовке — на илистых отмелях морских побережий и внутренних водоемов.",
    threats: [
      "Разрушение местообитаний на путях миграции",
      "Загрязнение прибрежных зон",
      "Изменение климата",
      "Беспокойство на местах остановок"
    ]
  }
];

const BirdGrid = () => {
  const [activeTab, setActiveTab] = useState("endangered");
  const [themeClass, setThemeClass] = useState("");

  // Изменяем тему при смене вкладки
  useEffect(() => {
    if (activeTab === "sedentary") {
      setThemeClass("cold-theme");
    } else {
      setThemeClass("");
    }
  }, [activeTab]);

  return (
    <section id="rare-birds" className={`py-16 transition-colors duration-500 ${themeClass ? 'bg-blue-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${themeClass ? 'text-blue-300' : 'text-redbird'}`}>
          {activeTab === "sedentary" ? "Холодные воды — дом для оседлых птиц" : "Птицы, нуждающиеся в защите"}
        </h2>
        <p className={`text-center ${themeClass ? 'text-blue-200' : 'text-gray-600'} mb-8 max-w-3xl mx-auto`}>
          {activeTab === "sedentary" 
            ? "Эти птицы обитают в суровых морских условиях, где глубокие синие воды скрывают их пищу."
            : "Эти птицы находятся под угрозой или требуют нашего внимания. Каждый из нас может внести вклад в их сохранение."
          }
        </p>
        
        <Tabs 
          defaultValue="endangered" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full mb-8"
        >
          <TabsList className={`grid w-full max-w-md mx-auto grid-cols-2 ${themeClass ? 'bg-blue-800' : ''}`}>
            <TabsTrigger 
              value="endangered" 
              className={`text-lg ${themeClass ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white' : ''}`}
            >
              Красная книга
            </TabsTrigger>
            <TabsTrigger 
              value="sedentary" 
              className={`text-lg ${themeClass ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white' : ''}`}
            >
              Оседлые
            </TabsTrigger>
          </TabsList>
          <TabsContent value="endangered">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {endangeredBirds.map((bird) => (
                <BirdCard
                  key={bird.id}
                  name={bird.name}
                  latinName={bird.latinName}
                  status={bird.status}
                  image={bird.image}
                  description={bird.description}
                  fullDescription={bird.fullDescription}
                  habitat={bird.habitat}
                  threats={bird.threats}
                  theme=""
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sedentary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sedentaryBirds.map((bird) => (
                <BirdCard
                  key={bird.id}
                  name={bird.name}
                  latinName={bird.latinName}
                  status={bird.status}
                  image={bird.image}
                  description={bird.description}
                  fullDescription={bird.fullDescription}
                  habitat={bird.habitat}
                  threats={bird.threats}
                  theme="cold"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BirdGrid;
