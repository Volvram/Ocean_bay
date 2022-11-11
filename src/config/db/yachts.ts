import yacht_1 from "@assets/img/yacht_1.svg";
import yacht_1_1 from "@assets/img/yacht_1_1.svg";
import yacht_1_2 from "@assets/img/yacht_1_2.svg";
import yacht_1_3 from "@assets/img/yacht_1_3.svg";
import yacht_1_4 from "@assets/img/yacht_1_4.svg";
import yacht_2 from "@assets/img/yacht_2.svg";
import yacht_2_1 from "@assets/img/yacht_2_1.svg";
import yacht_2_2 from "@assets/img/yacht_2_2.svg";
import yacht_2_3 from "@assets/img/yacht_2_3.svg";
import yacht_2_4 from "@assets/img/yacht_2_4.svg";
import yacht_3 from "@assets/img/yacht_3.svg";
import yacht_3_1 from "@assets/img/yacht_3_1.svg";
import yacht_3_2 from "@assets/img/yacht_3_2.svg";
import yacht_3_3 from "@assets/img/yacht_3_3.svg";
import yacht_3_4 from "@assets/img/yacht_3_4.svg";
import yacht_1_video from "@assets/video/yacht_1.mp4";
import { ImageType } from "@store/SliderStore/SliderStore";

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
  additionalImages: ImageType[];
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
      powerReserve: "5000.00 м",
      displacement: "1500.00 т",
      beds: "16 + 25",
      cabins: "8 + 14",
      interiorDesign: "Benetti Interior Style Department",
      concept: "RWD",
    },

    video: yacht_1_video,

    additionalImages: [
      {
        url: yacht_1_1,
        title: "",
      },
      {
        url: yacht_1_2,
        title: "",
      },
      {
        url: yacht_1_3,
        title: "",
      },
      {
        url: yacht_1_4,
        title: "",
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
    video: yacht_1_video,
    additionalImages: [
      {
        url: yacht_2_1,
        title: "",
      },
      {
        url: yacht_2_2,
        title: "",
      },
      {
        url: yacht_2_3,
        title: "",
      },
      {
        url: yacht_2_4,
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
    video: yacht_1_video,
    additionalImages: [
      {
        url: yacht_3_1,
        title: "",
      },
      {
        url: yacht_3_2,
        title: "",
      },
      {
        url: yacht_3_3,
        title: "",
      },
      {
        url: yacht_3_4,
        title: "",
      },
    ],
  },
];
