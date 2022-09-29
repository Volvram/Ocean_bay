import React from "react";

import reservationBackground from "@assets/img/reservationBackground.svg";
import Button from "@components/Button";

import styles from "./styles.module.scss";

const Reservation: React.FC = () => {
  return (
    <div
      className={styles.reservationBackground}
      style={{ backgroundImage: `url(${reservationBackground})` }}
    >
      <div className={styles.reservation_h}>СВОБОДА. ПАРУС. OCEAN BAY.</div>
      <Button className={styles.reservation_button}>ЗАБРОНИРОВАТЬ</Button>
      <hr className={styles.reservation_hr} />
      <div className={styles.reservation_text}>
        Вскипание с HCl поступательно окисляет фронт, что дает возможность
        использования данной методики как универсальной. Вскипание с HCl,
        вследствие пространственной неоднородности почвенного покрова,
        традиционно переносит карбонат кальция.
      </div>
    </div>
  );
};

export default Reservation;
