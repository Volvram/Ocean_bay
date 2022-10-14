import React from "react";

import phoneBackBackground from "@assets/img/phoneBackBackground.svg";
import Button from "@components/Button";
import Input from "@components/Input";
import PhoneBackStore from "@store/PhoneBackStore/PhoneBackStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";

import styles from "./styles.module.scss";

const PhoneBack: React.FC = () => {
  const phoneBackStore = useLocalStore(() => new PhoneBackStore());

  const handleNameInput = React.useCallback(
    (value: string) => {
      phoneBackStore.setName(value);
    },
    [phoneBackStore]
  );

  const handlePhoneInput = React.useCallback(
    (value: string) => {
      phoneBackStore.setPhone(value);
    },
    [phoneBackStore]
  );

  const handleSubmit = React.useCallback(() => {
    phoneBackStore.setSubmitted(true);
  }, [phoneBackStore]);

  return (
    <div
      className={styles.phoneBack}
      style={{ backgroundImage: `url(${phoneBackBackground})` }}
    >
      <div className={styles.phoneBack_questions}>Остались вопросы?</div>
      <div className={styles.phoneBack_h}>
        Оставьте заявку на обратный звонок!
      </div>
      <div className={styles.phoneBack_form}>
        <Input
          className={styles.phoneBack_form_input}
          onChange={handleNameInput}
          placeholder="Имя"
        />
        <Input
          className={styles.phoneBack_form_input}
          onChange={handlePhoneInput}
          type="tel"
          placeholder="Телефон"
        />
        <Button className={styles.phoneBack_form_submit} onClick={handleSubmit}>
          ОТПРАВИТЬ
        </Button>
        {phoneBackStore.submitted && (
          <div className={styles.phoneBack_form_submit__submitted}>
            Форма успешно отправлена
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(PhoneBack);
