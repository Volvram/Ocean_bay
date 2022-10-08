import React from "react";

import { YACHTS, YachtsData } from "@config/yachts";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const bestYacht = YACHTS.find((yachts) => yachts.best);

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
          return;
        })}
      </div>
      {bestYacht && (
        <Link
          to={`/yacht/${bestYacht.id}`}
          key={bestYacht.id}
          className={styles.bestYachtOffer}
        >
          <div className={styles.yachtOffers_offer}>
            <img
              src={bestYacht.image}
              className={styles.yachtOffers_offer_img}
              alt="yacht"
            />
            <div className={styles.yachtOffers_offer_price}>
              {bestYacht.price}
            </div>
            <div className={styles.yachtOffers_offer_model}>
              {bestYacht.model}
            </div>
            <div className={styles.yachtOffers_offer_made}>
              <div className={styles.yachtOffers_offer_made_year}>
                {bestYacht.year}
              </div>
              <div className={styles.yachtOffers_offer_made_place}>
                {bestYacht.place}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default YachtOffers;
