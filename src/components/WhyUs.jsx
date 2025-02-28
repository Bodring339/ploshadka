import React from "react";
import styles from "./WhyUs.module.css";
import { FaClock, FaCloudRain, FaCheckCircle, FaTruck } from "react-icons/fa";

const WhyUs = () => {

  const tbl = [
    {id: "01", icon: <FaClock className={styles.icon} />, title: "Работаем быстро", text: "Укладываем до 500 кв.м. покрытия в день."},
    {id: "02", icon: <FaCloudRain className={styles.icon} />, title: "Не зависим от погоды", text: "Выполняем работы в срок вне зависимости от дождя и холода, благодаря использованию тентовых навесов с отоплением и своей спецтехники."},
    {id: "03", icon: <FaCheckCircle className={styles.icon} />, title: "Соблюдаем сроки", text: "Фиксируем сроки в договоре и всегда соблюдаем технологию укладки."},
    {id: "04", icon: <FaTruck className={styles.icon} />, title: "Спецтехника", text: "Свой парк спецтехники, которой достаточно для 98% работ. Доставляем на объект экскаватор-погрузчик, самосвал, манипулятор или кран."},
  ];

  return (
    <section className={styles.whyus}>
        <h2>Почему мы?</h2>
        <div className={styles.cards}>
            {tbl.map((t) => (
              <div className = {styles.card}>
              {t.icon}
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              </div>
            ))}
        </div>
    </section>
  );
};

export default WhyUs;

