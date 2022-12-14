import yacht_1 from "@assets/img/yacht_1.svg";
import yacht_1_bigImage_1 from "@assets/img/yacht_1_bigImage_1.svg";
import yacht_1_bigImage_2 from "@assets/img/yacht_1_bigImage_2.svg";
import yacht_1_bigImage_3 from "@assets/img/yacht_1_bigImage_3.svg";
import yacht_1_bigImage_4 from "@assets/img/yacht_1_bigImage_4.svg";
import yacht_1_schema from "@assets/img/yacht_1_schema.svg";
import yacht_1_smallImage_1 from "@assets/img/yacht_1_smallImage_1.svg";
import yacht_1_smallImage_2 from "@assets/img/yacht_1_smallImage_2.svg";
import yacht_2 from "@assets/img/yacht_2.svg";
import yacht_2_bigImage_1 from "@assets/img/yacht_2_bigImage_1.svg";
import yacht_2_bigImage_2 from "@assets/img/yacht_2_bigImage_2.svg";
import yacht_2_bigImage_3 from "@assets/img/yacht_2_bigImage_3.svg";
import yacht_2_bigImage_4 from "@assets/img/yacht_2_bigImage_4.svg";
import yacht_2_schema from "@assets/img/yacht_2_schema.svg";
import yacht_2_smallImage_1 from "@assets/img/yacht_2_smallImage_1.svg";
import yacht_2_smallImage_2 from "@assets/img/yacht_2_smallImage_2.svg";
import yacht_3 from "@assets/img/yacht_3.svg";
import yacht_3_bigImage_1 from "@assets/img/yacht_3_bigImage_1.svg";
import yacht_3_bigImage_2 from "@assets/img/yacht_3_bigImage_2.svg";
import yacht_3_bigImage_3 from "@assets/img/yacht_3_bigImage_3.svg";
import yacht_3_bigImage_4 from "@assets/img/yacht_3_bigImage_4.svg";
import yacht_3_schema from "@assets/img/yacht_3_schema.svg";
import yacht_3_smallImage_1 from "@assets/img/yacht_3_smallImage_1.svg";
import yacht_3_smallImage_2 from "@assets/img/yacht_3_smallImage_2.svg";
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

export type ImageTextType = ImageType & {
  text: string;
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
  video: string;
  series: string;
  description: string;
  characteristics: YachtCharacteristics;
  schema: string;

  bigImages: ImageTextType[];
  imagine: string;

  smallImages: ImageType[];
};

export const YACHTS: YachtsData[] = [
  {
    id: 1,
    image: yacht_1,
    price: "8 500 ???/day",
    priceColor: "dark",
    model: "TANKOA T55 Sport",
    year: 2022,
    place: "????????????",
    best: false,
    video: yacht_1_video,
    series: "?????????? BNow (Benetti Now)",
    description:
      "?????????? ?????????????????? ?????? ???????????? ???? 50 ???? 68 ??, ?????????????????????????? Benetti ?? ???????????????????????????? ?? ???????????????????? ???????????? ?????????????? Redman Whiteley Dixon. ?????? ?????????????????????? ??? ???????????????????? ???????????? ?????????? ?????????????????????????? ???? ?????????????????? ?? ?????????????????? ???? ?????????? ??????????????????????, ?????? ?????????? ?????????????????? ?????????????????? ?????????????????????????? Benetti ?????????? ?????????????????????? ??????????????????.",
    characteristics: {
      constructionMaterial: "?????????? | ????????????????",
      grossTonage: "1650 ??",
      overallLength: "68.00 ??",
      width: "12.10 ??",
      draft: "3.30 ??",
      maxSpeed: "16.00 ??????",
      powerReserve: "5000.00 ????",
      displacement: "1500.00 ??",
      beds: "16 + 25",
      cabins: "8 + 14",
      interiorDesign: "Redman Whiteley Dixon",
      concept: "RWD",
    },
    schema: yacht_1_schema,

    bigImages: [
      {
        url: yacht_1_bigImage_1,
        title: `TANKOA YACHTS T55 SPORTIVA ??? ?????? 55 ???????????? ?????????????? 
???????????????????????? ?? ???????????????????????????????? ??????????. ???? ?????????? ?????????????? 
???????????????? ?????????????? ?????????? ????????????????????, ?? ???????????? ?????????? ?????????? 
???????????????? ???????????????? ???????????????????????? Linea Sportiva. 

?????????? ???? ???????????? ?????????? ?????????????????? ???????????????? ?? ???????? ?????????????? 
????????????/???????????????? ?????????????? ?? ??????????????.

???? ???????????? ???????????? ???????? ???????????????????????????? ?????????????? ?? ?????????? ?????? 
???????????????? ?????????????????? ????????. 

?????????????? ?????????????????????? ?????????????????? ?????????????????? ?????????????? ?? ?????????????? 
????????????, ?? ????????????????, ???? ?????????????? ???????????? ?????? ????????????????. ?????????????????? 
?????????? ???????????? ???????????????????? ?????? ???????????? ???????????????????? ?????? ???????????????? 
??????????. ?????????????????????????? ???????????? ???????? ?? ???????? ???? ????????????????, ?????????????? 
?????????????????? ?????????? ?????????????? ????????????.`,
        text: "",
      },
      {
        url: yacht_1_bigImage_2,
        title:
          "T55 ???????????? ?????????????????????? ??????????????????????: 55-???????????????? ?????????????????? ???????? ???? ?????????? ???????????????????????????? ?????????????? ?????????????????????? ?????????? 500 ????????. ???????????????? ???????????????????????? ???????????????????? ???????? ?? ????????????, ?? ?????????????????????????????? ?? ??????????????????????.",
        text: "",
      },
      {
        url: yacht_1_bigImage_3,
        title:
          "?????????????? ?????????????????????? ?????????????????? ?????????????????? ?????????????? ?? ?????????????? ????????????, ?? ????????????????, ???? ?????????????? ???????????? ?????? ????????????????.",
        text: "?????????????????? ?????????? ???????????? ???????????????????? ?????? ???????????? ???????????????????? ?????? ???????????????? ??????????. ?????????????????????????? ???????????? ???????? ?? ???????? ???? ????????????????, ?????????????? ?????????????????? ?????????? ?????????????? ????????????.",
      },
      {
        url: yacht_1_bigImage_4,
        title: "",
        text: "",
      },
    ],
    imagine:
      "TANKOA YACHTS T55 SPORTIVA ??? ?????? 55 ???????????? ?????????????? ???????????????????????? ?? ???????????????????????????????? ??????????",
    smallImages: [
      {
        url: yacht_1_smallImage_1,
        title: "",
      },
      {
        url: yacht_1_smallImage_2,
        title: "",
      },
    ],
  },

  {
    id: 2,
    image: yacht_2,
    price: "10 000 ???/day",
    priceColor: "light",
    model: "Benetti B.NOW 63M",
    year: 2022,
    place: "????????????",
    best: false,
    video: yacht_2_video,
    series: "?????????? Benetti",
    description:
      "???????????????? ???????? Benetti B.Now 63M ?????????????????????? Benetti ?? 2019 ????????. Benetti B.Now 63M ??? ?????? ???????????????? ?????????????????? ???????????? 63.00 ?? ?? 7 ?????????????????????????? ?????????????? ?? ?????????????? 3.00 ??, ?????????????? ?? ?????????????????????? ???????????? ???????? ???? ???????????????? 12 ??????????. ???????? ?? ???????????????? ???? ???????????????????????????? ?????????? ???????????????????????? CE (A), ???? ???????? ?????????????????????????? ?????? ?????????????? ?? ???????????????? ????????.",
    characteristics: {
      constructionMaterial: "?????????? | ????????????????",
      grossTonage: "1290 ??",
      overallLength: "63.00 ??",
      width: "11.00 ??",
      draft: "3.00 ??",
      maxSpeed: "15.00 ??????",
      powerReserve: "5000.00 ????",
      displacement: "1200.00 ??",
      beds: "14 + 13",
      cabins: "7 + 9",
      interiorDesign: "Benetti Interior Style Department",
      concept: "RWD",
    },
    schema: yacht_2_schema,

    bigImages: [
      {
        url: yacht_2_bigImage_1,
        title: `?????????????????????? ???? ???????? ?????????? ????????????, ?????????????????????? ???????? ?????? 
???????????????????? ?????????? ?? ?????????????? ?????????????? ?? ????????. Benetti B.Now 63M 
?????? ?????? ???????????????????? ??????????????????, ?????????? ???????????????????? ?? ????????????, ???? 
?????? ???????????????????? ????????????, ?????????? ???????????????????? ???????????? ?????????? ?????? 
???????????????????? ???????????????? ???? ??????????.

Benetti B.Now 63M ?????????????????? ???? ?????????? ?? ????????????????. ???????? ?????????? 
?????????????????????? ???????????????????? ???????????? ?????????????????? Benetti ?? ?????????????????????? 
???????????????????????????? ???????? RWD, ?????????????????????? ???? ?????????????? ?????????? ??????????. 
?????????????????????? ???????????????????? ????????????-?????????????????????????? ?????????? Benetti. 
???????? ???????????????????? ???????????????????? ????????????????, ???????????????? 
?????????????????????????????? ?????????????????? ???????????????????? ?? ?????????? ???????????????????????? 
????????????????????.`,
        text: "",
      },
      {
        url: yacht_2_bigImage_2,
        title:
          "?????????????????????? ???? ?????????????? Redman Whiteley Dixon, B.NOW 63M ?????????? ???????????????????????????? ????????????. ???????????????? ?????????????? - ??????????, ???????????????????? - ????????????????. ???????? ???????????????? ?? ???????????????? ?????????????????? TBD, ???????????????????????? ???????????????? - 16 ??????????, ?????????????????????? - 12 ??????????. ",
        text: "",
      },
      {
        url: yacht_2_bigImage_3,
        title:
          "Benetti B.NOW 63M ?????????????????? ???????????????????? ???? ???????? 14 ???????????? ?? 7 ?????????????????? ????????????, ?????????????? ???? 10 ?????????????? ?????????????????????? ?? 6 ????????????.",
        text: "",
      },
      {
        url: yacht_2_bigImage_4,
        title: "",
        text: "",
      },
    ],
    imagine:
      "???????????????? ?????? ???????? Benetti B.NOW 63M. ?????????? ?????????????????? Benetti B.NOW 63M - ???????????????? ?? ??????????????, ????????????, ???????????? - Redman Whiteley Dixon",
    smallImages: [
      {
        url: yacht_2_smallImage_1,
        title: "",
      },
      {
        url: yacht_2_smallImage_2,
        title: "",
      },
    ],
  },

  {
    id: 3,
    image: yacht_3,
    price: "6 800 ???/day",
    priceColor: "light",
    model: "Benetti 108 Tradition Supreme",
    year: 2017,
    place: "????????????",
    best: true,
    video: yacht_3_video,
    series: "?????????? Benetti",
    description:
      "???????????????? ???????? Incontatto, ?????????? 33-???????????????? ?????????????????????????????????? ???????????? Benetti, ???????? ?????????????? ???????????????? ???????????????????? ?????????????????????? ???????????? ???? ?????????? ?????????? ?? ?????????????????? ???? 16 ?????????????? 2015 ????????. ?????????????????? ?????????????????? Incontatto - ?????? ???????????????? ?????????? ?????????????? Benetti Tradition Supreme 108???, ?????????????????????? ?????????????????????????? ?????????????????? ???????????????????? Stefano Righini",
    characteristics: {
      constructionMaterial: "?????????? | ????????????????",
      grossTonage: "1650 ??",
      overallLength: "32.98 ??",
      width: "7.41 ??",
      draft: "1.90 ??",
      maxSpeed: "15.00 ??????",
      powerReserve: "2300.00 ????",
      displacement: "1600.00 ??",
      beds: "10 + 5",
      cabins: "5 + 3",
      interiorDesign: "Stefano Righini",
      concept: "Benetti Yachts",
    },
    schema: yacht_3_schema,

    bigImages: [
      {
        url: yacht_3_bigImage_1,
        title: `MY Benetti 108 Tradition Supreme Varvara, ?????????????????????? ?? 2017 ???????? 
?????? ???????????????????????? ???????????????????????? ???????????????????????????????????? 
??????????????????, ?????????? ???????????????????????? ???????????????????????? ???????????????????? 
???????????????? ?? 2300 ?????????????? ???????? ?? ???????????????? ???????????????????? 
???? ?????????????????????? ?????????????? ????????????. ???????? ???????????????????????????????? ?????? RINA 
?? ?????????????????????????????? ???????????? ?????????? ???????????????????? ?? ?????? ????????????. 

???????? ???????????????? ???????????????????? ?????????????????????????????? ???????????????? ?? 
???????????????????? ??????????. ???????????????????? ???????? ???? ?????????????? ???????????? ???????????????? 
?????????? ???????????????????????? ????????????, ?? ???????????????????????? ???????????????????? 
?????????????????????? ?? ?????????????????? ?? ?????????????? ?????????????? ???????????????????????? 
?????????????????? ???????????????????? ?????????????? ?? ???????????????????? ?????????????????? ????????.`,
        text: "",
      },
      {
        url: yacht_3_bigImage_2,
        title:
          "?????? ?????????????? ?????????? ?????????????? ???????????? ???????????????? ?????? ?????????? ??????????????????, ?????????????????????? ???? ?????????????????? ?? ?????????????? ???????????? ?????????? Benetti 108. ?? ???????????????????? ?? ???????????????????? ???????????????? ?? ???????????? ????????????????, ?????????? ???????? ?????????????????????????? ??????????????, ???????????????????????????? ???????????????? ?? ???????????????????????? ??????????????????.",
        text: "",
      },
      {
        url: yacht_3_bigImage_3,
        title:
          "???????? ???????????????? ???????????????????? ?????????????????????????? ????????????????, ?????????????????????????????? ??????????-?????????? ??????????????????????????, ???????????????? ?????????????????? ?? ????????????-????????????????, ???????????????????? ???? Crestron. ",
        text: "",
      },
      {
        url: yacht_3_bigImage_4,
        title: "",
        text: "",
      },
    ],
    imagine:
      "???????????????? ?????? ???????? Benetti TRADITION SUPREME 108. ?????????? ?????????????????? Benetti Traditional Supreme 108 - ???????????????? ?? ??????????????, ????????????, ???????????? - Stefano Righini",
    smallImages: [
      {
        url: yacht_3_smallImage_1,
        title: "",
      },
      {
        url: yacht_3_smallImage_2,
        title: "",
      },
    ],
  },
];
