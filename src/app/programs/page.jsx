"use client";

import SectionTitle from "@/components/sectionTitles/sectionTitle";
import React from "react";
import imageProgram1 from "@/assets/images/IMG_6201.jpeg";
import sportVector from "@/assets/svg/gym-running-foot-run-svgrepo-com.svg";
import kidBlind from "@/assets/images/vissionkid.webp";
import sportFestival from "@/assets/images/IMG_6313.jpeg";
import Image from "next/image";
import CTA from "@/components/CTA/CTA";
import Navbar from "@/components/nav/Navbar";
import aboutBanner from "@/assets/images/IMG_3585.jpeg";
import athleticTraniningImg from "@/assets/images/ph_3184_11809.jpg";
import schoolOutreach from "@/assets/images/IMG_6295.jpeg";
import careerDevImg from "@/assets/images/IMG_8304.jpeg";
import educationalSupportImg from "@/assets/images/IMG_3575.jpeg";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Athletic Training",
    desc: "Tailored training programs designed to enhance the skills and capabilities of para-athletes.",
  },
  {
    title: "Mental Wellness Workshops",
    desc: "Workshops and counseling services addressing the unique mental health needs of para-athletes.",
  },
  {
    title: "Educational Support",
    desc: "Scholarships, tutoring, and mentorship programs to ensure educational success alongside athletic pursuits.",
  },
  {
    title: "Career Development",
    desc: "Assisting para-athletes in building careers beyond sports, recognizing the importance of life after athletics.",
  },
];

const sports = [
  "Archery",
  "Athletics",
  "Badminton",
  "Cycling",
  "Football 5-a-side",
  "Powerlifting",
  "Sitting Volleyball",
  "Swimming",
  "Table Tennis",
  "Taekwondo",
  "Wheelchair Basketball",
  "Wheelchair Tennis",
];

const achievements = [
  "Hosted training camps and coached over 50 para-athletes in 10 different sports.",
  "Provided equipment and financial assistance to over 65 para-athletes.",
  "Empowered lives of para-athletes to live with dignity through sports.",
];

const goals = [
  "Support para-athletes to achieve world-class rankings in international competitions.",
  "Make Nigeria a Paralympic superpower.",
  "Conduct regular national & international training camps.",
  "Provide specialized equipment and diet plans.",
  "Raise more funds to reach more para-athletes.",
];
const page = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${aboutBanner.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gray-900/60 rounded-lg py-10 px-6  bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering para-athletes through training, education, and
            opportunity — building champions on and off the field.
          </p>
        </div>
      </section>
      <section id="programs" className="py-20 bg-gray-50 px-4">
        <SectionTitle
          title="Our Programs Services"
          subtitle="Building skills, confidence, and community"
        />
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Adaptive Sports Training",
              image: imageProgram1,
              desc: "Tailored sports coaching for individuals with disabilities.",
            },
            {
              title: "School Outreach",
              image: schoolOutreach,
              desc: "Partnering with schools to promote inclusive physical education.",
            },
            {
              image: sportFestival,
              title: "Community Sports Festivals",
              desc: "Events that celebrate diversity and inclusion through sports.",
            },
            {
              title: "Athletic Training",
              image: athleticTraniningImg,
              desc: "Tailored training programs designed to enhance the skills and capabilities of para-athletes.",
            },
            {
              title: "Career Development:",
              image: careerDevImg,
              desc: "Assisting para-athletes in building careers beyond sports, recognizing the importance of life after competitive athletics.",
            },
            {
              image: educationalSupportImg,
              title: "Educational Support:",
              desc: "Scholarships, tutoring, and mentorship programs to ensure educational success alongside athletic pursuits.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-lg group rounded-lg pb-10 overflow-hidden text-center   hover:shadow-xl transition"
            >
              <div className="h-60 relative bg-gray-300 w-full">
                {" "}
                <Image
                  src={p.image}
                  fill
                  alt={p.title}
                  priority
                  className="object-cover  group-hover:scale-110 transition-all duration-500 "
                />
              </div>
              <div className="flex py-4 gap-4 justify-center items-center">
                <Image
                  src={sportVector}
                  width={40}
                  height={40}
                  alt="sport icon"
                  className="text-primary fill-red-500"
                />
                <h3 className="font-semibold text-xl text-alt  my-3">
                  {p.title}
                </h3>
              </div>
              <p className="text-gray-600 font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <main className="bg-gray-50 text-gray-800">
        {/* <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            Programs & Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white shadow-md rounded-2xl p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  <Image src={sportIcon} alt="icon" width={50} height={50} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* ===== SPORTS FOCUS ===== */}
        <section className="py-20 px-4 bg-gray-50 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Sports Focus Areas
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            We support para-athletes in diverse sporting disciplines to ensure
            equal representation and growth.
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {sports.map((s, i) => (
              <span
                key={i}
                className="bg-white border border-blue-300 text-alt px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ===== ACHIEVEMENTS & GOALS ===== */}
        <section className="bg-white py-20 px-4">
          <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold text-alt mb-4">Achievements</h2>
              <ul className="space-y-3 text-gray-700">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold">✔</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Goals */}
            <div>
              <h2 className="text-3xl font-bold text-alt mb-4">Future Goals</h2>
              <ul className="space-y-3 text-gray-700">
                {goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">⭐</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </div>
  );
};

export default page;
