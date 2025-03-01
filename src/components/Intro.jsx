import React from "react";
import styles from "./Intro.module.css";
import c1 from "../imgs/cube1.png";
import c2 from "../imgs/cube2.png";
import c3 from "../imgs/cube3.png";


const intro = () => {

    const tbr = [
        {id: "01", title: "Планирование участка", img: c1, text: "Выполняем планирование участка с помощью эксковатора-погрузчика."},
        {id: "02", title: "Подготовка основания", img: c2, text: "Укладываем асфальт и заливаем бетон. Ограничиваем площадку бордюрным камнем"},
        {id: "03", title: "Укладка покрытия", img: c3, text: "Замешиваем крошку со связующим веществом. Распределяем смесь и Раскатываем валиком"},
    ];

    return (
        <section className = {styles.work}>

                <h2>Делаем Детские и спортивные площадки под ключ</h2>
                <div className = {styles.cards}>
                    {tbr.map((t) => (
                        <div className={styles.card}>
                            <h3>{t.title}</h3>
                            <span className={styles.cardnumber}>{t.id}</span>
                            <img src={t.img} alt={t.title} />
                            <p>{t.text}</p>
                        </div>
                    ))}
                </div>  

        </section>
    )
}

export default intro;