import { signOut } from "@firebase/auth";
import Link from "next/link";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../utils/firebase.init";
import { Store } from "../utils/Store";

const Navbar = () => {
  const { state, dispatch } = useContext(Store);
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
    window.location = "/";
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Home</a>
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link href="/cart">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-error badge-sm indicator-item">
                    {state.cart.cartItems.length}
                  </span>
                </a>
              </Link>
            </div>
          </label>
        </div>
        <div className="ml-3 flex gap-3 items-center">
          {user && (
            <>
              <span>{user?.displayName || "UserName"}</span>

              <button className="btn btn-ghost" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
          {!user && (
            <>
              <Link href="/login">
                <a className="btn btn-ghost">Login</a>
              </Link>
              <Link href="/register" className="btn btn-ghost">
                <a className="btn btn-ghost">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
