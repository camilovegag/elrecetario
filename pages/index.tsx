import { createClient } from "contentful";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import banner from "../assets/banner.png";
import Banner from "../components/Banner";
import CardList from "../components/CardList";
import type { Recipe } from "../types/recipe";

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
    <div className="layout">
      <Head>
        <title>El Recetario | Inicio</title>
        <meta name="description" content="Recetas para toda la familia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner image={`${banner.src}`} />
      <h2>Recetas</h2>
      <CardList recipes={recipes} />
    </div>
  );
};

export default Home;
