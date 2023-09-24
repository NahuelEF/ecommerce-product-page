import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src="src/assets/images/logo.svg" alt="" />
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#"> Men</a>
          </li>
          <li>
            <a href="#"> Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>
          <button type="button">
            <img src="src/assets/images/icon-cart.svg" alt="" />
          </button>
          <img src="src/assets/images/image-avatar.png" alt="" />
        </div>
      </header>
      <main>
        <section>
          <div>
            <img src="src/assets/images/image-product-1.jpg" alt="" />
            <ul>
              <li>
                <img src="src/assets/images/image-product-1-thumbnail.jpg" alt="" />
              </li>
              <li>
                <img src="src/assets/images/image-product-2-thumbnail.jpg" alt="" />
              </li>
              <li>
                <img src="src/assets/images/image-product-3-thumbnail.jpg" alt="" />
              </li>
              <li>
                <img src="src/assets/images/image-product-4-thumbnail.jpg" alt="" />
              </li>
            </ul>
          </div>
        </section>
        <section>
          <span>Sneaker Company</span>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
            they’ll withstand everything the weather can offer.
          </p>
          <div>
            <span>$125.00</span>
            <small>50%</small>
            <s>$250.00</s>
          </div>
          <div>
            <div>
              <button type="button">-</button>
              <input type="number" name="count" id="count" readOnly defaultValue="0" />
              <button type="button">+</button>
            </div>
            <button type="button">Add to cart</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
