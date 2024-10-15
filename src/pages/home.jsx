// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const challenges = [
  {
    id: 1,
    title: "Results Summary Component",
    description: "Build a results summary component as per the design.",
    url: "/challenges/results-summary",
  },

  {
    id: 2,
    title: "Product list with cart",
    description:
      "A dynamic product list with cart functionality, allowing users to add/remove items from the cart and update item quantities.",
    url: "/challenges/product-list-with-cart",
  },
  {
    id: 3,
    title: "Product list with cart",
    description:
      "A mortgage repayment calculator where users can input loan details and see their monthly and total repayment amounts.",
    url: "/challenges/mortgage-repayment-calculator",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frontend Mentor Challenges</h1>
      <ul>
        {challenges.map((challenge) => (
          <li
            key={challenge.id}
            className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{challenge.title}</h2>
            <p className="text-gray-600">{challenge.description}</p>
            <Link
              to={challenge.url}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Challenge
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
