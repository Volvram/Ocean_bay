import React from "react";

import { YachtsData } from "@config/db/yachts";

import styles from "./styles.module.scss";

type YachtDescriptionProps = {
  yacht: YachtsData | undefined;
};

const YachtDescription: React.FC<YachtDescriptionProps> = ({ yacht }) => {
  return (
    <>
      {yacht && (
        <div className={styles.yachtDescription}>
          <img
            src={yacht.bigImages[0]}
            className={styles.yachtDescription_bigImage}
            alt={yacht.model}
          />
          <div className={styles.yachtDescription_description}>
            <img
              src={yacht.smallImages[0].url}
              className={styles.yachtDescription_smallImage}
              alt={yacht.model}
            />
            <div className={styles.yachtDescription_description_text}>
              {yacht?.smallImages[0].title}
            </div>
          </div>
          <div className={styles.yachtDescription_description}>
            <div className={styles.yachtDescription_description_text}>
              {yacht.smallImages[1].title}
            </div>
            <img
              src={yacht.smallImages[1].url}
              className={styles.yachtDescription_smallImage}
              alt={yacht.model}
            />
          </div>
          <img
            src={yacht.bigImages[1]}
            className={styles.yachtDescription_bigImage}
            alt={yacht.model}
          />
        </div>
      )}
    </>
  );
};

export default YachtDescription;
