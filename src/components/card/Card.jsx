import React from "react";

const Card = ({ point }) => {
  return (
    <div
      key={point.id}
      className="group gap-4 relative flex items-start bg-white shadow-lg rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <span className="  -top-4 left-6 px-3 h-full bg-orange-600 text-white font-bold text-lg w-10  flex items-center justify-center rounded-lg">
        {point.id}
      </span>
      <div>
        <h3 className=" text-xl text-left font-semibold text-gray-800 group-hover:text-orange-600">
          {point.title}
        </h3>
        <p className="mt-3 text-left text-gray-600 text-sm leading-relaxed">
          {point.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
