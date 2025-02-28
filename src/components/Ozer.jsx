import React from "react";
import styles from "./Ozer.module.css";
import oz1 from "../imgs/other1.jpg";
import oz2 from "../imgs/other2.png";
import oz3 from "../imgs/other3.png";
import oz4 from "../imgs/other4.jpg";
import oz5 from "../imgs/other5.png";
import oz6 from "../imgs/other6.png";
import oz7 from "../imgs/other7.jpg";
import oz8 from "../imgs/other8.png";

const ozer = () => {
    const tbl = [
        {id: "01", title: "Покрытия из резиновой крошки", img: oz1, button: "/services"},
        {id: "02", title: "Укладка каменного ковра", img: oz2, button: "/services"},
        {id: "03", title: "Аренда строительной техники", img: oz3, button: "/services"},
        {id: "04", title: "Изготовление и установка металлических ограждений (2D, 3D, спортивные)", img: oz4, button: "/services"},
        {id: "05", title: "Нанесение разметки (дорожная, спортивная)", img: oz5, button: "/services"},
        {id: "06", title: "Нанесение рисунков на резиновое бесшовное покрытие", img: oz6, button: "/services"},
        {id: "07", title: "Благоустройство", img: oz7, button: "/services"},
        {id: "08", title: "Изготовление материалов для укладки покрытий", img: oz8, button: "/services"},
    ];

        return (
            <section className = {styles.ozer}>
                <h2>Другие услуги</h2>
                <div className = {styles.cards}>
                    {tbl.map((t) => (
                        <div className={styles.card}>
                            <h3>{t.title}</h3>
                            <span className={styles.cardnumber}>{t.id}</span>
                            <img src={t.img} alt={t.title} />
                              <button className={styles.learnmore}>Узнать подробнее</button>
                        </div>
                    ))}
                </div>
            </section>
        )

}

export default ozer;