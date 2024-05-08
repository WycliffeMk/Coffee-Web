import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="Home">
          <Home />
        </div>
      </main>
    </div>
  );
};

export default App;
