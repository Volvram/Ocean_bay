import React from "react";

import { YachtsData } from "@config/db/yachts";
import cn from "classnames";

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
            src={yacht.bigImages[0]?.url}
            className={styles.yachtDescription_imageBlock_bigImage}
            alt={yacht.model}
          />
          <div className={styles.yachtDescription_aboutYacht}>
            <div className={styles.yachtDescription_aboutYacht_h}>О ЯХТЕ</div>
            <div className={styles.yachtDescription_aboutYacht_text}>
              {yacht.bigImages[0]?.title}
            </div>
          </div>

          <div className={styles.yachtDescription_imageBlock}>
            <img
              src={yacht.bigImages[1]?.url}
              className={styles.yachtDescription_imageBlock_bigImage}
              alt={yacht.model}
            />
            <div
              className={cn(
                styles.yachtDescription_imageBlock_bigImage_description,
                styles.yachtDescription_imageBlock_bigImage_description_upperLeft,
                styles.yachtDescription_imageBlock_bigImage_description_dark,
                yacht.id === 3 &&
                  styles.yachtDescription_imageBlock_bigImage_description_upperRight,
                "blur-animation"
              )}
            >
              {yacht.bigImages[1]?.title}
            </div>
          </div>

          <div className={styles.yachtDescription_imageBlock}>
            <img
              src={yacht.bigImages[2]?.url}
              className={styles.yachtDescription_imageBlock_bigImage}
              alt={yacht.model}
            />
            <div
              className={cn(
                styles.yachtDescription_imageBlock_bigImage_description,
                styles.yachtDescription_imageBlock_bigImage_description_upperLeft,
                styles.yachtDescription_imageBlock_bigImage_description_light,
                yacht.id === 2 &&
                  styles.yachtDescription_imageBlock_bigImage_description_lowerLeft,
                "blur-animation"
              )}
            >
              {yacht.bigImages[2]?.title}
            </div>
            {yacht.id === 1 && (
              <div
                className={cn(
                  styles.yachtDescription_imageBlock_bigImage_description,
                  styles.yachtDescription_imageBlock_bigImage_description_lowerRight,
                  styles.yachtDescription_imageBlock_bigImage_description_light,
                  "blur-animation"
                )}
              >
                {yacht.bigImages[2]?.text}
              </div>
            )}
          </div>

          <div className={styles.yachtDescription_imagine}>{yacht.imagine}</div>

          <div className={styles.yachtDescription_smallImages}>
            <div className={styles.yachtDescription_smallImages_frame}>
              <img
                src={yacht.smallImages[0]?.url}
                className={styles.yachtDescription_smallImages_smallImage}
                alt={yacht.model}
              />
            </div>
            <div className={styles.yachtDescription_smallImages_frame}>
              <img
                src={yacht.smallImages[1]?.url}
                className={styles.yachtDescription_smallImages_smallImage}
                alt={yacht.model}
              />
            </div>
          </div>

          <img
            src={yacht.bigImages[3]?.url}
            className={styles.yachtDescription_imageBlock_bigImage}
            alt={yacht.model}
          />
        </div>
      )}
    </>
  );
};

export default YachtDescription;
