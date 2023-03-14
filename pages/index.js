import React from "react";
import Head from "next/head";
// import HomePage from "src/containers/home";
import HomePage from "@containers/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>SDG app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    </>
  );
}
