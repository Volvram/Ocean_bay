import yacht_1 from "@assets/img/yacht_1.svg";
import yacht_2 from "@assets/img/yacht_2.svg";
import yacht_3 from "@assets/img/yacht_3.svg";

export type YachtsData = {
  id: number;
  image: string;
  price: string;
  priceColor: string;
  model: string;
  year: number;
  place: string;
  best: boolean;
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
  },
];
