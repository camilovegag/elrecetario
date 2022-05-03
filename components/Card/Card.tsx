/* eslint-disable @next/next/no-img-element */
import styles from "./Card.module.css";

type CardProps = {
  image: string;
  title: string;
};

const Card = ({ image, title }: CardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt="Banner image" />
      <section className={styles.title}>
        <h4>{title}</h4>
      </section>
    </article>
  );
};

export default Card;
