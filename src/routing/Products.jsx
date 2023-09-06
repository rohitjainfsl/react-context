import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Cart from "./Cart";
import { routingContext } from "./App";

function Products() {
  const [products, setProducts] = useState([]);
  
  const {cart, setCart} = useContext(routingContext)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  function handleAddToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }
  function checkProductInCart(product) {
    const itemInCart = cart.find((item) => {
      return item.id === product.id;
    });
    return itemInCart === undefined ? false : true;
  }

  function handleRemoveFromCart(e, product) {
    e.preventDefault();
    setCart(
      cart.filter((item) => {
        return item.id !== product.id;
      })
    );
  }

  

  

  function trimmed(input){
    return (input.split("").length > 50) ? input.slice(0, 51) + "..." : input
  }

  return (
    <>
      <Cart />
      <div className="products content">
        <h2>Products</h2>
        <div className="product-wrapper">
          {products.map((product, index) => {
            return (
              <div className="product" key={index}>
                <Link to={"/products/" + index}>
                  <img src={product.image} alt="Product Photo" />
                </Link>
                <h3>{trimmed(product.title)}</h3>
                <p><span><AttachMoneyIcon /></span>{product.price}</p>
                {checkProductInCart(product) ? (
                  <a href="" onClick={(e) => handleRemoveFromCart(e, product)}>
                    Remove From Cart
                  </a>
                ) : (
                  <a href="" onClick={(e) => handleAddToCart(e, product)}>
                    Add To Cart
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
