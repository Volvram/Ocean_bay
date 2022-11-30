import React from "react";

import arrow from "@assets/img/arrow.svg";
import { YACHTS } from "@config/db/yachts";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const BestYacht: React.FC = () => {
  const bestYacht = YACHTS.find((yachts) => yachts.best);

  return (
    <>
      {bestYacht && (
        <Link
          to={`/yacht/${bestYacht.id}`}
          key={bestYacht.id}
          className={styles.bestYachtOffer}
        >
          <div className={styles.bestYachtOffer_offer}>
            <div className={styles.bestYachtOffer_offer_frame}>
              <img
                src={bestYacht.image}
                className={styles.bestYachtOffer_offer_img}
                alt="yacht"
              />
            </div>

            <div className={styles.bestYachtOffer_offer_price}>
              {bestYacht.price}
            </div>
            <div className={styles.bestYachtOffer_offer_model}>
              Яхта {bestYacht.model}
            </div>
            <div className={styles.bestYachtOffer_offer_made}>
              <div className={styles.bestYachtOffer_offer_made_year}>
                {bestYacht.year}
              </div>
              <div className={styles.bestYachtOffer_offer_made_place}>
                {bestYacht.place}
              </div>
            </div>

            <div className={styles.bestYachtOffer_offer_more}>
              <div className={styles.bestYachtOffer_offer_more_text}>
                ПОДРОБНЕЕ
              </div>
              <img
                src={arrow}
                className={styles.bestYachtOffer_offer_more_arrow}
                alt=">"
              />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BestYacht;
