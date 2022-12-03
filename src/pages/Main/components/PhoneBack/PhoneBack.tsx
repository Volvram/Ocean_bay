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

  return (
    <div
      className={styles.phoneBack}
      style={{ backgroundImage: `url(${phoneBackBackground})` }}
    >
      {!phoneBackStore.submitted && (
        <>
          <div className={styles.phoneBack_questions}>Остались вопросы?</div>
          <div className={styles.phoneBack_h}>
            Оставьте заявку на обратный звонок!
          </div>
          <div className={styles.phoneBack_form}>
            <Input
              className={styles.phoneBack_form_input}
              onChange={phoneBackStore.handleNameInput}
              placeholder="Имя"
            />
            <Input
              className={styles.phoneBack_form_input}
              onChange={phoneBackStore.handlePhoneInput}
              type="tel"
              placeholder="Телефон"
              phone
            />
            <Button
              className={styles.phoneBack_form_submit}
              onClick={phoneBackStore.handleSubmit}
            >
              ОТПРАВИТЬ
            </Button>
          </div>
        </>
      )}
      {phoneBackStore.emptyFields && (
        <div className={styles.phoneBack__emptyFields}>
          Заполните пустые поля
        </div>
      )}
      {phoneBackStore.submitted && (
        <>
          <div className={styles.phoneBack__submitted_h}>
            Ваша заявка успешно отправлена!
          </div>
          <div className={styles.phoneBack__submitted_communication}>
            Наш специалист свяжется с Вами в течение 10 минут
          </div>
        </>
      )}
    </div>
  );
};

export default observer(PhoneBack);
