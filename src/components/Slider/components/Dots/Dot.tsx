import React, { useContext } from "react";

import { SliderContext } from "@components/Slider";

import styles from "./styles.module.scss";

type DotProps = {
  number: number;
};

const Dot: React.FC<DotProps> = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`${styles.dots_dot} ${
        slideNumber === number ? styles.dots_dot__selected : ""
      }`}
      onClick={() => goToSlide(number)}
    />
  );
};

export default Dot;
