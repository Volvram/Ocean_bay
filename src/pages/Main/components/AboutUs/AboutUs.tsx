import React from "react";

import { circularImages } from "@config/db/circularImages";

import "./AboutUs.scss";
import styles from "./styles.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div id="aboutUs">
      <div className={styles.aboutUs}>НАШ СЕРВИС</div>
      <div className={styles.container}>
        <div className={styles.container_services}>
          <h1 className={styles.container_services_h}>СОБСТВЕННЫЙ ПОРТ.</h1>
          <div className={styles.container_services_service}>
            Большой выбор яхт премиум класса, уютные каюты со всеми удобствами.
            Если же вы имеете свою яхту и ищите место для её причала, мы
            предлагаем наш порт для её размещения как на короткий, так и на
            длительный промежуток времени.
          </div>

          <h1 className={styles.container_services_h}>
            ВЫБОР МАРШРУТА, ВРЕМЕНИ, ЗАНЯТИЙ.{" "}
          </h1>
          <div className={styles.container_services_service}>
            Вы самостоятельно выбираете не только маршрут путешествия, но и
            время отправления яхты! Ваша прогулка может стать уникальным
            путешествием с остановками для купания и рыбалкой, активным отдыхом
            или путешествие по живописным местам.
          </div>

          <h1 className={styles.container_services_h}>
            ЭКСКУРСИИ, МЕРОПРИЯТИЯ, ФОТОСЕССИИ.
          </h1>
          <div className={styles.container_services_service}>
            Хотите провести незабываемый романтический вечер, оригинальное
            торжество, мечтаете об активном отдыхе? Ocean Bay предлагает
            увлекательные экскурсии, проведение мероприятий и фотосессий, а
            также аренды яхты с капитаном.
          </div>
        </div>

        <div className={styles.container_images}>
          <div className={styles.container_images_row}>
            {circularImages.map((image, index) => {
              if (index >= 0 && index < 3) {
                return (
                  <img
                    key={`circle_${index + 1}`}
                    src={image}
                    className={styles.container_images_row_img}
                    alt="circle"
                  />
                );
              }
            })}
          </div>
          <div className={styles.container_images_row}>
            {circularImages.map((image, index) => {
              if (index >= 3 && index < 6) {
                return (
                  <img
                    key={`circle_${index + 1}`}
                    src={image}
                    className={styles.container_images_row_img}
                    alt="circle"
                  />
                );
              }
            })}
          </div>
          <div className={styles.container_images_row}>
            {circularImages.map((image, index) => {
              if (index >= 6 && index < 9) {
                return (
                  <img
                    key={`circle_${index + 1}`}
                    src={image}
                    className={styles.container_images_row_img}
                    alt="circle"
                  />
                );
              }
            })}
          </div>
          <div className={styles.container_images_row}>
            {circularImages.map((image, index) => {
              if (index >= 9 && index < 12) {
                return (
                  <img
                    key={`circle_${index + 1}`}
                    src={image}
                    className={styles.container_images_row_img}
                    alt="circle"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
