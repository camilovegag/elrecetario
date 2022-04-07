import { createClient } from "contentful";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Card from "../components/Card";
import { Recipe } from "../types/recipe";

export const getStaticProps = async () => {
  if (
    !process.env.CONTENTFUL_SPACE_ID ||
    !process.env.CONTENTFUL_ACCESS_TOKEN
  ) {
    throw new Error("Contentful Space Id or Access Token not found");
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: response.items as Recipe[],
    },
    revalidate: 60,
  };
};

const Home = ({ recipes }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>El Recetario | Inicio</title>
        <meta name="description" content="Recetas para toda la familia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>El recetario</h1>
      {recipes.map((recipe) => {
        const { url } = recipe.fields.image.fields.file;

        return (
          <Card
            key={recipe.sys.id}
            title={recipe.fields.title}
            image={`https:${url}`}
          />
        );
      })}
    </div>
  );
};

export default Home;
