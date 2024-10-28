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

      <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="font-extrabold mb-2">{title}</h3>
        <p className="">{description}</p>
      </div>
    </a>
  );
};

export default Card;
