import React, { Link } from "react";
import { ButtonTelegram } from "../../styles";
import styles from "../Button/styles.css";

export const Button = () => {
  return (
    <div className="button-component">
      <ButtonTelegram className="redirect-btn">
        {" "}
        <a href="https://t.me/chrissytirocertoTips">PARTICIPAR DO GRUPO FREE</a>
      </ButtonTelegram>
    </div>
  );
};
