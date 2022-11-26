import React from "react";

import { YachtsData } from "@config/db/yachts";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type YachtOfferProps = {
  yacht: YachtsData;
};

const YachtOffer: React.FC<YachtOfferProps> = ({ yacht }) => {
  return (
    <Link
      to={`/yacht/${yacht.id}`}
      className={cn(
        styles.yachtOffer,
        yacht.id % 2 !== 0 && styles.yachtOffer_left,
        yacht.id % 2 === 0 && styles.yachtOffer_right
      )}
    >
      <div className={styles.yachtOffer_frame}>
        <img src={yacht.image} className={styles.yachtOffer_img} alt="yacht" />
      </div>

      <div
        className={cn(
          styles.yachtOffer_price,
          yacht.priceColor === "dark" && styles.yachtOffer_price__dark
        )}
      >
        {yacht.price}
      </div>
      <div className={styles.yachtOffer_model}>{yacht.model}</div>
      <div className={styles.yachtOffer_made}>
        <div className={styles.yachtOffer_made_year}>{yacht.year}</div>
        <div className={styles.yachtOffer_made_place}>{yacht.place}</div>
      </div>
    </Link>
  );
};

export default YachtOffer;
