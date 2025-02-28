import React from "react";
import styles from "./Contacts.module.css";
import img from "../imgs/contactsimg.png";
import call from "../imgs/svg/Vector.svg";
import mail from "../imgs/svg/Vector (1).svg";
import adress from "../imgs/svg/Group.svg";
import pattern from "../imgs/svg/Group 173.svg";


const Contacts = () => {
  return (
    <section className={styles.contacts}>

        {/* <img src={img} alt="Контакты"/> */}

        <div className={styles.imageWrapper}>
             <img src={img} alt="Контакты" className={styles.imgg} />
             <img src={pattern} alt="Узор" className={styles.pattern} />
        </div>


        <div className={styles.info}>
            
          <h2>КОНТАКТЫ</h2>

          <div className={styles.contactItem}>
            <img src={call} alt="Телефон" className={styles.icon} />
            <a href="tel:+74951044441">8-495-104-44-41</a>
            <span className={styles.separator}>|</span>
            <img src={call} alt="Телефон" className={styles.icon} />
            <a href="tel:+74951044442">8-495-104-44-42</a>
          </div>

          <div className={styles.contactItem}>
            <img src={mail} alt="Email" className={styles.icon} />
            <a href="mailto:kap-investstroy@mail.ru">kap-investstroy@mail.ru</a>
          </div>

          <div className={styles.contactItem}>
            <img src={adress} alt="Адрес" className={styles.icon} />
            <p>Московская обл, г. Химки, ул. Ленинградская, д. 29, оф. 817/3</p>
          </div>

        </div>

    </section>
  );
};

export default Contacts;
