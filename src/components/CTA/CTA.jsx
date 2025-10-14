import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="relative bg-blue-900 text-white py-20 px-6 md:px-12">
      {/* Overlay background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("/background/donate-bg.jpg")',
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Support Changes Lives
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Every contribution helps us bring sports, hope, and inclusion to
          individuals with disabilities. Together, we can build a world where
          everyone can play, grow, and succeed — regardless of ability.
        </p>

        <Link
          href={"/donate"}
          className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
