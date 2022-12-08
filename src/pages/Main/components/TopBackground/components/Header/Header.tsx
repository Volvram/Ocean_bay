import React from "react";

import { deleteHash } from "@config/deleteHash";
import { SECTIONS } from "@config/sections";
import { Link } from "react-router-dom";

import Logo from "./components/Logo/Logo";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const handleClick = React.useCallback(() => {
    deleteHash();
  }, []);

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header_menu}>
        {SECTIONS.map((section) => {
          return (
            <div key={section.id} className={styles.header_menu_choice}>
              <Link
                to={{ pathname: "/", hash: section.id }}
                className={styles.header_menu_choice_link}
                onClick={handleClick}
              >
                {section.title}
              </Link>
            </div>
          );
        })}
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
