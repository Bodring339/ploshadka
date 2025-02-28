import React from "react";
import styles from "./Clients.module.css";
import gov from "../imgs/gov.png";
import business from "../imgs/business.png";
import privat from "../imgs/privat.png";
import construction from "../imgs/construction.png";

const Clients = () => {
    const clients = [
      { id: "01", image: gov, title: "Государственные учреждения", text: "Администрации населенных пунктов, детские сады, школы, больницы и т.д." },
      { id: "02", image: business, title: "Коммерческие объекты", text: "Теннисные корты, спортивные и детские площадки, жилые комплексы." },
      { id: "03", image: privat, title: "Частные клиенты и ТСЖ", text: "Коттеджные поселки, владельцы загородных домов и ТСЖ." },
      { id: "04", image: construction, title: "Строительные компании", text: "Победители тендеров по благоустройству, застройщики, генеральные подрядчики." }
    ];
  
    return (
      <section className = {styles.clients}>
          <h2>Наши заказчики и постоянные партнеры</h2>
          <div className = {styles.cards}>
            {clients.map((t) => (
              <div className = {styles.card}>
                <div className = {styles.cardnumber}>{t.id}</div>
                <img src={t.image} alt={t.title} />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
      </section>
    );
  };
  
  export default Clients;