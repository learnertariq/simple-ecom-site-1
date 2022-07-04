import { useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import Product from "../components/Product";
import data from "../database/data";
import { Store } from "../utils/Store";

export default function Home({ products }) {
  return (
    <Layout title="Homepage">
      <section className="container mx-auto grid grid-cols-5 gap-4">
        <section className="products col-span-3 grid grid-cols-2 gap-8">
          {products.map((p) => (
            <Product key={p.id} p={p} />
          ))}
        </section>
        <aside className="cart col-span-2 px-4">
          <Cart />
        </aside>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = data;

  return {
    props: {
      products,
    },
  };
}
