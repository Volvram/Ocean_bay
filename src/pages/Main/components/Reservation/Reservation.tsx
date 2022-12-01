import React from "react";

import waves from "@assets/video/waves.mp4";
import Button from "@components/Button";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Reservation: React.FC = () => {
  return (
    <div className={styles.reservation}>
      <video
        className={styles.reservation_video}
        preload="auto"
        autoPlay
        no-controls="true"
        loop
        playsInline
        muted
      >
        <source src={waves} type="video/mp4" />
      </video>

      <div className={`${styles.reservation_h} element-animation`}>
        СВОБОДА. ЭМОЦИИ. OCEAN BAY.
      </div>
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
