import React from "react";
import styles from "./Ccw.module.css";
import cs1 from "../imgs/case1.png";
import cs2 from "../imgs/case2.png";
import cs3 from "../imgs/case3.png";
import cs4 from "../imgs/case4.png";
import cs5 from "../imgs/case5.png";
import cs6 from "../imgs/case6.png";
import cs7 from "../imgs/case7.png";

const ccw = () => {

    const tbl = [
    {img: cs1, title: "Карта России, ВДНХ", t1: "250 м²", t2: "ВДНХ", t3: ""},

    {img: cs2, title: "Спортивная площадка", t1: "50 м²", t2: "Школа  “One“ ", t3: "Спортивная площадка"},

    {img: cs3, title: "Комплекс площадок в ЖК", t1: "870 м²", t2: "ЖК Пригород Лесное", t3: "Детская и спортивная площадка"},

    {img: cs4, title: "Площадки в школе", t1: "70 м²", t2: "ГБОУ Школа 1387", t3: "Детская и спортивная  площадка"},

    {img: cs5, title: "Спортивная площадка", t1: "60 м²", t2: "СНТ Красная Пресня, Луговая 5", t3: "Спортивная площадка"},

    {img: cs6, title: "Спортивная площадка", t1: "30 м²", t2: "ЖК Лобачевского", t3: "Спортивная площадка"},

    {img: cs7, title: "Спортивная площадка", t1: "60 м²", t2: "Парк имени Величк", t3: "Спортивная площадка"},
    ];

    return (
        <section className = {styles.ccw}>

            <div className = {styles.cases}>
                <h2>Кейсы</h2>
                <div className = {styles.cards}>
                    {tbl.map((t) =>(
                        <div className = {styles.card}>
                            <img src={t.img} alt="" />
                            <h3>{t.title}</h3>
                            <p>Площадь: {t.t1}</p>
                            <p>Место: {t.t2}</p>
                            <p>Тип площадки: {t.t3}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ccw;