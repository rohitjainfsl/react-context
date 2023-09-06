// Alias: Something as something
import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import NotFound from "./NotFound";
import Products from './Products'
import SingleProduct from './SingleProduct'
import './routing.css'

export const routingContext = createContext(null)


//NESTED ROUTES
//OUTLET

// CONTEXT API

// REDUX

function App() {

  const [cart, setCart] = useState([])


  return (
    <>
    <routingContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<SingleProduct />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      </routingContext.Provider>
    </>
  );
}


export default App;
