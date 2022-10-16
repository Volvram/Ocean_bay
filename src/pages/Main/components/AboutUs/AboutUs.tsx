import React from "react";

import "./AboutUs.scss";
import styles from "./styles.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div id="aboutUs">
      <div className={styles.aboutUs}>О НАС</div>
      <div>
        Яхт-клуб «OCEAN BAY» - уникальный порт, который предлагает своим
        клиентам услуги высокого европейского качества.
        <br />
        <br />
        Хотите совершить увлекательную прогулку, провести незабываемый
        романтический вечер, оригинальное торжество, мечтаете о активном отдыхе,
        а может ищете место для причала собственного судна? Яхт-клуб OCEAN BAY к
        Вашим услугам!
        <br />
        <br />
        Клуб предлагает увлекательные экскурсии, прогулки на моторных яхтах,
        проведение мероприятий и фотосессий, а также возможность аренды яхты с
        капитаном. Большой выбор яхт премиум класса, а также уютные каюты со
        всеми удобствами. Если же вы имеете свою яхту и ищите место для её
        причала, мы предлагаем наш порт для её размещения как на короткий, так и
        на длительный промежуток времени.
        <br />
        <br />
        Вы самостоятельно выбираете не только маршрут путешествия, но и время
        отправления корабля! Ваша прогулка может стать уникальным путешествием с
        остановками для купания и рыбалкой, активным отдыхом или путешествие по
        живописным местам.
      </div>
    </div>
  );
};

export default AboutUs;
