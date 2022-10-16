import React from "react";

import admin from "@assets/img/admin.svg";

import styles from "./styles.module.scss";

const Contacts: React.FC = () => {
  return (
    <div id="contacts" className={styles.contacts}>
      <div>
        <div className={styles.contacts_h}>КОНТАКТЫ</div>
        <hr className={styles.contacts_hr} />
        <div className={styles.contacts_text}>
          Мы ценим ваше время! Поэтому предлагаем возможности аренды и
          бронирования по телефону. Для вашего удобства на нашем сайте
          представлены фотографии яхт, с их подробными характеристиками, наши
          услуги и цены.
          <br />
          <br />
          Для того, чтобы сделать бронь, выберите транспортное средство или
          услуги, оставьте заявку на обратный звонок в удобное для вас время, и
          мы вам позвоним.
        </div>
      </div>
      <div className={styles.contacts_admin}>
        <img
          src={admin}
          className={styles.contacts_admin_avatar}
          alt="administrator"
        />
        <div className={styles.contacts_admin_name}>Игорь Соболев</div>
        <div className={styles.contacts_admin_title}>Администратор</div>
        <div className={styles.contacts_admin_phone}>+7 (123)-456-34-23</div>
      </div>
    </div>
  );
};

export default Contacts;
