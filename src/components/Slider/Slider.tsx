import React from "react";

import SliderStore, { ImageType } from "@store/SliderStore/SliderStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";

import Arrows from "./components/Arrows";
import Dots from "./components/Dots/Dots";
import SlidesList from "./components/SlidesList/SlidesList";
import styles from "./styles.module.scss";

export const SliderContext = React.createContext({
  goToSlide: (number: number) => {},
  changeSlide: (value: number) => {},
  slidesCount: 0,
  slideNumber: 0,
  items: [
    {
      url: "",
      title: "",
    },
  ], // Массив картинок
});

type SliderProps = {
  autoPlay?: boolean;
  autoPlayTime?: number;
  width?: string;
  height?: string;
  items: ImageType[];
};

const Slider: React.FC<SliderProps> = ({
  autoPlay = false,
  autoPlayTime = 5000,
  width = "100%",
  height = "100%",
  items,
}) => {
  const sliderStore = useLocalStore(() => new SliderStore(items));

  React.useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      sliderStore.changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [
    sliderStore.items.length,
    sliderStore.slide,
    autoPlay,
    autoPlayTime,
    sliderStore,
  ]); // when images uploaded or slide changed manually we start timer

  return (
    <div
      style={{ width, height }}
      className={styles.slider}
      onTouchStart={sliderStore.handleTouchStart}
      onTouchMove={sliderStore.handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide: sliderStore.goToSlide,
          changeSlide: sliderStore.changeSlide,
          slidesCount: sliderStore.items.length,
          slideNumber: sliderStore.slide,
          items: sliderStore.items,
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

export default observer(Slider);
