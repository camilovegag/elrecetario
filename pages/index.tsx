import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>El Recetario | Inicio</title>
        <meta name="description" content="Recetas para toda la familia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>El recetario</h1>
    </div>
  );
};

export default Home;
