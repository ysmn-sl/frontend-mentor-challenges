const ProductCard = ({ product, cartItems, addToCart, updateCartQuantity }) => {
  const cartItem = cartItems.find((item) => item.id === product.id); // Find the product in the cart

  const handleQuantityChange = (increment) => {
    if (cartItem) {
      const newQuantity = cartItem.quantity + increment;
      if (newQuantity === 0) {
        updateCartQuantity(cartItem.id, 0);
      } else {
        updateCartQuantity(cartItem.id, newQuantity);
      }
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative flex items-center justify-center">
        <picture>
          <source
            srcSet={product.image.mobile}
            media="(max-width: 640px)" // Mobile screen size
          />
          <source
            srcSet={product.image.tablet}
            media="(max-width: 1024px)" // Tablet screen size
          />
          <source
            srcSet={product.image.desktop}
            media="(min-width: 1025px)" // Desktop screen size
          />
          <img
            src={product.image.desktop} // Fallback in case no media query matches
            alt={product.name}
            className="w-full h-42 object-cover shadow-md rounded-md" // Tailwind classes
          />
        </picture>

        {cartItem ? (
          <div className="flex flex-row items-center justify-between rounded-full py-1 border-2 absolute -bottom-4 w-48 h-12 px-4 bg-orange-700 ">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={cartItem.quantity === 1}
              className="p-1 rounded-full border py-2"
            >
              <img
                src="/assets/images/icon-decrement-quantity.svg"
                alt="decrease quantity"
              />
            </button>
            <p className="text-white">{cartItem.quantity}</p>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-1 rounded-full border"
            >
              <img
                src="/assets/images/icon-increment-quantity.svg"
                alt="increase quantity"
              />
            </button>
          </div>
        ) : (
          <button
            className="flex flex-row items-center justify-center rounded-full py-1 border-2 absolute -bottom-4 w-48 h-12 px-4 bg-white hover:border-orange-700 "
            onClick={() => handleQuantityChange(1)}
          >
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt="add to cart"
              className="mr-1"
            />
            Add to Cart
          </button>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-4">{product.category}</p>
      <p className="font-semibold text-sm">{product.name}</p>
      <p className="text-orange-700 text-sm font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
