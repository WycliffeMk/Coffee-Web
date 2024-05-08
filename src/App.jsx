import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
  
        <div id="products">
          <Product/>
        </div>

        <div id="review">
          <Review/>
        </div>

      </main>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default App;
