import React from "react";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_contacts}>
        <li className={styles.footer_contacts_element}>LLC “OCEAN BAY”</li>
        <a
          href="tel:+7 (933)-852-96-63"
          className={styles.footer_contacts_link}
        >
          <li className={styles.footer_contacts_element}>+7 (933)-852-96-63</li>
        </a>
        <a href="mailto:mail@yandex.ru" className={styles.footer_contacts_link}>
          <li className={styles.footer_contacts_element}>mail@yandex.ru</li>
        </a>
      </div>
      <div className={styles.footer_info}>
        <li className={styles.footer_info_element}>
          Режим работы: пн-сб с 10:00 до 20:00
        </li>
        <li className={styles.footer_info_element}>
          Юр. адрес: 123456, г. Москва, ул. Пресненская набережная, д. 8
        </li>
        <li className={styles.footer_info_element}>© OCEAN BAY, 2018-2022.</li>
      </div>
    </div>
  );
};

export default Footer;
