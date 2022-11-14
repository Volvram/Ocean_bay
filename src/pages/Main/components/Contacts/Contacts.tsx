import React from "react";

import admin from "@assets/img/admin.svg";
import mapBackground from "@assets/img/mapBackground.svg";

import styles from "./styles.module.scss";

const Contacts: React.FC = () => {
  return (
    <div
      id="contacts"
      className={styles.contacts}
      style={{ backgroundImage: `url(${mapBackground})` }}
    >
      <div>
        <div className={styles.contacts_h}>КОНТАКТЫ</div>
        <div className={styles.contacts_reservation}>
          БРОНИРОВАНИЕ ПО ТЕЛЕФОНУ
        </div>
        <div className={styles.contacts_text}>
          Мы ценим ваше время! Поэтому предлагаем возможности аренды и
          бронирования по телефону. Для вашего удобства на нашем сайте
          представлены фотографии яхт, с их подробными характеристиками, наши
          услуги и цены.
        </div>
      </div>
      <div className={styles.contacts_phone}>
        <div className={styles.contacts_phone_frame}>
          <img
            src={admin}
            className={styles.contacts_phone_frame_avatar}
            alt="administrator"
          />
          <div className={styles.contacts_phone_frame_name}>Игорь Соболев</div>
          <div className={styles.contacts_phone_frame_title}>Администратор</div>
          <div className={styles.contacts_phone_frame_phoneNumber}>
            +7 (123)-456-34-23
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
