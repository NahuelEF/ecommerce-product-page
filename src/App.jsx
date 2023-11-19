import { useState } from "react";
import { Header, Home } from "./layout";

export default function App() {
  const [countProducts, setCountProducts] = useState(0);

  const addToCart = (product) => setCountProducts(countProducts + product);

  const deleteProducts = () => setCountProducts(0);

  return (
    <>
      <Header countProducts={countProducts} deleteProducts={deleteProducts} />
      <Home addToCart={addToCart} />
    </>
  );
}
