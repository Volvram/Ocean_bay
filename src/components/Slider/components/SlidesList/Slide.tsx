import React from "react";

import SlideImage from "./components/SlideImage/SlideImage";
import SlideTitle from "./components/SlideTitle/SlideTitle";
import styles from "./styles.module.scss";

type SlideProps = {
  data: {
    url: string;
    title: string;
  };
};

const Slide: React.FC<SlideProps> = ({ data: { url, title } }) => {
  return (
    <div className={styles.slideList_slide}>
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
};

export default Slide;
