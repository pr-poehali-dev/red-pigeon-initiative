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

// Данные о птицах Желтой книги
const yellowBookBirds = [
  {
    id: 1,
    name: "Черный аист",
    latinName: "Ciconia nigra",
    status: "Потенциально уязвимый",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flickr_-_Rainbirder_-_Black_Stork_%28Ciconia_nigra%29.jpg",
    description: "Крупная перелетная птица с черным оперением, красным клювом и ногами, избегающая человека.",
    fullDescription: "Черный аист — крупная птица с черным оперением с зеленоватым и пурпурным металлическим отливом. Грудь, брюхо и подхвостье белые. Клюв и ноги ярко-красные. В отличие от белого аиста, избегает соседства с человеком, селится в глухих лесах рядом с водоемами.",
    habitat: "Старые глухие леса Евразии, близ рек, озер, болот и пойменных лугов.",
    threats: [
      "Вырубка старых лесов",
      "Осушение болот и речных пойм",
      "Беспокойство в гнездовой период",
      "Браконьерство"
    ]
  },
  {
    id: 2,
    name: "Сокол-сапсан",
    latinName: "Falco peregrinus",
    status: "Восстанавливающийся",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Falco_peregrinus_good_-_Christopher_Watson.jpg",
    description: "Хищная птица, известная как самая быстрая в мире — при пикировании может развивать скорость до 320 км/ч.",
    fullDescription: "Сокол-сапсан — хищная птица средней величины с характерным темным 'усом' на щеках. Верх тела сизо-серый, низ светлый с поперечными пестринами. Сапсан способен развивать феноменальную скорость при пикировании — до 320 км/ч, что делает его самой быстрой птицей и самым быстрым животным на планете.",
    habitat: "Различные ландшафты от тундры до пустынь, часто гнездится на скалах и обрывах, в городах — на высотных зданиях.",
    threats: [
      "Применение пестицидов",
      "Незаконный отлов для соколиной охоты",
      "Разрушение мест гнездования",
      "Беспокойство в гнездовой период"
    ]
  },
  {
    id: 3,
    name: "Розовая чайка",
    latinName: "Rhodostethia rosea",
    status: "Редкий",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ross%27s_Gull_Rhodostethia_rosea.jpg",
    description: "Небольшая чайка с нежно-розовым оперением и клиновидным хвостом, гнездящаяся в арктической тундре.",
    fullDescription: "Розовая чайка — небольшая изящная птица с нежно-розовым оперением туловища, клиновидным хвостом и узким черным ошейником. Одна из самых редких и малоизученных чаек мира. Гнездится только в некоторых районах арктической тундры Сибири и Северной Америки.",
    habitat: "Арктическая тундра вблизи дельт рек и озер.",
    threats: [
      "Изменение климата",
      "Промышленное освоение Арктики",
      "Нефтяное загрязнение",
      "Ограниченный ареал гнездования"
    ]
  },
  {
    id: 4,
    name: "Розовый фламинго",
    latinName: "Phoenicopterus roseus",
    status: "Уязвимый",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Greater_flamingo_Walvis_Bay.jpg",
    description: "Крупная птица с длинной шеей, характерным изогнутым клювом и ярко-розовым оперением.",
    fullDescription: "Розовый фламинго — высокая птица с характерным изогнутым клювом и длинными ногами. Окраска варьирует от белой до ярко-розовой в зависимости от питания (каротиноиды в рачках придают перьям розовый цвет). Фламинго живут большими колониями, питаются, фильтруя воду изогнутым клювом.",
    habitat: "Мелководные соленые и щелочные озера, лагуны, солончаки Африки, Южной Европы и Азии.",
    threats: [
      "Осушение и загрязнение водоемов",
      "Изменение гидрологического режима",
      "Беспокойство в местах гнездования",
      "Браконьерство"
    ]
  },
  {
    id: 5,
    name: "Кудрявый пеликан",
    latinName: "Pelecanus crispus",
    status: "Потенциально уязвимый",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Dalmatian_Pelican_Breeding_Plumage_Bulgaria.jpg",
    description: "Крупная водоплавающая птица с характерным большим клювом и мешком для рыбы, серебристо-серым оперением и кудрявыми перьями на голове.",
    fullDescription: "Кудрявый пеликан — одна из крупнейших летающих птиц мира, с размахом крыльев до 3,5 метров. Имеет серебристо-серое оперение и характерные вьющиеся перья на голове и шее. Питается преимущественно рыбой, которую ловит, зачерпывая воду большим клювом с кожистым мешком.",
    habitat: "Мелководные пресные и солоноватые водоемы, дельты рек Южной Европы и Азии.",
    threats: [
      "Разрушение водно-болотных угодий",
      "Браконьерство",
      "Беспокойство в местах гнездования",
      "Загрязнение водоемов и сокращение рыбных запасов"
    ]
  }
];

// Данные о зимующих птицах
const winterBirds = [
  {
    id: 1,
    name: "Воробей",
    latinName: "Passer domesticus",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Passer_domesticus_male_%2815%29.jpg",
    description: "Маленькая и широко распространенная птица, хорошо приспособленная к жизни рядом с человеком.",
    fullDescription: "Домовый воробей — маленькая, но очень выносливая птица, прекрасно адаптировавшаяся к городской среде. Самцы отличаются серой шапочкой на голове и черным 'галстуком' на груди. Зимой особенно нуждаются в подкормке, так как найти пищу в снежный период становится сложнее.",
    habitat: "Населенные пункты, парки, сады, сельскохозяйственные угодья.",
    threats: [
      "Недостаток пищи в зимний период",
      "Химические обработки в городах",
      "Хищники (кошки, ястребы)",
      "Экстремальные холода"
    ]
  },
  {
    id: 2,
    name: "Голубь",
    latinName: "Columba livia",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rock_Pigeon_Columba_livia.jpg",
    description: "Распространенная городская птица с характерным воркованием, хорошо приспособленная к зимовке в городах.",
    fullDescription: "Сизый голубь — одна из самых распространенных городских птиц. Хорошо адаптировался к городской среде, где находит пищу и укрытие круглый год. Зимой часто собирается в стаи возле мест подкормки. Может выживать даже в сильные морозы, если получает достаточно пищи.",
    habitat: "Города, поселки, архитектурные сооружения, скалы.",
    threats: [
      "Голод в снежные периоды",
      "Болезни при скученности",
      "Отравление некачественным кормом",
      "Хищники"
    ]
  },
  {
    id: 3,
    name: "Ворона",
    latinName: "Corvus cornix",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Corvus_cornix_-_01.jpg",
    description: "Умная и адаптивная птица семейства врановых, хорошо приспосабливающаяся к городской среде.",
    fullDescription: "Серая ворона — крупная, умная и социальная птица. Всеядна, что помогает ей выживать в холодные зимы. Обладает отличной памятью и способностью к обучению. Зимой вороны часто собираются в большие стаи и ночуют на деревьях в городских парках, где теплее, чем за городом.",
    habitat: "Города, леса, парки, сельскохозяйственные угодья.",
    threats: [
      "Недостаток пищи в глубокоснежье",
      "Отравление городскими отходами",
      "Суровые морозы",
      "Конфликты с человеком"
    ]
  },
  {
    id: 4,
    name: "Клест",
    latinName: "Loxia curvirostra",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Crossbill_-_forest_of_Fontainebleau.jpg",
    description: "Птица с уникальным клювом, специализирующимся на добывании семян из шишек хвойных деревьев.",
    fullDescription: "Клест-еловик имеет особый перекрещивающийся клюв, идеально приспособленный для извлечения семян из шишек. Интересен тем, что может размножаться зимой, когда доступно много корма в виде созревших шишек. Ярко-красные самцы и зеленовато-желтые самки очень украшают зимний лес.",
    habitat: "Хвойные и смешанные леса, где много еловых и сосновых шишек.",
    threats: [
      "Вырубка хвойных лесов",
      "Неурожай шишек",
      "Хищники",
      "Экстремальные погодные условия"
    ]
  },
  {
    id: 5,
    name: "Снегирь",
    latinName: "Pyrrhula pyrrhula",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bullfinch_male.jpg",
    description: "Яркая птица с характерной красной грудкой у самцов, символ русской зимы.",
    fullDescription: "Снегирь — одна из самых узнаваемых зимних птиц России. Самцы выделяются яркой красной грудью, контрастирующей с серой спиной и черной шапочкой. Питаются преимущественно семенами и ягодами, что позволяет им выживать в зимний период. Часто посещают кормушки в поисках подкормки.",
    habitat: "Леса, парки, сады, в зимнее время часто посещают населенные пункты.",
    threats: [
      "Нехватка корма в снежные зимы",
      "Отлов для содержания в неволе",
      "Хищники",
      "Морозы и обледенение веток с ягодами"
    ]
  },
  {
    id: 6,
    name: "Синица",
    latinName: "Parus major",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Parus_major_m.jpg",
    description: "Маленькая подвижная птица с желтой грудкой и характерным черным галстуком, частый посетитель кормушек.",
    fullDescription: "Большая синица — энергичная и любопытная птица, хорошо знакомая каждому. Черно-желтая окраска делает ее хорошо заметной даже в зимнем пейзаже. Питается насекомыми, семенами, с удовольствием посещает кормушки. За день синица съедает пищи в количестве, равном почти половине собственного веса.",
    habitat: "Леса, парки, сады, городские зеленые зоны.",
    threats: [
      "Голод во время сильных морозов и снегопадов",
      "Нехватка мест для ночлега в сильные холода",
      "Хищники",
      "Конкуренция на кормушках с более крупными птицами"
    ]
  },
  {
    id: 7,
    name: "Свиристель",
    latinName: "Bombycilla garrulus",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Bombycilla_garrulus_2_%28Bobolink%29.jpg",
    description: "Красивая хохлатая птица, прилетающая к нам зимой из северной тайги в поисках ягод.",
    fullDescription: "Свиристель — изящная птица с шелковистым оперением и характерным хохолком на голове. Прилетает в средние широты с наступлением холодов в поисках рябины, боярышника и других ягод. Часто держится большими стаями, кочуя в поисках корма. Привлекает внимание мелодичным звенящим голосом.",
    habitat: "В период зимовки - города, парки, сады, где много ягодных деревьев и кустарников.",
    threats: [
      "Неурожай ягод рябины и других плодовых деревьев",
      "Утрата местообитаний из-за вырубки лесов",
      "Отравление ядовитыми или обработанными химикатами ягодами",
      "Столкновения с прозрачными поверхностями в городах"
    ]
  },
  {
    id: 8,
    name: "Сойка",
    latinName: "Garrulus glandarius",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Garrulus_glandarius_1_Luc_Viatour.jpg",
    description: "Яркая птица семейства врановых с характерными голубыми перьями на крыльях и громким голосом.",
    fullDescription: "Сойка — красивая и шумная лесная птица, родственница ворон и галок. Узнаваема по ярко-голубым перьям на крыльях и рыжеватому оперению. Известна своей способностью запасать на зиму желуди и другие орехи, способствуя распространению дубов. Зимой часто приближается к человеческому жилью в поисках пищи.",
    habitat: "Лиственные и смешанные леса, парки, сады.",
    threats: [
      "Вырубка старых лесов с дуплистыми деревьями",
      "Снижение урожая желудей и орехов",
      "Хищники",
      "Суровые зимы с глубоким снегом"
    ]
  },
  {
    id: 9,
    name: "Сорока",
    latinName: "Pica pica",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Pica_pica_-_Compans_Caffarelli_-_2012-03-16.jpg",
    description: "Черно-белая птица с длинным хвостом, известная своим любопытством и умом.",
    fullDescription: "Сорока — заметная птица с контрастным черно-белым оперением и длинным переливающимся хвостом. Всеядна, что помогает ей пережить зиму. Строит крупные закрытые гнезда, которые могут использоваться несколько лет. Интеллект сороки считается одним из самых высоких среди птиц.",
    habitat: "Опушки лесов, поля с древесной растительностью, парки, сады, населенные пункты.",
    threats: [
      "Недостаток пищи в зимний период",
      "Вырубка древесной растительности в агроландшафтах",
      "Преследование со стороны человека",
      "Хищники"
    ]
  },
  {
    id: 10,
    name: "Щегол",
    latinName: "Carduelis carduelis",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/European_Goldfinch_%28Carduelis_carduelis%29.jpg",
    description: "Яркая певчая птица с красной маской на лице и желтой полосой на крыльях.",
    fullDescription: "Щегол — одна из самых красивых певчих птиц наших краев. Отличается ярким оперением с красной маской на лице, черно-белой головой и желтой полосой на крыльях. Зимой часто держится стайками, питаясь семенами сорных растений, особенно любит семена чертополоха и репейника.",
    habitat: "Опушки лесов, сады, парки, заросли сорняков, особенно репейника и чертополоха.",
    threats: [
      "Сокращение мест обитания из-за интенсивного сельского хозяйства",
      "Использование гербицидов, уничтожающих сорные растения",
      "Отлов для содержания в неволе",
      "Голод в снежные зимы"
    ]
  },
  {
    id: 11,
    name: "Кедровка",
    latinName: "Nucifraga caryocatactes",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Spotted_Nutcracker_%28Nucifraga_caryocatactes%29_in_Jyv%C3%A4skyl%C3%A4%2C_Central_Finland%2C_in_2020_%281%29.jpg",
    description: "Птица семейства врановых, специализирующаяся на питании семенами кедровой сосны.",
    fullDescription: "Кедровка — коренастая птица с коричневым оперением в белую крапинку. Известна своей способностью запасать на зиму тысячи кедровых орешков, часть из которых потом прорастает. Таким образом кедровка является главным распространителем кедровой сосны. Может делать запасы на расстоянии до 15 км от места сбора.",
    habitat: "Хвойные и смешанные леса с участием кедровой сосны, в неурожайные годы кочует в поисках пищи.",
    threats: [
      "Вырубка кедровых лесов",
      "Неурожай кедровых орехов",
      "Сбор орехов человеком в промышленных масштабах",
      "Изменение климата"
    ]
  },
  {
    id: 12,
    name: "Сова",
    latinName: "Strix aluco",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Waldkauz-Strix_aluco.jpg",
    description: "Ночной хищник с большими глазами и бесшумным полетом, активный охотник даже зимой.",
    fullDescription: "Неясыть серая (лесная сова) — ночной хищник среднего размера. Глаза крупные, темные, направлены вперед. Оперение пестрое, маскирующее. Примечательна бесшумным полетом благодаря особому строению перьев. Зимой активно охотится на мелких грызунов, которых может услышать даже под слоем снега.",
    habitat: "Леса различных типов, парки, кладбища с крупными деревьями.",
    threats: [
      "Вырубка старых дуплистых деревьев",
      "Беспокойство в местах гнездования",
      "Сокращение кормовой базы (мышевидных грызунов)",
      "Гибель на дорогах"
    ]
  },
  {
    id: 13,
    name: "Поползень",
    latinName: "Sitta europaea",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Sitta_europaea_wildlife_2_1.jpg",
    description: "Небольшая птица, способная лазать по стволам деревьев в любом направлении, даже вниз головой.",
    fullDescription: "Поползень — компактная птица с голубовато-серой спинкой, белым брюшком и черной полосой через глаз. Уникален способностью передвигаться по стволам деревьев в любых направлениях, в том числе вниз головой. Зимой часто присоединяется к синичьим стаям, посещает кормушки. Делает запасы корма, пряча семена в трещины коры.",
    habitat: "Лиственные и смешанные леса, старые парки с крупными деревьями.",
    threats: [
      "Вырубка старых лесов",
      "Недостаток дуплистых деревьев для гнездования",
      "Голод в суровые зимы",
      "Хищники"
    ]
  },
  {
    id: 14,
    name: "Чиж",
    latinName: "Spinus spinus",
    status: "Зимующий",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Carduelis_spinus_-Poland_-male-8.jpg",
    description: "Мелкая подвижная птица с желто-зеленым оперением, часто держится стайками на ольхе и березе.",
    fullDescription: "Чиж — маленькая певчая птица семейства вьюрковых. Самцы имеют яркую желто-зеленую окраску с черной шапочкой и подбородком. Зимой часто образует большие стаи, кормящиеся семенами ольхи и березы. Очень подвижны, постоянно перекликаются между собой мелодичным щебетанием.",
    habitat: "Хвойные и смешанные леса с участием ели, а также ольшаники и березняки.",
    threats: [
      "Вырубка лесов, особенно ельников и ольшаников",
      "Неурожай семян основных кормовых деревьев",
      "Хищники",
      "Экстремальные холода"
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
    } else if (activeTab === "yellowBook") {
      setThemeClass("yellow-theme");
    } else if (activeTab === "winter") {
      setThemeClass("winter-theme");
    } else {
      setThemeClass("");
    }
  }, [activeTab]);

  // Определяем заголовок и описание в зависимости от активной вкладки
  const getTabContent = () => {
    switch(activeTab) {
      case "sedentary":
        return {
          title: "Холодные воды — дом для оседлых птиц",
          description: "Эти птицы обитают в суровых морских условиях, где глубокие синие воды скрывают их пищу."
        };
      case "yellowBook":
        return {
          title: "Желтая книга — птицы под наблюдением",
          description: "Эти птицы пока не находятся под критической угрозой, но требуют нашего внимания и охраны, чтобы не оказаться в Красной книге."
        };
      case "winter":
        return {
          title: "Зимующие птицы — наши соседи в холода",
          description: "В суровое время года этим птицам особенно нужна наша помощь. Подкормка может спасти многие птичьи жизни."
        };
      default:
        return {
          title: "Птицы, нуждающиеся в защите",
          description: "Эти птицы находятся под угрозой или требуют нашего внимания. Каждый из нас может внести вклад в их сохранение."
        };
    }
  };

  const tabContent = getTabContent();

  return (
    <section id="rare-birds" className={`py-16 transition-colors duration-500 ${
      themeClass === "cold-theme" ? 'bg-blue-900' : 
      themeClass === "yellow-theme" ? 'bg-amber-50' : 
      themeClass === "winter-theme" ? 'bg-blue-100' : 
      'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${
          themeClass === "cold-theme" ? 'text-blue-300' : 
          themeClass === "yellow-theme" ? 'text-amber-500' : 
          themeClass === "winter-theme" ? 'text-blue-700' : 
          'text-redbird'
        }`}>
          {tabContent.title}
        </h2>
        <p className={`text-center ${
          themeClass === "cold-theme" ? 'text-blue-200' : 
          themeClass === "yellow-theme" ? 'text-amber-700' : 
          themeClass === "winter-theme" ? 'text-blue-600' : 
          'text-gray-600'
        } mb-8 max-w-3xl mx-auto`}>
          {tabContent.description}
        </p>
        
        <Tabs 
          defaultValue="endangered" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full mb-8"
        >
          <TabsList className={`grid w-full max-w-md mx-auto grid-cols-4 ${
            themeClass === "cold-theme" ? 'bg-blue-800' : 
            themeClass === "yellow-theme" ? 'bg-amber-200' : 
            themeClass === "winter-theme" ? 'bg-blue-200' : 
            ''
          }`}>
            <TabsTrigger 
              value="endangered" 
              className={`text-xs sm:text-sm md:text-base ${
                themeClass === "cold-theme" ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white' : 
                themeClass === "yellow-theme" ? 'data-[state=active]:bg-amber-400 data-[state=active]:text-amber-900' : 
                themeClass === "winter-theme" ? 'data-[state=active]:bg-blue-500 data-[state=active]:text-white' : 
                ''
              }`}
            >
              Красная книга
            </TabsTrigger>
            <TabsTrigger 
              value="yellowBook" 
              className={`text-xs sm:text-sm md:text-base ${
                themeClass === "cold-theme" ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white' : 
                themeClass === "yellow-theme" ? 'data-[state=active]:bg-amber-400 data-[state=active]:text-amber-900' : 
                themeClass === "winter-theme" ? 'data-[state=active]:bg-blue-500 data-[state=active]:text-white' : 
                ''
              }`}
            >
              Желтая книга
            </TabsTrigger>
            <TabsTrigger 
              value="winter" 
              className={`text-xs sm:text-sm md:text-base ${
                themeClass === "cold-theme" ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white' : 
                themeClass === "yellow-theme" ? 'data-[state=active]:bg-amber-400 data-[state=active]:text-amber-900' : 
                themeClass === "winter-theme" ? 'data-[state=active]:bg-blue-500 data-[state=active]:text-white' : 
                ''
              }`}
            >
              Зимующие
            </TabsTrigger>
            <TabsTrigger 
              value="sedentary" 
              className={`text-xs sm:text-sm md:text-base ${
                themeClass === "cold-theme" ? 'data-[state=active]:bg-blue-600 data-[state=active]:text-white' : 
                themeClass === "yellow-theme" ? 'data-[state=active]:bg-amber-400 data-[state=active]:text-amber-900' : 
                themeClass === "winter-theme" ? 'data-[state=active]:bg-blue-500 data-[state=active]:text-white' : 
                ''
              }`}
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
          <TabsContent value="yellowBook">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {yellowBookBirds.map((bird) => (
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
                  theme="yellow"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="winter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {winterBirds.map((bird) => (
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
                  theme="winter"
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
