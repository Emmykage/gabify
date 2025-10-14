import React from "react";
import SectionTitle from "../sectionTitles/sectionTitle";

const Testimonials = () => {
  return (
    <section id="stories" className="py-20 bg-gray-50 px-4">
      <SectionTitle
        title="Stories of Impact"
        subtitle="Real lives, real change"
      />
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="italic text-gray-700">
          “Before joining Gabify, I never imagined I could play basketball again
          after my accident. Now I compete in wheelchair tournaments and mentor
          others.”
        </blockquote>
        <p className="mt-4 font-semibold text-blue-700">— Tunde, Lagos</p>
      </div>
    </section>
  );
};

export default Testimonials;
