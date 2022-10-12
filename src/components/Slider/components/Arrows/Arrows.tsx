import React, { useContext } from "react";

import { SliderContext } from "@components/Slider";

import styles from "./styles.module.scss";

const Arrows: React.FC = () => {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className={styles.arrows}>
      <div
        className={styles.arrows_arrow__left}
        onClick={() => changeSlide(-1)}
      >
        {"<"}
      </div>
      <div
        className={styles.arrows_arrow__right}
        onClick={() => changeSlide(1)}
      >
        {">"}
      </div>
    </div>
  );
};

export default Arrows;
