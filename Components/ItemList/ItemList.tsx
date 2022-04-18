import Link from "next/link";
import styles from "./ItemList.module.css";

type ItemListProps = {
  name: string;
  link: string;
};
const ItemList = (props: ItemListProps) => {
  return (
    <li className={styles.item}>
      <Link href={props.link}>
        <a className={styles.link}>{props.name}</a>
      </Link>
    </li>
  );
};

export default ItemList;
