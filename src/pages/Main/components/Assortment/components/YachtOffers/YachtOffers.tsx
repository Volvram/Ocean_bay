import React from "react";

import { YACHTS, YachtsData } from "@config/yachts";
import cn from "classnames";
import { Link } from "react-router-dom";

import BestYacht from "./components/BestYacht";
import styles from "./styles.module.scss";

const YachtOffers: React.FC = () => {
  return (
    <>
      <div className={styles.yachtOffers}>
        {YACHTS.map((yacht: YachtsData) => {
          if (!yacht.best) {
            return (
              <Link
                to={`/yacht/${yacht.id}`}
                key={yacht.id}
                className={styles.yachtOffers_offer}
              >
                <img
                  src={yacht.image}
                  className={styles.yachtOffers_offer_img}
                  alt="yacht"
                />
                <div
                  className={cn(
                    styles.yachtOffers_offer_price,
                    yacht.priceColor === "dark" &&
                      styles.yachtOffers_offer_price__dark
                  )}
                >
                  {yacht.price}
                </div>
                <div className={styles.yachtOffers_offer_model}>
                  {yacht.model}
                </div>
                <div className={styles.yachtOffers_offer_made}>
                  <div className={styles.yachtOffers_offer_made_year}>
                    {yacht.year}
                  </div>
                  <div className={styles.yachtOffers_offer_made_place}>
                    {yacht.place}
                  </div>
                </div>
              </Link>
            );
          }
          return <React.Fragment key={yacht.id} />;
        })}
      </div>
      <BestYacht />
    </>
  );
};

export default YachtOffers;
