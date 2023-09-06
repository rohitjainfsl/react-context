import React, { createContext, useState } from "react";
import Home from "./Home";
export const cont = createContext(null);

function App() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <>
      <cont.Provider value={{counter, handleClick}}>
        <Home />
      </cont.Provider>
    </>
  );
}

export default App;
