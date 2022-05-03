import styles from "./CardList.module.css";
import Card from "../Card/Card";
import type { Recipe } from "../../types/recipe";

type CardListProps = {
  recipes: Recipe[];
};

const CardList = ({ recipes }: CardListProps) => {
  return (
    <section className={styles.layout}>
      {recipes.map((recipe) => (
        <Card
          key={recipe.sys.id}
          title={recipe.fields.title}
          image={`https:${recipe.fields.image.fields.file.url}`}
        />
      ))}
    </section>
  );
};

export default CardList;
