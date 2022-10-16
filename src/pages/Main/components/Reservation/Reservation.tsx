import React from "react";

import reservationBackground from "@assets/img/reservationBackground.svg";
import Button from "@components/Button";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Reservation: React.FC = () => {
  return (
    <div
      className={styles.reservationBackground}
      style={{ backgroundImage: `url(${reservationBackground})` }}
    >
      <div className={styles.reservation_h}>СВОБОДА. ЭМОЦИИ. OCEAN BAY.</div>
      <Link to={{ pathname: "/", hash: "contacts" }}>
        <Button className={styles.reservation_button}>ЗАБРОНИРОВАТЬ</Button>
      </Link>
      <hr className={styles.reservation_hr} />
      <div className={styles.reservation_text}>
        Мы предлагаем яхты с роскошным, простым и элегантным интерьером.
        Выберите яхту по вкусу, которую можете взять в аренду на любой срок от 7
        дней. Отличный сервис, внимание к мельчайшим деталям и вашим пожеланиям.
      </div>
    </div>
  );
};

export default Reservation;
