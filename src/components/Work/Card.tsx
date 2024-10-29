import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  link: string;
  coverImage: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  coverImage,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card relative overflow-hidden rounded-lg shadow-lg block"
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-90 opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="font-extrabold mb-2">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-center">
          <div className="bg-[#00ff9d] p-3 w-[50px] flex justify-center items-center rounded-[50%] mt-5 text-[#1a1f36]">
            <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
