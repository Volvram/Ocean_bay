import React from "react";

import alterLogo from "@assets/img/alterLogo.svg";
import { deleteHash } from "@config/deleteHash";
import { SECTIONS } from "@config/sections";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const AlterHeader: React.FC = () => {
  const handleClick = React.useCallback(() => {
    deleteHash();
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.alterHeader}>
        <Link to="/">
          <img
            src={alterLogo}
            className={styles.alterHeader_logo}
            alt="ocean bay"
          />
        </Link>

        <div className={styles.alterHeader_menu}>
          {SECTIONS.map((section) => {
            return (
              <div key={section.id} className={styles.alterHeader_menu_choice}>
                <Link
                  to={{ pathname: "/", hash: section.id }}
                  className={styles.alterHeader_menu_choice_link}
                  onClick={handleClick}
                >
                  {section.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.alterHeader_phone}>
          <a
            href="tel:+7(909)-635-30-22"
            className={styles.alterHeader_phone_a}
          >
            +7(909)-635-30-22
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlterHeader;
