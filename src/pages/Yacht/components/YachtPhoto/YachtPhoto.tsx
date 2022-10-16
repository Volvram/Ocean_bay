import React from "react";

import { YachtsData } from "@config/yachts";
import YachtPhotoStore from "@store/YachtPhotoStore/YachtPhotoStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import Carousel from "nuka-carousel";

import styles from "./styles.module.scss";

type YachtsPhotoProps = {
  yacht: YachtsData | undefined;
};

const YachtPhoto: React.FC<YachtsPhotoProps> = ({ yacht }) => {
  const yachtPhotoStore = useLocalStore(() => new YachtPhotoStore());

  React.useEffect(() => {
    if (window.innerWidth <= 840 && yachtPhotoStore.slides !== 1) {
      yachtPhotoStore.setSlides(1);
    } else if (window.innerWidth > 840 && yachtPhotoStore.slides !== 2) {
      yachtPhotoStore.setSlides(2);
    }
  }, []);

  React.useEffect(() => {
    function slidesChange(this: HTMLElement, ev: Event) {
      if (window.innerWidth <= 840 && yachtPhotoStore.slides !== 1) {
        yachtPhotoStore.setSlides(1);
      } else if (window.innerWidth > 840 && yachtPhotoStore.slides !== 2) {
        yachtPhotoStore.setSlides(2);
      }
    }

    window.addEventListener("resize", slidesChange);

    return () => {
      window.removeEventListener("resize", slidesChange);
    };
  }, [yachtPhotoStore.slides, yachtPhotoStore]);

  return (
    <div className={styles.yachtPhoto}>
      {yacht && (
        <Carousel wrapAround={true} slidesToShow={yachtPhotoStore.slides}>
          {yacht.additionalImages.map((item) => {
            return (
              <img
                key={item.url}
                className={styles.yachtPhoto_img}
                src={item.url}
                alt={item.title}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default observer(YachtPhoto);
