import React from "react";

import Header from "./components/Header/Header";

import topBackground from "@assets/img/topBackground.svg";

import styles from "./styles.module.scss";

const Main: React.FC = () => {
  return (
    <div>
        <div className={styles.topBackground} style={{backgroundImage: `url(${topBackground})`}}>
            <Header />
            <div className={styles.topBackground_intro}>
                <div className={styles.topBackground_intro_title}>ЯХТ-КЛУБ OCEAN BAY.</div>
                <hr className={styles.topBackground_intro_hr}></hr>
                <div className={styles.topBackground_intro_slogan}>МЫ РАБОТАЕМ РАДИ ВАШЕГО УДОВОЛЬСТВИЯ.</div>
            </div>
        </div>
      
    </div>
  );
};

export default Main;
