import React from "react";

const ChallengeLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="border rounded-lg shadow-md p-4">{children}</div>
    </div>
  );
};

export default ChallengeLayout;
