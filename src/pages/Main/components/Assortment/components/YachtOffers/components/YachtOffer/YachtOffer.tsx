import React from "react";

import { YachtsData } from "@config/db/yachts";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

type YachtOfferProps = {
  yacht: YachtsData;
};

const YachtOffer: React.FC<YachtOfferProps> = ({ yacht }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Link to={`/yacht/${yacht.id}`} className={styles.yachtOffer}>
      <div
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
      >
        <img src={yacht.image} className={styles.yachtOffer_img} alt="yacht" />
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
      </div>
    </Link>
  );
};

export default YachtOffer;
