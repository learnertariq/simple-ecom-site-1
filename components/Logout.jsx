import { signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import auth from "../../utils/firebase.init";
import Loading from "../Shared/Loading";

const Logout = () => {
  useEffect(() => {}, []);

  return <Loading />;
};

export default Logout;
