import { useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import Product from "../components/Product";
import data from "../database/data";

export default function Home({ products }) {
  return (
    <Layout title="Homepage">
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4">
        <section className="products-outer col-span-3 order-last lg:order-first">
          <div className="products grid sm:grid-cols-2 gap-8">
            {products.map((p) => (
              <Product key={p.id} p={p} />
            ))}
          </div>
        </section>
        <aside className="cart lg:col-span-2 px-4">
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
