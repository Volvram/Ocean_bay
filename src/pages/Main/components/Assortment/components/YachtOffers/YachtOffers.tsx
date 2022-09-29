import React from "react";

import averageYacht from "@assets/img/averageYacht.svg";
import bigYacht from "@assets/img/bigYacht.svg";
import smallYacht from "@assets/img/smallYacht.svg";

import styles from "./styles.module.scss";

const YachtOffers: React.FC = () => {
  return (
    <>
      <div className={styles.yachtOffers}>
        <div className={styles.yachtOffers_offer}>
          <img
            src={averageYacht}
            className={styles.yachtOffers_offer_img}
            alt="yacht"
          />
          <div
            className={`${styles.yachtOffers_offer_price} ${styles.yachtOffers_offer_price__dark}`}
          >
            8 500 €/day
          </div>
          <div className={styles.yachtOffers_offer_model}>
            Яхта TANKOA T55 Sport
          </div>
          <div className={styles.yachtOffers_offer_made}>
            <div className={styles.yachtOffers_offer_made_year}>2022</div>
            <div className={styles.yachtOffers_offer_made_place}>Италия</div>
          </div>
        </div>

        <div className={styles.yachtOffers_offer}>
          <img
            src={smallYacht}
            className={styles.yachtOffers_offer_img}
            alt="yacht"
          />
          <div className={`${styles.yachtOffers_offer_price}`}>5 000 €/day</div>
          <div className={styles.yachtOffers_offer_model}>
            Яхта Mondo Marine 41M
          </div>
          <div className={styles.yachtOffers_offer_made}>
            <div className={styles.yachtOffers_offer_made_year}>2009</div>
            <div className={styles.yachtOffers_offer_made_place}>
              Черное море
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bestYachtOffer}>
        <div className={styles.yachtOffers_offer}>
          <img
            src={bigYacht}
            className={styles.yachtOffers_offer_img}
            alt="yacht"
          />
          <div className={`${styles.yachtOffers_offer_price}`}>
            68 000 €/day
          </div>
          <div className={styles.yachtOffers_offer_model}>
            Яхта Benetti 108 Tradition Supreme
          </div>
          <div className={styles.yachtOffers_offer_made}>
            <div className={styles.yachtOffers_offer_made_year}>2017</div>
            <div className={styles.yachtOffers_offer_made_place}>Хорватия</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YachtOffers;
