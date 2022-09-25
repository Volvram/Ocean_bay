import React from "react";

import "./AboutUs.scss";
import styles from "./styles.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div id="aboutUs">
      <div className={styles.aboutUs}>О НАС</div>
      <div>
        Продвижение проекта переворачивает охват аудитории. Соц-дем
        характеристика аудитории синхронизирует conversion rate, учитывая
        результат предыдущих медиа-кампаний. Формат события неверно
        обуславливает анализ зарубежного опыта, оптимизируя бюджеты. В рамках
        концепции Акоффа и Стэка, рекламный макет многопланово экономит
        связанный пул лояльных изданий. Привлечение аудитории экономит из ряда
        вон выходящий продукт. Повторный контакт основан на опыте повседневного
        применения.
      </div>
    </div>
  );
};

export default AboutUs;
