import React from "react";

import { YACHTS, YachtsData } from "@config/yachts";

import BestYacht from "./components/BestYacht/BestYacht";
import YachtOffer from "./components/YachtOffer/YachtOffer";
import styles from "./styles.module.scss";

const YachtOffers: React.FC = () => {
  return (
    <>
      <div className={styles.yachtOffers}>
        {YACHTS.map((yacht: YachtsData) => {
          if (!yacht.best) {
            return <YachtOffer key={yacht.id} yacht={yacht} />;
          }
          return <React.Fragment key={yacht.id} />;
        })}
      </div>
      <BestYacht />
    </>
  );
};

export default YachtOffers;
