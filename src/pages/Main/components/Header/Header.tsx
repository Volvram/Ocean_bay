import React from "react";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_menu}>
        <img alt="ocean bay" className={styles.header_menu_logo}></img>
        <div className={styles.header_menu_choice}>
          <a href="" className={styles.header_menu_choice_a}>О НАС</a>
        </div>
        <div className={styles.header_menu_choice}>
          <a href="" className={styles.header_menu_choice_a}>АССОРТИМЕНТ</a>
        </div>
        <div className={styles.header_menu_choice}>
          <a href="" className={styles.header_menu_choice_a}>КОНТАКТЫ</a>
        </div>
      </div>
      <div className={styles.header_phone}>
        <a href="tel: +79096353022" className={styles.header_phone_a}>+7(909)-635-30-22</a>
      </div>
    </div>
  );
};

export default Header;
