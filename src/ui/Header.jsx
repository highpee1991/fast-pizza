import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";

const Header = () => {
  return (
    <header>
      <Link to='/'>Fast React Pizza Co.</Link>
      <SearchOrder />

      <p>Ipadeola Taiwo</p>
    </header>
  );
};

export default Header;
