import { ILocalStore } from "@utils/useLocalStore";
import { makeObservable, observable, action, computed } from "mobx";

type PrivateFields = "_items" | "_slide" | "_touchPosition";

export type ImageType = {
  url: string;
  title: string;
};

class SliderStore implements ILocalStore {
  private _items: ImageType[] = [];
  private _slide = 0;
  private _touchPosition: number | null = null;

  constructor(items: ImageType[]) {
    this._items = items;

    makeObservable<SliderStore, PrivateFields>(this, {
      _items: observable,
      setItems: action,
      items: computed,
      _slide: observable,
      setSlide: action,
      slide: computed,
      _touchPosition: observable,
      setTouchPosition: action,
      touchPosition: computed,
    });
  }

  setItems(items: ImageType[]) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  setSlide(slide: number) {
    this._slide = slide;
  }

  get slide() {
    return this._slide;
  }

  setTouchPosition(touchPosition: number | null) {
    this._touchPosition = touchPosition;
  }

  get touchPosition() {
    return this._touchPosition;
  }

  changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (this._slide + direction < 0) {
      slideNumber = this._items.length - 1;
    } else {
      slideNumber = (this._slide + direction) % this._items.length;
    }

    this.setSlide(slideNumber);
  };

  goToSlide = (number: number) => {
    this.setSlide(number % this._items.length);
  };

  handleTouchStart = (event: React.TouchEvent) => {
    const touchDown = event.touches[0].clientX;

    this.setTouchPosition(touchDown);
  };

  handleTouchMove = (event: React.TouchEvent) => {
    if (this._touchPosition === null) {
      return;
    }

    const currentPosition = event.touches[0].clientX;
    const direction = this._touchPosition - currentPosition;

    if (direction > 10) {
      this.changeSlide(1);
    }

    if (direction < -10) {
      this.changeSlide(-1);
    }

    this.setTouchPosition(null);
  };

  destroy(): void {}
}

export default SliderStore;
