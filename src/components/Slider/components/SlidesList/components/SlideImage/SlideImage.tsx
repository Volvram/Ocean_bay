import React from "react";

import styles from "./styles.module.scss";

type SlideImageProps = {
  src: string;
  alt: string;
};

const SlideImage: React.FC<SlideImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.slideImage} />;
};

export default SlideImage;
