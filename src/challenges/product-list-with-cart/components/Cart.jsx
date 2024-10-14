import React, { useState } from "react";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [toggleModal, setToggle] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-100 mt-4 md:mt-0">
      <h2 className="text-xl font-bold text-orange-700 mb-2">
        {" "}
        Your Cart ({cartQuantity})
      </h2>
      {cartQuantity > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li className="border-b ">
                <div className=" relative py-2">
                  <p className="text-sm mb-1 font-bold">{item.name}</p>
                  <div className="flex flex-row gap-2 font-extralight text-xs">
                    <p className="text-orange-700 font-semibold">
                      {item.quantity}X
                    </p>
                    <p className="text-gray-400">@ ${item.price}</p>
                    <p className="text-gray-800">
                      {" "}
                      ${item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    className=" absolute right-2 top-4 rounded-full border border-rose-100 p-1"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="remove item"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="py-4">
            <div className="flex flex-row justify-between py-2 ">
              <p className=" text-sm text-gray-800">Order Total </p>
              <p className="font-bold text-2xl">${totalPrice.toFixed(2)}</p>
            </div>

            <div className="p-4 bg-rose-50 text-center flex flex-row items-center justify-center mt-2">
              <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
              <p className="text-sm">
                This is a <strong>carbon-neutral</strong> delevery
              </p>
            </div>

            <button
              className="w-full bg-orange-700 rounded-full  text-white py-2 mt-6 "
              onClick={() => {
                setToggle(true);
              }}
            >
              Confirm Order
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt=""
            className="w-36 h-36"
          />
          <p className=""> Your Added items will appear here</p>
        </div>
      )}
      {toggleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex md:items-center justify-center  items-end z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-96 md:h-fit w-full h-full ">
            <img
              src="/assets/images/icon-order-confirmed.svg"
              alt=""
              className="h-8 w-8 mb-2"
            />
            <h2 className="text-4xl font-bold text-left ">Order </h2>
            <h2 className="text-4xl font-bold text-left mb-2">Confirmed</h2>
            <p className="text-left text-gray-400 mb-6">
              we hope you enjoy your food!
            </p>
            <ul className="bg-rose-50 p-4 mb-8">
              {cartItems.map((item) => (
                <li className=" relative  border-b  flex flex-row">
                  <img
                    src={item.image.thumbnail}
                    alt=""
                    className="w-12 h-12 rounded-md mr-3"
                  />
                  <div className=" py-2">
                    <p className="text-sm mb-1 font-bold">{item.name}</p>
                    <div className="flex flex-row gap-2 font-extralight text-xs">
                      <p className="text-orange-700 font-semibold">
                        {item.quantity}X
                      </p>
                      <p className="text-gray-400">@ ${item.price}</p>
                    </div>

                    <div
                      className=" absolute right-2 top-4  p-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <p className="text-gray-800">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="bg-orange-700 text-white py-2 px-4 rounded-full w-full"
              onClick={() => {
                clearCart();
                setToggle(false);
              }}
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
