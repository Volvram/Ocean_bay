import React from "react";

import reservationBackground from "@assets/img/reservationBackground.svg";
import styles from "./styles.module.scss";
import Button from "@components/Button";

const Reservation: React.FC = () => {
  return (
      <div className={styles.reservationBackground} style={{backgroundImage: `url(${reservationBackground})`}}>
          <div className={styles.reservation_h}>СВОБОДА. ПАРУС. OCEAN BAY.</div>
          <Button className={styles.reservation_button}>ЗАБРОНИРОВАТЬ</Button>
      </div>
  );
};

export default Reservation;
