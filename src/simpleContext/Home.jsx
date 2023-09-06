import React, { useContext } from "react";
import { cont } from "./App";

function Home() {
  const {counter, handleClick} = useContext(cont);

// const contt = useContext(cont)
// const counter = contt.counter
// const handleClick = contt.handleClick

  return (
    <>
      <p>{counter}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default Home;
