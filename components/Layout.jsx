import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
