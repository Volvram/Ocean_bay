import React from "react";

import styles from "./styles.module.scss";

type SlideTitleProps = {
  title: string;
};

const SlideTitle: React.FC<SlideTitleProps> = ({ title }) => {
  return <div className={styles.slideTitle}>{title}</div>;
};

export default SlideTitle;
