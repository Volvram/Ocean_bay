import React from "react";

import Slider from "@components/Slider";
import { YachtsData } from "@config/yachts";

import styles from "./styles.module.scss";

type YachtsPhotoProps = {
  yacht: YachtsData | undefined;
};

const YachtPhoto: React.FC<YachtsPhotoProps> = ({ yacht }) => {
  return (
    <div className={styles.yachtPhoto}>
      {yacht && <Slider items={yacht.additionalImages} />}
    </div>
  );
};

export default YachtPhoto;
