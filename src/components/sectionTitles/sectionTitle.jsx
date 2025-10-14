import React from "react";

const SectionTitle = ({ title, subtitle, style = true }) => {
  const arr = title.split(" ");
  const prevChar = arr.slice(0, -1).join(" ");
  const append = arr[arr.length - 1];
  return (
    <div className="text-center mb-12">
      {style ? (
        <>
          <h2 className="text-3xl font-bold text-gray-800">
            {prevChar} <span className="text-primary">+ {append}</span>{" "}
          </h2>
          <div className="flex gap-4 justify-center my-3 text-primary">
            <hr className="border w-10" />
            <hr className="border w-6" />
            <hr className="border w-10" />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </>
      )}

      {subtitle && (
        <p className="text-gray-600 mt-2 leading-7 font-medium max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
