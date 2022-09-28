import React from "react";
import { ButtonTelegram } from "../../styles";
import "../Button/styles.css";

export const Button = () => {
  return (
    <div className="button-component">
      <ButtonTelegram className="redirect-btn">
        {" "}
        <a href="https://t.me/chrissytirocertoTips" target={"_blank"}>
          PARTICIPAR DO GRUPO FREE
        </a>
      </ButtonTelegram>
    </div>
  );
};
