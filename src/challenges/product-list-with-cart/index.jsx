import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ChallengeLayout from "../../components/ChallengeLayout";
import { useState, useEffect } from "react";
import productData from "../../data/data.json";

const ProductListWithCartPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(productData);
    console.log(products);
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]); // Clears all items from the cart
  };

  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id); // Remove item if quantity reaches 0
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <>
      <ChallengeLayout title={"Product list with cart"}>
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="flex-1 w-full md:w-2/3 md:pr-4 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-3">Desserts</h1>
            <ProductList
              products={products}
              cartItems={cartItems}
              addToCart={addToCart}
              updateCartQuantity={updateCartQuantity}
            />
          </div>
          <div className="w-full mx-auto md:w-1/3 md:sticky md:top-4 md:self-start">
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          </div>
        </div>
      </ChallengeLayout>
    </>
  );
};

export default ProductListWithCartPage;
