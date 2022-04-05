import type { NextPage } from "next";
import Head from "next/head";
import Card from "../Components/Card";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>El Recetario | Inicio</title>
        <meta name="description" content="Recetas para toda la familia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>El recetario</h1>
      <Card image="agsafasf" title="Pozole blanco" />
    </div>
  );
};

export default Home;
