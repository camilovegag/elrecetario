/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";
import styles from "./Banner.module.css";

type BannerProps = {
  image: string;
};

const Banner = ({ image }: BannerProps) => {
  return (
    <article className={styles.banner}>
      <img className={styles.image} src={image} alt="Banner image" />
    </article>
  );
};

export default Banner;
