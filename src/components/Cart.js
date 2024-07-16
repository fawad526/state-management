import React, { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import { Cart } from "../Context";
function CartPage() {
  const [total, setTotal] = useState();
  const { cart } = useContext(Cart);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
