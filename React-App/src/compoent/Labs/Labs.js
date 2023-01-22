import React from "react";
import { Link, Outlet } from "react-router-dom";

function Labs() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/labs"> List </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Labs;
