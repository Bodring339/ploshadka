import React from "react";
import styles from "./Ccw.module.css";
import cs1 from "../imgs/case1.png";
import cs2 from "../imgs/case2.png";
import cs3 from "../imgs/case3.png";
import cs4 from "../imgs/case4.png";
import cs5 from "../imgs/case5.png";
import cs6 from "../imgs/case6.png";
import cs7 from "../imgs/case7.png";
import w1 from "../imgs/work1.png";
import w2 from "../imgs/work2.png";
import w3 from "../imgs/work3.png";
import w4 from "../imgs/work4.png";
import w5 from "../imgs/work5.png";
import w6 from "../imgs/work6.png";
import w7 from "../imgs/work7.png";
import w8 from "../imgs/work8.png";
import w9 from "../imgs/work9.png";

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