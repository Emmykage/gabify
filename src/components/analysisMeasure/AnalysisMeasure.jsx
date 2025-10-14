import React from "react";
import SectionTitle from "../sectionTitles/sectionTitle";
import { GiSelfLove } from "react-icons/gi";
import { FaHospitalUser } from "react-icons/fa";
import { SiConstruct3 } from "react-icons/si";

const AnalysisMeasure = () => {
  return (
    <section className="px-4 py-10">
      <div className="flex justify-between items-center max-w-7xl m-auto py-20">
        <div>
          <div className="flex items-center gap-4 ">
            <span className="text-4xl text-gray-400 font-bold">160</span>
            <GiSelfLove className="text-primary text-3xl" />
          </div>

          <p className="text-lg text-gray-200">Interventions</p>
        </div>
        <div>
          <div className="flex items-center gap-4 ">
            <span className="text-4xl text-gray-400 font-bold">70</span>
            <FaHospitalUser className="text-primary text-3xl" />
          </div>

          <p className="text-lg text-gray-200">Vounteers</p>
        </div>{" "}
        <div>
          <div className="flex items-center gap-4 ">
            <span className="text-4xl text-gray-400 font-bold">160</span>
            <SiConstruct3 className="text-primary text-3xl" />
          </div>{" "}
          <p className="text-lg text-gray-200">Projects</p>
        </div>
      </div>
    </section>
  );
};

export default AnalysisMeasure;
