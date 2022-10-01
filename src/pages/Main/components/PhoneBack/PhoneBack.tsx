import React from "react";

import phoneBackBackground from "@assets/img/phoneBackBackground.svg";
import Button from "@components/Button";
import Input from "@components/Input";

import styles from "./styles.module.scss";

const PhoneBack: React.FC = () => {
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
          onChange={() => {}}
          placeholder="Имя"
        />
        <Input
          className={styles.phoneBack_form_input}
          onChange={() => {}}
          type="tel"
          placeholder="Телефон"
        />
        <Button className={styles.phoneBack_form_submit}>ОТПРАВИТЬ</Button>
      </div>
    </div>
  );
};

export default PhoneBack;
