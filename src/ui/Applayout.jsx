import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const Applayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className='layout'>
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default Applayout;
