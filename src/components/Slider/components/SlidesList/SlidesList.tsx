import React, { useContext } from "react";

import { SliderContext } from "@components/Slider";

import Slide from "./Slide";
import styles from "./styles.module.scss";

const SlidesList: React.FC = () => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className={styles.slideList}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
};

export default SlidesList;
