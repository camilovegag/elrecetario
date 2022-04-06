import React from "react";
import Styles from "./modules/Card.module.css";
import Image from "next/image";
import ImagePozole from "../assets/images/images.jpg";

const Card = ({ image, title }) => {
  return (
    <div className={Styles.recipeCard}>
      <Image
        src={ImagePozole}
        width="100%"
        height={84}
        layout="responsive"
        alt="Card"
      />
      <div className={Styles.recipeCard__title}>title</div>
    </div>
  );
};

export default Card;
