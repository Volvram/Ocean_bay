import React from "react";

import YachtOffers from "./components/YachtOffers/YachtOffers";
import styles from "./styles.module.scss";

const Assortment: React.FC = () => {
  return (
    <div id="assortment" className={styles.assortment}>
      <div className={styles.assortment_h}>АССОРТИМЕНТ</div>
      <YachtOffers />
    </div>
  );
};

export default Assortment;
