import { ILocalStore } from "@utils/useLocalStore";
import { makeObservable, observable, action, computed } from "mobx";

type PrivateFields = "_name" | "_phone" | "_submitted" | "_emptyFields";

class PhoneBackStore implements ILocalStore {
  private _name: string | null = null;
  private _phone: string | null = null;
  private _submitted = false;
  private _emptyFields = false;

  constructor() {
    makeObservable<PhoneBackStore, PrivateFields>(this, {
      _name: observable,
      setName: action,
      name: computed,
      _phone: observable,
      setPhone: action,
      phone: computed,
      _submitted: observable,
      setSubmitted: action,
      submitted: computed,
      _emptyFields: observable,
      setEmptyFields: action,
      emptyFields: computed,
    });
  }

  setName(name: string | null) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  setPhone(phone: string | null) {
    this._phone = phone;
  }

  get phone() {
    return this._phone;
  }

  setSubmitted(submitted: boolean) {
    this._submitted = submitted;
  }

  get submitted() {
    return this._submitted;
  }

  setEmptyFields(empty: boolean) {
    this._emptyFields = empty;
  }

  get emptyFields() {
    return this._emptyFields;
  }

  destroy(): void {}
}

export default PhoneBackStore;
