import React from "react";
import styles from "../Article/styles.css";
import { Button } from "../Button/Button";

export const Article = () => {
  return (
    <div>
      <div className="article-container">
        <h3>QUEM SOMOS?</h3>
        <p>
          Me chamo Vinicius Godeiro e estou no meio das apostas esportivas há 3
          anos, mais especificamente na NBA.
        </p>
        <p>
          Quero mudar de vez o pensamento das pessoas sobre o mercado de
          investimento esportivo e mostrar que, através de uma análise séria e
          responsável, pode-se obter ótimos resultados.
        </p>
        <p>
          Trabalhamos com muita transparência e nossas análises sempre buscam
          extrair o verdadeiro valor de cada odd em todas as nossas apostas.
        </p>
        <br />
        <h3>
          Venha agora fazer parte do meu grupo 100% gratuito e garantir as
          melhores análises do mercado!
        </h3>
      </div>
      <Button />
    </div>
  );
};
