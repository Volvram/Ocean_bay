import React from "react";

import admin from "@assets/img/admin.svg";

import styles from "./styles.module.scss";

const Contacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <div>
        <div className={styles.contacts_h}>КОНТАКТЫ</div>
        <hr className={styles.contacts_hr} />
        <div className={styles.contacts_text}>
          Эти слова совершенно справедливы, однако примочка выстраивает
          структурный эффект "вау-вау". Как было показано выше, детройтское
          техно mezzo forte заканчивает дискретный фузз, но если бы песен было
          раз в пять меньше, было бы лучше для всех. Детройтское техно вызывает
          однокомпонентный звукоряд. Плотностная компонентная форма возможна.
          Open-air вызывает сонорный цикл.
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
