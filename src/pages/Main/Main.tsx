import React from "react";

import topBackground from "@assets/img/topBackground.svg";
import { log } from "@utils/log";
import { useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import "./Main.scss";
import styles from "./styles.module.scss";

const Main: React.FC = () => {
  let { hash } = useLocation();

  React.useEffect(() => {
    log(hash);
    if (hash !== "") {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        hash = "";
        log(hash);
      }, 0);
    }
  }, [hash]);

  return (
    <div>
      <div
        className={styles.topBackground}
        style={{ backgroundImage: `url(${topBackground})` }}
      >
        <Header />
        <div className={styles.topBackground_intro}>
          <div className={styles.topBackground_intro_title}>
            ЯХТ-КЛУБ OCEAN BAY.
          </div>
          <hr className={styles.topBackground_intro_hr}></hr>
          <div className={styles.topBackground_intro_slogan}>
            МЫ РАБОТАЕМ РАДИ ВАШЕГО УДОВОЛЬСТВИЯ.
          </div>
        </div>
      </div>
      <div id="aboutUs">
        <div className={styles.aboutUs}>О НАС</div>
        <div>
          Продвижение проекта переворачивает охват аудитории. Соц-дем
          характеристика аудитории синхронизирует conversion rate, учитывая
          результат предыдущих медиа-кампаний. Формат события неверно
          обуславливает анализ зарубежного опыта, оптимизируя бюджеты. В рамках
          концепции Акоффа и Стэка, рекламный макет многопланово экономит
          связанный пул лояльных изданий. Привлечение аудитории экономит из ряда
          вон выходящий продукт. Повторный контакт основан на опыте
          повседневного применения.
        </div>
      </div>
    </div>
  );
};

export default Main;
