/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  image: string;
  title: string;
};

const Card = ({ image, title }: CardProps) => {
  return (
    <div className={styles.recipeCard}>
      <figure>
        <img src={image} alt="Banner image" className={styles.image} />
      </figure>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Card;
