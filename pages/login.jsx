import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import googleLogo from "../assets/google.png";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import Image from "next/image";
import auth from "../utils/firebase.init";
import Alert from "../components/Alert";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  ///////////////// Firebase methods
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  ///////////////// Firebase methods

  useEffect(() => {
    if (user || userGoogle) {
      router.push("/");
    }
  }, [user, userGoogle]);

  const onSubmit = async (data, e) => {
    // sign in user
    await signInWithEmailAndPassword(data.email, data.password);

    // clear the form
    e.target.reset();
  };

  if (loading || loadingGoogle) {
    return <Loading />;
  }

  return (
    <section className="max-w-sm mx-auto mb-12">
      <h2 className="text-4xl mb-8 font-bold text-center">Login</h2>
      <div className="social-container mb-8 text-center">
        <button
          className="btn btn-primary btn-outline rounded-full"
          onClick={() => signInWithGoogle()}
        >
          <Image src={googleLogo} alt="" width="30" height="30" />
        </button>
      </div>
      <div className="divider">OR</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />
        {(error || errorGoogle) && (
          <Alert>{error?.message || errorGoogle?.message}</Alert>
        )}
        <br />

        <button type="submit" className="btn btn-primary tracking-widest">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
