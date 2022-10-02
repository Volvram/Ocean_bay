import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_menu}>
        <img alt="ocean bay" className={styles.header_menu_logo}></img>
        <div className={styles.header_menu_choice}>
          <Link
            to={{ pathname: "/", hash: "aboutUs" }}
            className={styles.header_menu_choice_link}
          >
            О НАС
          </Link>
        </div>
        <div className={styles.header_menu_choice}>
          <Link
            to={{ pathname: "/", hash: "assortment" }}
            className={styles.header_menu_choice_link}
          >
            АССОРТИМЕНТ
          </Link>
        </div>
        <div className={styles.header_menu_choice}>
          <Link
            to={{ pathname: "/", hash: "contacts" }}
            className={styles.header_menu_choice_link}
          >
            КОНТАКТЫ
          </Link>
        </div>
      </div>
      <div className={styles.header_phone}>
        <a href="tel:+7(909)-635-30-22" className={styles.header_phone_a}>
          +7(909)-635-30-22
        </a>
      </div>
    </div>
  );
};

export default Header;
