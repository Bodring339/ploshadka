import React from "react";
import styles from "./Types.module.css";
import tp1 from "../imgs/type1.png";
import tp2 from "../imgs/type2.png";
import tp3 from "../imgs/type3.png";
import tp4 from "../imgs/type4.png";

const types = () => {

    const tbl = [
        {img: tp1, title: "Бесшовное покрытие из резиновой крышки", t1: "10-30 мм", t2: "любой цвет", t3: "асфальт, бетон", t4: "от 1100 руб."},
        {img: tp2, title: "Бесшовное каучуковое покрытие (EPDM)", t1: "5-30 мм", t2: "любой цвет", t3: "асфальт, бетон", t4: "от 2650 руб."},
        {img: tp3, title: "Сэндвич покрытие (резиновая крошка + каучук)", t1: "10-30 мм", t2: "любой цвет", t3: "асфальт, бетон", t4: "от 2650 руб."},
        {img: tp4, title: "Спрей покрытие", t1: "10-40 мм", t2: "любой цвет", t3: "асфальт, бетон", t4: "от 2150 руб."},

    ];

    return (
        <section className = {styles.types}>

            <div className = {styles.cases}>
                <h2>Виды покрытий</h2>
                <h3>Мы предлагаем бесшовное покрытие различных типов</h3>
                <div className = {styles.cards}>
                    {tbl.map((t) =>(
                        <div className = {styles.card}>
                            <img src={t.img} alt="" />
                            <h4>{t.title}</h4>
                            <p className = {styles.tol}>Толщина: {t.t1}</p>
                            <p>Цветовая гамма: {t.t2}</p>
                            <p>Основание для укладки: {t.t3}</p>
                            <br />
                            <h5>Цена с укладкой: {t.t4}</h5>
                            <button className={styles.order}>Заказать</button>
                            </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default types;