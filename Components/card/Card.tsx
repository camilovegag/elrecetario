/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, title }) => {
  return (
    <div className={styles.recipeCard}>
      <figure>
        <img src="/images.jpg" alt="Banner image" className={styles.image} />
      </figure>
      <div className={styles.title}>
        <h4>Title</h4>
      </div>
    </div>
  );
};

export default Card;
