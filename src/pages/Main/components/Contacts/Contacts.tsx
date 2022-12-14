import React from "react";

import admin from "@assets/img/admin.svg";
import phone from "@assets/img/iphone.svg";
import mapBackground from "@assets/img/mapBackground.png";

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
      <div
        className={styles.contacts_phone}
        style={{ backgroundImage: `url(${phone})` }}
      >
        <img
          src={admin}
          className={styles.contacts_phone_avatar}
          alt="administrator"
        />
        <div className={styles.contacts_phone_name}>Игорь Соболев</div>
        <div className={styles.contacts_phone_title}>Администратор</div>
        <div>
          <a
            href="mailto:igor.sobol@ocean.bay.com"
            className={styles.contacts_phone_email}
          >
            igor.sobol@ocean.bay.com
          </a>
        </div>
        <div className={styles.contacts_phone_phoneNumber}>
          +7 (123)-456-34-23
        </div>
        <a href="tel:+7 (123)-456-34-23" className={styles.contacts_phone_call}>
          ЗВОНОК
        </a>
      </div>
    </div>
  );
};

export default Contacts;
