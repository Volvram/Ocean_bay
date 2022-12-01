import React from "react";

import { YachtsData } from "@config/db/yachts";

import styles from "./styles.module.scss";

type YachtVideoProps = {
  yacht: YachtsData | undefined;
};

const YachtVideo: React.FC<YachtVideoProps> = ({ yacht }) => {
  return (
    <>
      {yacht && (
        <div className={styles.yachtVideo}>
          <div className={styles.yachtVideo_container}>
            <div className={styles.yachtVideo_container_videoBackground}>
              <video
                className={styles.yachtVideo_container_video}
                preload="auto"
                autoPlay
                no-controls="true"
                loop
                playsInline
                muted
              >
                <source src={yacht.video} type="video/mp4" />
              </video>
            </div>
            <div className={styles.yachtVideo_container_main}>
              <div className={styles.yachtVideo_container_main_model}>
                {yacht.model}
              </div>
              <div className={styles.yachtVideo_container_main_made}>
                <div className={styles.yachtVideo_container_main_made_year}>
                  {yacht.year}
                </div>
                <div className={styles.yachtVideo_container_main_made_place}>
                  {yacht.place}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.yachtVideo_description}>
            <div className={styles.yachtVideo_description_h}>
              {yacht.series}
            </div>
            <div className={styles.yachtVideo_description_text}>
              {yacht.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YachtVideo;
