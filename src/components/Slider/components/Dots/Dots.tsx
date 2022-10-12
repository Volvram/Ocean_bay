import React, { useContext } from "react";

import { SliderContext } from "@components/Slider";

import Dot from "./Dot";
import styles from "./styles.module.scss";

const Dots: React.FC = () => {
  const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`${styles.dot}-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className={styles.dots}>{renderDots()}</div>;
};

export default Dots;
