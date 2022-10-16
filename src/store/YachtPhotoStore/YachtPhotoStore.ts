import { ILocalStore } from "@utils/useLocalStore";
import { makeObservable, observable, action, computed } from "mobx";

type PrivateFields = "_slides";

class YachtPhotoStore implements ILocalStore {
  private _slides = 2;

  constructor() {
    makeObservable<YachtPhotoStore, PrivateFields>(this, {
      _slides: observable,
      setSlides: action,
      slides: computed,
    });
  }

  setSlides(slides: number) {
    this._slides = slides;
  }

  get slides() {
    return this._slides;
  }

  destroy(): void {}
}

export default YachtPhotoStore;
