import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  cartItems,
  addToCart,
  updateCartQuantity,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          addToCart={addToCart}
          updateCartQuantity={updateCartQuantity}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;
