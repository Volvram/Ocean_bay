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
    price: "8 500 €/day",
    priceColor: "dark",
    model: "TANKOA T55 Sport",
    year: 2022,
    place: "Италия",
    best: false,
    video: yacht_1_video,
    series: "Серия BNow (Benetti Now)",
    description:
      "Новое семейство яхт длиной от 50 до 68 м, разработанное Benetti в сотрудничестве с британской дизайн студией Redman Whiteley Dixon. Его особенность — достаточно сжатые сроки строительства по сравнению с принятыми на рынке стандартами, что стало возможным благодаря разработанным Benetti новым технологиям постройки.",
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
      interiorDesign: "Redman Whiteley Dixon",
      concept: "RWD",
    },
    schema: yacht_1_schema,

    bigImages: [
      {
        url: yacht_1_bigImage_1,
        title: `TANKOA YACHTS T55 SPORTIVA — это 55 метров полного 
расслабления в аэродинамическом стиле. На форму корпуса 
повлияли гладкие линии автоспорта, а задняя часть судна 
является основной особенностью Linea Sportiva. 

«Люкс на берегу моря» владельца включает в себя частную 
крытую/открытую террасу с джакузи.

На летной палубе есть дополнительный бассейн и место для 
принятия солнечных ванн. 

Носовая конструкция позволяет размещать тендеры и игрушки 
вперед, в открытом, но скрытом отсеке для тендеров. Выдвижная 
мачта служит креплением для экрана кинотеатра под открытым 
небом. Наслаждайтесь ночным кино в море из гостиной, которая 
находится перед рулевой рубкой.`,
        text: "",
      },
      {
        url: yacht_1_bigImage_2,
        title:
          "T55 делает практически невозможное: 55-метровая роскошная яхта со всеми преимуществами валовой вместимости менее 500 тонн. Открытые пространства перетекают одно в другое, в преемственности с интерьерами.",
        text: "",
      },
      {
        url: yacht_1_bigImage_3,
        title:
          "Носовая конструкция позволяет размещать тендеры и игрушки вперед, в открытом, но скрытом отсеке для тендеров.",
        text: "Выдвижная мачта служит креплением для экрана кинотеатра под открытым небом. Наслаждайтесь ночным кино в море из гостиной, которая находится перед рулевой рубкой.",
      },
      {
        url: yacht_1_bigImage_4,
        title: "",
        text: "",
      },
    ],
    imagine:
      "TANKOA YACHTS T55 SPORTIVA — это 55 метров полного расслабления в аэродинамическом стиле",
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
    price: "10 000 €/day",
    priceColor: "light",
    model: "Benetti B.NOW 63M",
    year: 2022,
    place: "Италия",
    best: false,
    video: yacht_2_video,
    series: "Серия Benetti",
    description:
      "Моторная яхта Benetti B.Now 63M выпускается Benetti с 2019 года. Benetti B.Now 63M — это моторная суперяхта длиной 63.00 м с 7 пассажирскими каютами и осадкой 3.00 м, которая в экономичном режиме идет на скорости 12 узлов. Яхта с корпусом из стеклопластика имеет сертификацию CE (A), то есть предназначена для выходов в открытое море.",
    characteristics: {
      constructionMaterial: "Сталь | Алюминий",
      grossTonage: "1290 т",
      overallLength: "63.00 м",
      width: "11.00 м",
      draft: "3.00 м",
      maxSpeed: "15.00 узл",
      powerReserve: "5000.00 мм",
      displacement: "1200.00 т",
      beds: "14 + 13",
      cabins: "7 + 9",
      interiorDesign: "Benetti Interior Style Department",
      concept: "RWD",
    },
    schema: yacht_2_schema,

    bigImages: [
      {
        url: yacht_2_bigImage_1,
        title: `Оптимальная со всех точек зрения, современная яхта для 
комфортной жизни и дальних походов в море. Benetti B.Now 63M 
все еще достаточно компактна, чтобы помещаться в марины, но 
уже достаточно велика, чтобы предложить полный набор для 
роскошного обитания на борту.

Benetti B.Now 63M выполнена из стали и алюминия. Яхта стала 
результатом совместной работы инженеров Benetti и британского 
архитектурного бюро RWD, отвечавшего за внешний облик судна. 
Интерьерами занималось дизайн-подразделение самой Benetti. 
Яхта отличается элегантным профилем, широкими 
горизонтальными «лентами» остекления и почти вертикальным 
форштевнем.`,
        text: "",
      },
      {
        url: yacht_2_bigImage_2,
        title:
          "Построенная по дизайну Redman Whiteley Dixon, B.NOW 63M имеет Водоизмещающий корпус. Материал корпуса - Сталь, надстройки - Алюминий. Яхту приводят в движение двигатели TBD, максимальная скорость - 16 узлов, крейсерская - 12 узлов. ",
        text: "",
      },
      {
        url: yacht_2_bigImage_3,
        title:
          "Benetti B.NOW 63M позволяет разместить на ночь 14 гостей в 7 роскошных каютах, команда из 10 человек размещается в 6 каютах.",
        text: "",
      },
      {
        url: yacht_2_bigImage_4,
        title: "",
        text: "",
      },
    ],
    imagine:
      "Откройте для себя Benetti B.NOW 63M. Место постройки Benetti B.NOW 63M - Виареджо и Ливорно, Италия, дизайн - Redman Whiteley Dixon",
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
    price: "6 800 €/day",
    priceColor: "light",
    model: "Benetti 108 Tradition Supreme",
    year: 2017,
    place: "Италия",
    best: true,
    video: yacht_3_video,
    series: "Серия Benetti",
    description:
      "Моторная яхта Incontatto, новая 33-метровая представительница бренда Benetti, была успешно запущена выдающейся итальянской верфью на своем дворе в Виареджио на 16 февраля 2015 года. Роскошная суперяхта Incontatto - это красивое судно линейки Benetti Tradition Supreme 108’, великолепно разработанное известным дизайнером Stefano Righini",
    characteristics: {
      constructionMaterial: "Сталь | Алюминий",
      grossTonage: "1650 т",
      overallLength: "32.98 м",
      width: "7.41 м",
      draft: "1.90 м",
      maxSpeed: "15.00 узл",
      powerReserve: "2300.00 мм",
      displacement: "1600.00 т",
      beds: "10 + 5",
      cabins: "5 + 3",
      interiorDesign: "Stefano Righini",
      concept: "Benetti Yachts",
    },
    schema: yacht_3_schema,

    bigImages: [
      {
        url: yacht_3_bigImage_1,
        title: `MY Benetti 108 Tradition Supreme Varvara, построенный в 2017 году 
под руководством независимого сертифицированного 
сюрвейера, может похвастаться впечатляющей дальностью 
плавания в 2300 морских миль и дизайном экстерьера 
от знаменитого Стефано Ригини. Яхта классифицируется как RINA 
и эксплуатируется только одним владельцем и его семьей. 

Яхта получила уникальный неоклассический интерьер в 
сдержанных тонах. Панорамные окна на главной палубе заливают 
салон естественным светом, а лакированные деревянные 
поверхности в сочетании с ониксом создают удивительное 
сочетание сдержанной роскоши и спокойного домашнего уюта.`,
        text: "",
      },
      {
        url: yacht_3_bigImage_2,
        title:
          "Вся носовая часть главной палубы отведена под каюту владельца, увеличенную по сравнению с другими яхтами серии Benetti 108. В дополнение к просторным спальням и ванным комнатам, здесь есть изолированный кабинет, полноразмерный гардероб и персональная прачечная.",
        text: "",
      },
      {
        url: yacht_3_bigImage_3,
        title:
          "Яхта оснащена улучшенной навигационной системой, интегрированным аудио-видео оборудованием, системой освещения и климат-контроля, работающей от Crestron. ",
        text: "",
      },
      {
        url: yacht_3_bigImage_4,
        title: "",
        text: "",
      },
    ],
    imagine:
      "Откройте для себя Benetti TRADITION SUPREME 108. Место постройки Benetti Traditional Supreme 108 - Виареджо и Ливорно, Италия, дизайн - Stefano Righini",
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
