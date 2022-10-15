import React from "react";

import { YachtsData } from "@config/yachts";
import Carousel from "nuka-carousel";

import styles from "./styles.module.scss";

type YachtsPhotoProps = {
  yacht: YachtsData | undefined;
};

const YachtPhoto: React.FC<YachtsPhotoProps> = ({ yacht }) => {
  return (
    <div className={styles.yachtPhoto}>
      {yacht && (
        <Carousel wrapAround={true} slidesToShow={2}>
          {yacht.additionalImages.map((item) => {
            return <img key={item.url} src={item.url} alt={item.title} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export default YachtPhoto;
