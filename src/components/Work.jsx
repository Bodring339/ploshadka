import React from "react";
import styles from "./Work.module.css";
import w1 from "../imgs/work1.png";
import w2 from "../imgs/work2.png";
import w3 from "../imgs/work3.png";
import w4 from "../imgs/work4.png";
import w5 from "../imgs/work5.png";
import w6 from "../imgs/work6.png";
import w7 from "../imgs/work7.png";
import w8 from "../imgs/work8.png";
import w9 from "../imgs/work9.png";

const work = () => {

    const tbr = [
        {id: "01", title: "Спортивные площадки", img: w1, text: "Теннисные корты, баскетбольные и футбольные площадки, workout, беговые и велодорожки"},
        {id: "02", title: "Детские игровые площадки", img: w2, text: "Детские игровые площадки в городском дворе, детском саду или школе"},
        {id: "03", title: "Спортивные объекты", img: w3, text: "Стадионы, ледовые дворцы и катки, батутные центры, спортивные и фитнес залы, бассейны"},
        {id: "04", title: "Кафе и рестораны ", img: w4, text: "Открытые веранды, террасы и ступени"},
        {id: "05", title: "Склады, заводы и фермы", img: w5, text: "Склады, производства, коровники КРС и конюшни"},
        {id: "06", title: "Частные территории", img: w6, text: "Дорожки, отмостки, веранды, ступени, детские площадки и игровые зоны"},
        {id: "07", title: "Разметка спортивных площадок", img: w7, text: "Для мини-футбола, баскетбола и т.д."},
        {id: "08", title: "Разметка стадионов", img: w8, text: "И других спортивных объектов и площадок"},
        {id: "09", title: "Универсальная разметка ", img: w9, text: "Разметка для всех видов спорта"},
    ];

    return (
        <section className = {styles.work}>

                <h2>С чем мы работаем?</h2>
                <div className = {styles.cards}>
                    {tbr.map((t) => (
                        <div className={styles.card}>
                            <p>{t.title}</p>
                            <span className={styles.cardnumber}>{t.id}</span>
                            <img src={t.img} alt={t.title} />
                            <p>{t.text}</p>
                        </div>
                    ))}
                </div>  

        </section>
    )
}

export default work;