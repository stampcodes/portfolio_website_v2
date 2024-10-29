import React from "react";
import { cardsData } from "../../data/cardsData";
import Card from "./Card";

const Work: React.FC = () => {
  return (
    <div className="bg-[url('./assets/imgs/bg/bg-mobile.png')] lg:bg-[url('./assets/imgs/bg/bg-work.png')] bg-boiler flex flex-col items-center px-4 sm:px-8">
      <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold pt-[150px]">
        My Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-[70px]">
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
