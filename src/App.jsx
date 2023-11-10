import { useState } from "react";
import { Header, Home } from "./layout";

export default function App() {
  const [countProducts, setCountProducts] = useState(0);

  const addToCart = (product) => {
    setCountProducts(countProducts + product);
  };

  return (
    <>
      <Header countProducts={countProducts} />
      <Home addToCart={addToCart} />
    </>
  );
}
