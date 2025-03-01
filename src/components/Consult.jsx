import React from "react";
import styles from "./Consult.module.css";
import cons from "../imgs/cons.png";
import pattern from "../imgs/svg/Group 169.svg";

const consult = () => {
    return (
        <section className = {styles.consult}>
            <div className = {styles.lar}>

                <div className = {styles.img}>
                <img className = {styles.cons} src={cons} alt="" />
                <img className = {styles.pattern} src={pattern} alt="" />
                </div>

                <form className = {styles.reg}>
                    <h2>Консультация</h2>
                    <p>Если вам нужна консультация, оставьте свои контактные данные и мы свяжемся с вами.</p>
                    <input type = "text" placeholder="Имя*" required /> <br />
                    <input type = "text" placeholder="Номер телефона*" required /> <br />
                    <input type = "text" placeholder="E-mail*"required /> <br />
                    <button>Перезвоните мне!</button>
                </form>
            </div>
        </section>
    )
}

export default consult;