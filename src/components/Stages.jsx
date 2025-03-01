import React from "react";
import styles from "./Stages.module.css";
import s1 from "../imgs/stage1.png";
import s2 from "../imgs/stage2.png";
import s3 from "../imgs/stage3.png";
import s4 from "../imgs/stage4.png";
import s5 from "../imgs/stage5.png";
import s6 from "../imgs/stage6.png";

const stages = () => {

    const tbr = [
        {id: "01", title: "Демонтаж покрытий и МАФов", img: s1, text: "При необходимости демонтируем старые покрытия и МАФы."},
        {id: "02", title: "Выработка грунта и его утилизация", img: s2, text: "Вывозим грунт с объекта спецтехникой и утилизируем."},
        {id: "03", title: "Планирование участка", img: s3, text: "Выполняем планирование участка с помощью экскаватора-погрузчика."},
        {id: "04", title: "Подготовка основания с бордюрами", img: s4, text: "Укладываем асфальт или заливаем бетон. Ограничиваем площадку бордюрным камнем."},
        {id: "05", title: "Укладка покрытия", img: s5, text: "Замешиваем крошку со связующим веществом. Распределяем смесь и раскатываем термоваликом."},
        {id: "06", title: "Уборка мусора по завершении работ", img: s6, text: "Убираем весь строительный мусор и вывозим с площадки."},
    ];

    return (
        <section className = {styles.stages}>

                <h2>Этапы укладки</h2>
                <h3>Процесс укладки проходит в несколько этапов:</h3>
                <div className = {styles.cards}>
                    {tbr.map((t) => (
                        <div className={styles.card}>
                            <h4>{t.title}</h4>
                            <span className={styles.cardnumber}>{t.id}</span>
                            <img src={t.img} alt={t.title} />
                            <p>{t.text}</p>
                        </div>
                    ))}
                </div>  

        </section>
    )
}

export default stages;