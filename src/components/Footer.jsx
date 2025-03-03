import React from 'react';
import styles from './Footer.module.css';
import logo from "../imgs/svg/social-icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        <div className={styles.left}>
          <img src={logo} alt="Капитал-Инвестстрой"/>
          <p>ООО «КАПИТАЛ-ИНВЕСТСТРОЙ»</p>
          <p>ИНН: 5047175037</p>
          <p>КПП: 504701001</p>
          <p>ОГРН: 1155047011547</p>
        </div>

        <div className={styles.center}>
          <h3>Меню</h3>
          <a className={styles.oppa} href="/">Главная</a> <br />
          <a href="/services">Наши услуги</a> <br />
          <a href="/about">О компании</a> <br />
          <a href="/contacts">Контакты</a>
        </div>

        <div className={styles.right}>
          <h3>Документы</h3>
          <a href="/privacy">Политика конфиденциальности</a> <br />
          <a href="/offer">Оферта</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Все права защищены. 2024.</p>
        <p style={{ color: '#666666' }}> сайт разработан Moul Digital Agency</p>
      </div>
    </footer>
  );
};

export default Footer;
