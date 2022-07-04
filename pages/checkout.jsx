import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import auth from "../utils/firebase.init";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return;
  }

  if (!user) {
    router.push("/login");
    return <Loading />;
  }

  return (
    <Layout title="Checkout">
      <div>
        <h1 className="text-4xl text-center">Checkout page</h1>
        <div className="text-3xl text-green-600 text-center">
          Successfully Checked Out
        </div>
        <div className="text-6xl text-gray-600 text-center">
          Coming Soon......
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
