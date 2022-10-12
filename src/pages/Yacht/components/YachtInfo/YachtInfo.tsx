import React from "react";

import { CharacteristicsEnum } from "@config/characteristics";
import { YachtsData } from "@config/yachts";
import cn from "classnames";

import styles from "./styles.module.scss";

type YachtInfoProps = {
  yacht: YachtsData | undefined;
};

const YachtInfo: React.FC<YachtInfoProps> = ({ yacht }) => {
  return (
    <>
      {yacht && (
        <div className={styles.yachtInfo}>
          <div className={styles.yachtInfo_main}>
            <div className={styles.yachtInfo_main_model}>{yacht.model}</div>
            <div className={styles.yachtInfo_main_made}>
              <div className={styles.yachtInfo_main_made_year}>
                {yacht.year}
              </div>
              <div className={styles.yachtInfo_main_made_place}>
                {yacht.place}
              </div>
            </div>
          </div>
          <div className={styles.yachtInfo_character}>
            <div className={styles.yachtInfo_character_h}>Характеристики</div>
            {Object.entries(CharacteristicsEnum).map((char) => {
              return (
                <div
                  key={char[0]}
                  className={cn(
                    styles.yachtInfo_character_element,
                    char[0] === "concept" &&
                      styles.yachtInfo_character_element__last
                  )}
                >
                  <div className={styles.yachtInfo_character_element_title}>
                    {char[1]}
                  </div>
                  <div className={styles.yachtInfo_character_element_value}>
                    {
                      yacht.characteristics[
                        char[0] as keyof typeof yacht.characteristics
                      ]
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default YachtInfo;
