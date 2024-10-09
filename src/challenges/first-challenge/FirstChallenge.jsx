import React from "react";
import ChallengeLayout from "../../components/ChallengeLayout";

const summaryData = [
  {
    category: "Reaction",
    score: 80,
    icon: "/assets/images/icon-reaction.svg",
    color: "bg-red-50 text-red-500",
  },
  {
    category: "Memory",
    score: 92,
    icon: "/assets/images/icon-memory.svg",
    color: "bg-yellow-50 text-yellow-500",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "/assets/images/icon-verbal.svg",
    color: "bg-green-50 text-green-500",
  },
  {
    category: "Visual",
    score: 72,
    icon: "/assets/images/icon-visual.svg",
    color: "bg-blue-50 text-blue-500",
  },
];

const FirstChallenge = () => {
  return (
    <ChallengeLayout title="Results Summary Component">
      <div className="flex flex-col md:flex-row justify-center shadow-2xl md:m-10 rounded-2xl  ">
        {/* Score card */}
        <div className="bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue text-center text-white rounded-3xl p-6 w-full md:w-1/2">
          <p className="text-lg text-gray-200 mb-6">Your Result</p>
          <div className="bg-gradient-to-b from-violetBlue to-PersianBlue rounded-full h-36 w-36 mx-auto flex flex-col justify-center items-center ">
            <p className="text-6xl font-bold">76</p>
            <p className="text-sm text-gray-250 text-gray-400">of 100</p>
          </div>
          <h2 className="text-2xl mt-4 mb-2">Great</h2>
          <p className="text-gray-300">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        {/* Summary */}
        <div className="md:w-1/2 p-8 rounded-xl">
          <h2 className="text-lg font-semibold mb-4 text-gray-600">Summary</h2>
          <ul>
            {summaryData.map((item, index) => (
              <li
                key={index}
                className={`flex justify-between p-4 rounded-xl my-3 ${item.color}`}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.category}
                    className="w-6 h-6 mr-2"
                  />
                  <span>{item.category}</span>
                </div>
                <span className="text-gray-800 font-bold">
                  {item.score} <span className="text-gray-500"> / 100</span>
                </span>
              </li>
            ))}
            <li className="flex justify-between mt-4">
              <button className="flex-grow py-3 m-2 text-white bg-gray-700 rounded-full hover:bg-gradient-to-t  from-LightSlateBlue to-LightRoyalBlue transition">
                Continue
              </button>
            </li>
          </ul>
        </div>
      </div>
    </ChallengeLayout>
  );
};

export default FirstChallenge;
