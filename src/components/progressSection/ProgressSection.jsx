import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SectionTitle from "../sectionTitles/sectionTitle";
import Button from "../button/Button";

const causes = [
  {
    id: 1,
    title: "Stop Child's Illiteracy",
    image: "/images/causes/02.jpg",
    donated: 2300,
    goal: 4300,
    percent: 65,
  },
  {
    id: 2,
    title: "Empower Disabled Youths",
    image: "/images/causes/03.jpg",
    donated: 1500,
    goal: 4000,
    percent: 40,
  },
  {
    id: 3,
    title: "Support Sports Integration",
    image: "/images/causes/04.jpg",
    donated: 3400,
    goal: 5000,
    percent: 68,
  },
];

const CausesSection = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    // Animate the percentage for each cause
    causes.forEach((cause) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setProgress((prev) => ({
          ...prev,
          [cause.id]: Math.min(start, cause.percent),
        }));
        if (start >= cause.percent) clearInterval(interval);
      }, 30);
    });
  }, []);

  console.log(progress);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <SectionTitle
        style={false}
        title={"Our Causes"}
        subtitle={
          "Every effort counts. We’re committed to creating opportunities that empower lives — from integrating people with disabilities into sports, to supporting education, health, and community development. Together, we can make lasting change one cause at a time."
        }
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {causes.map((cause) => (
          <article
            key={cause.id}
            className="text-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Image + Circular Chart */}
            <div className="relative flex justify-center items-center mt-6">
              <div className="w-36 h-36 relative">
                {/* <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover rounded-full"
                /> */}
                <div className="absolute inset-0">
                  <CircularProgressbar
                    value={progress[cause.id] || 0}
                    text={`${progress[cause.id] || 0}%`}
                    styles={buildStyles({
                      pathColor: "#f97316",
                      textColor: "#1e3a8a",
                      trailColor: "#e5e7eb",
                      textSize: "24px",
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {cause.title}
              </h4>

              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  className="bg-orange-500 h-3 rounded-full transition-all"
                  style={{ width: `${cause.percent}%` }}
                ></div>
              </div>

              <p className="text-gray-600 mb-6 text-sm">
                ${cause.donated.toLocaleString()} donated{" "}
                <span className="text-gray-400"> / </span>{" "}
                <span className="text-orange-600 font-medium">
                  ${cause.goal - cause.donated} to go
                </span>
              </p>

              <Button onClick={() => {}} className="w-full">
                Donate
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CausesSection;
