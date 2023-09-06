import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useState } from "react";
import { routingContext } from "./App";

function Cart() {
  const {cart} = useContext(routingContext)
  const [cartInView, setCartInView] = useState(false);
  

  function slideCartIntoView() {
    setCartInView(!cartInView);
  }
  return (
    <div className="cart sticky" style={{ right: cartInView ? "0" : "-250px" }}>
      <div className="handle" onClick={slideCartIntoView}>
        Cart <ShoppingCartIcon />
      </div>
      <ul className="cart-items">
        {cart.map((item, index) => {
          return (
            <li key={index}>
              {
                <>
                  <img src={item.image} alt="Cart Product Photo" />
                  <span>{item.title}</span>
                </>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Cart;
