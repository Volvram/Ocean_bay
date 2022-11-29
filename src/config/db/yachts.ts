import yacht_1 from "@assets/img/yacht_1.svg";
import yacht_1_bigImage_1 from "@assets/img/yacht_1_bigImage_1.svg";
import yacht_1_bigImage_2 from "@assets/img/yacht_1_bigImage_2.svg";
import yacht_1_smallImage_1 from "@assets/img/yacht_1_smallImage_1.svg";
import yacht_1_smallImage_2 from "@assets/img/yacht_1_smallImage_2.svg";
import yacht_2 from "@assets/img/yacht_2.svg";
import yacht_3 from "@assets/img/yacht_3.svg";
import yacht_1_video from "@assets/video/yacht_1_video.mp4";
import yacht_2_video from "@assets/video/yacht_2_video.mp4";
import yacht_3_video from "@assets/video/yacht_3_video.mp4";

export type YachtCharacteristics = {
  constructionMaterial: string;
  grossTonage: string;
  overallLength: string;
  width: string;
  draft: string;
  maxSpeed: string;
  powerReserve: string;
  displacement: string;
  beds: string;
  cabins: string;
  interiorDesign: string;
  concept: string;
};

export type ImageType = {
  url: string;
  title: string;
};

export type YachtsData = {
  id: number;
  image: string;
  price: string;
  priceColor: string;
  model: string;
  year: number;
  place: string;
  best: boolean;
  characteristics: YachtCharacteristics;
  video: string;
  series: string;
  description: string;
  bigImages: string[];
  smallImages: ImageType[];
};

export const YACHTS: YachtsData[] = [
  {
    id: 1,
    image: yacht_1,
    price: "8 500 €/day",
    priceColor: "dark",
    model: "Яхта TANKOA T55 Sport",
    year: 2022,
    place: "Италия",
    best: false,
    characteristics: {
      constructionMaterial: "Сталь | Алюминий",
      grossTonage: "1650 т",
      overallLength: "68.00 м",
      width: "12.10 м",
      draft: "3.30 м",
      maxSpeed: "16.00 узл",
      powerReserve: "5000.00 мм",
      displacement: "1500.00 т",
      beds: "16 + 25",
      cabins: "8 + 14",
      interiorDesign: "Benetti Interior Style Department",
      concept: "RWD",
    },

    series: "Серия BNow (Benetti Now)",
    description:
      "Новое семейство яхт длиной от 50 до 68 м, разработанное Benetti в сотрудничестве с британской дизайн студией Redman Whiteley Dixon. Его особенность — достаточно сжатые сроки строительства по сравнению с принятыми на рынке стандартами, что стало возможным благодаря разработанным Benetti новым технологиям постройки.",
    video: yacht_1_video,

    bigImages: [yacht_1_bigImage_1, yacht_1_bigImage_2],
    smallImages: [
      {
        url: yacht_1_smallImage_1,
        title:
          "нижний уровень пляжного клуба с открывающейся на уровне воды боковой террасой. При этом тендеры и обширный набор водной техники хранятся в носовом гараже, чтобы отдать пространство в корме только для отдыха и развлечений. Верхняя палуба и сандек планируются в соответствии с желаниями будущего владельца. ",
      },
      {
        url: yacht_1_smallImage_2,
        title:
          "50-метровая модель BNow  с “бесшовным” соединением внутренних помещений и открытых палуб. Доступ к пляжному клубу сделан непосредственно с главной палубы, где в корме располагается открытая зона с панорамным обзором и инфинити-бассейном. Далее — основной салон, столовая и камбуз, а в носовой части — мастер-апартаменты с каютой, двумя ванными комнатами, офисом и откидным балконом. На нижней палубе — 4 каюты гостей, помещения экипажа и нижний уровень пляжного клуба с открывающейся на уровне воды боковой террасой. При этом тендеры и обширный набор водной техники хранятся в носовом гараже, чтобы отдать пространство в корме только для отдыха и развлечений. Верхняя палуба и сандек планируются в соответствии с желаниями будущего владельца. ",
      },
    ],
  },
  {
    id: 2,
    image: yacht_2,
    price: "5 000 €/day",
    priceColor: "light",
    model: "Яхта Mondo Marine 41M",
    year: 2009,
    place: "Черное море",
    best: false,
    characteristics: {
      constructionMaterial: "Алюминий | Алюминий",
      grossTonage: "185 т",
      overallLength: "41.10 м",
      width: "8.10 м",
      draft: "2.26 м",
      maxSpeed: "17.00 узл",
      powerReserve: "3000.00 мм",
      displacement: "360.00 т",
      beds: "11 + 7",
      cabins: "5 + 4",
      interiorDesign: "LUCA DINI Design & Architecture",
      concept: "Mondomarine | Cor. D. Rover Design",
    },

    series: "",
    description: "",
    video: yacht_2_video,

    bigImages: ["", ""],
    smallImages: [
      {
        url: "",
        title: "",
      },
      {
        url: "",
        title: "",
      },
    ],
  },
  {
    id: 3,
    image: yacht_3,
    price: "6 800 €/day",
    priceColor: "light",
    model: "Яхта Benetti 108 Tradition Supreme",
    year: 2017,
    place: "Хорватия",
    best: true,
    characteristics: {
      constructionMaterial: "GRP",
      grossTonage: "210 т",
      overallLength: "32.98 м",
      width: "7.25 м",
      draft: "2.00 м",
      maxSpeed: "13.50 узл",
      powerReserve: "2300.00 мм",
      displacement: "170.00 т",
      beds: "10",
      cabins: "5",
      interiorDesign: "Benetti Yachts",
      concept: "Benetti Yachts",
    },

    series: "",
    description: "",
    video: yacht_3_video,

    bigImages: ["", ""],
    smallImages: [
      {
        url: "",
        title: "",
      },
      {
        url: "",
        title: "",
      },
    ],
  },
];
