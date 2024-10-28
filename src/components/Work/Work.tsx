import React from "react";
import { cardsData } from "../../data/cardsData";
import Card from "./Card";

const Work: React.FC = () => {
  return (
    <div className="bg-work bg-boiler">
      <h2 className="title">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
        {cardsData.map((card, index) => (
          <div key={index} className="flex justify-center">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
