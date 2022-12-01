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

  handleNameInput = (value: string) => {
    localStorage.setItem("name", value);
  }

  handlePhoneInput = (value: string) => {
    localStorage.setItem("phone", value);
  }

  handleSubmit = () => {
    this.setName(localStorage.getItem("name"));
    this.setPhone(localStorage.getItem("phone"));

    localStorage.setItem("name", "");
    localStorage.setItem("phone", "");

    if (!this.name || !this.phone) {
      this.setEmptyFields(true);
    } else {
      this.setEmptyFields(false);
      this.setSubmitted(true);

      this.sendForm({
        name: String(this._name),
        phone: String(this._phone)
      })
    }
  }

  async sendForm(data: {name: string, phone: string}) {
      await fetch("https://oceanbay-34965-default-rtdb.europe-west1.firebasedatabase.app/clients.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf8"
        },
        body: JSON.stringify(data)
      })
  }

  destroy(): void {}
}

export default PhoneBackStore;
