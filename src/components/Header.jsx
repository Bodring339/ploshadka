import React from "react";
import styles from "./Header.module.css";

import logo from "../imgs/svg/logox.svg";
import mailIcon from "../imgs/svg/icon mail.svg";
import phoneIcon from "../imgs/svg/icon phone.svg";
import bgImage from "../imgs/back.png";
import priceCardImage from "../imgs/menu.png";

const Header = () => {
    return (
        <section className = {styles.main}>
            <header className={styles.header}>

                <div className={styles.navbar}>
                    <img src={logo} alt="Логотип" className={styles.logo} />
                    <nav className={styles.navLinks}>
                        <a href="#" className={styles.link}>Главная</a>
                        <a href="#" className={styles.link}>Наши услуги</a>
                        <a href="#" className={styles.link}>О компании</a>
                        <a href="#" className={styles.link}>Контакты</a>
                    </nav>
                    <div className={styles.icons}>
                        <img src={mailIcon} alt="Почта" className={styles.icon} />
                        <img src={phoneIcon} alt="Телефон" className={styles.icon} />
                    </div>
                </div>

                <div className={styles.hero} style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className={styles.priceCard}>
                        <img src={priceCardImage} alt="Покрытие" className={styles.priceImage} />
                        <div className={styles.priceText}>
                            <p>Укладка покрытий из резиновой крошки</p>
                            <p>от 1100 руб/м²</p>
                        </div>
                    </div>
                    <h1 className={styles.title}>Детские и спортивные площадки под ключ</h1>
                    <p className={styles.subtitle}>ПОДГОТАВЛИВАЕМ ОСНОВАНИЕ, УСТАНАВЛИВАЕМ ОБОРУДОВАНИЕ, НАНОСИМ РАЗМЕТКУ.</p>
                </div>
                
            </header>
        </section>
    );
};

export default Header;



