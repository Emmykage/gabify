import Navbar from "@/components/nav/Navbar";
import PageTitle from "@/components/pageTitle/PageTitle";
import SectionTitle from "@/components/sectionTitles/sectionTitle";
import React from "react";
import titleBg from "@/assets/background/gabifyheader.jpg";
import aboutImg from "@/assets/images/about-img.jpeg";
import Footer from "@/components/footer/Footer";
import { GiSelfLove } from "react-icons/gi";
import SupportComponent from "@/components/support/SupportComponent";

const about = () => {
  const points = [
    {
      id: "01",
      title: "Inclusive Empowerment",
      text: "Creating equal opportunities for individuals with disabilities to participate, compete, and thrive through accessible sports programs.",
    },
    {
      id: "02",
      title: "Skill Development",
      text: "Providing professional training, adaptive equipment, and mentorship to help participants unlock their athletic potential and confidence.",
    },
    {
      id: "03",
      title: "Community Integration",
      text: "Building an inclusive environment where athletes of all abilities play, learn, and grow together — fostering respect and unity.",
    },
    {
      id: "04",
      title: "Awareness & Advocacy",
      text: "Promoting disability inclusion through campaigns, events, and partnerships that inspire society to see ability beyond limitation.",
    },
  ];
  return (
    <main className="about fixed h-screen w-full overflow-y-auto">
      <Navbar />
      <PageTitle title="About Gabify" link={"about"} titleBg={titleBg} />

      <section id="about" className="py-20 px-4 bg-white">
        <SectionTitle
          title="About Gabify"
          subtitle="Promoting inclusion and equality in sports"
        />
        <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-12 items-start">
          <img
            src={aboutImg.src}
            alt="Inclusive sports"
            className="rounded-2xl md:w-96 w-full md:order-1 order-2 shadow-lg"
          />{" "}
          <div className="order-1 md:order-2">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">
              Who <span className="text-primary"> We Are</span>
            </h3>
            <p className="text-gray-600 font-semibold">
              Gabify is a non-profit organisation that helps para athletes
              fulfil their full potential in their chosen sport and live a
              self-sustaining existence. We've been assisting trusted,
              community-led handicapped people since 2021 by offering them with
              the tools, training, and support they need to make our world a
              better place. Gabify provides all necessary assistance, like as
              equipment, coaching, financial assistance, and counselling, to let
              them pursue sports in order to instil independence, rehabilitate
              them, and reintegrate them into society.
            </p>

            <div>
              <div className="max-w-7xl  text-center">
                {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
                    Our Focus Areas
                  </h2> */}

                <div className="grid  sm:grid-cols-2 gap-10">
                  {points.map((point) => (
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className="flex justify-between items-center max-w-7xl m-auto py-20">
          <div>
            <span className="text-4xl text-gray-400 font-bold">160</span>
            <GiSelfLove />

            <p className="text-lg text-gray-200">Interventions</p>
          </div>
          <div>
            <span className="text-4xl text-gray-400 font-bold">60</span>
            <p className="text-lg text-gray-200">Vounteers</p>
          </div>{" "}
          <div>
            <span className="text-4xl text-gray-400 font-bold">10</span>
            <p className="text-lg text-gray-200">Projects</p>
          </div>
        </div>
      </section>
      {/* <section className="bg-theme-bg text-center py-20">
        <h3 className="text-2xl font-semibold text-primary text-center mt-8 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-600">
          A world where disability is not a limitation but a unique strength —
          where every individual can discover their potential through sports.
        </p>
      </section> */}
      <section
        style={{
          backgroundImage: `linear-gradient(#f9f6ef, rgba(255, 255, 255, 0.253)), url(/background/map2.png)`,
        }}
        className="bg-theme-bg py-20 px-6 md:px-12 container-map"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 font-semibold max-w-2xl mx-auto mb-12">
            Creating inclusive opportunities in sports for individuals with
            disabilities.
          </p>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-white shadow-lg rounded-2xl p-8 text-left hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-primary -600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to assist para-athletes in realizing their full
                potential in their chosen sport. We believe that sports can
                rehabilitate, instill independence and help integrate
                para-athletes back into society. We aim to empower para-athletes
                through comprehensive support, training, and advocacy, enabling
                them to overcome barriers, achieve excellence, and inspire
                others.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white shadow-lg rounded-2xl p-8 text-left hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Create a world where para-athletes are celebrated, empowered,
                and given equal opportunities to showcase their talents on the
                global stage
              </p>
            </div>
          </div>
        </div>
      </section>
      <SupportComponent image={aboutImg.src}>
        <h5 className="text-3xl mt-0 mb-4 ml-auto font-bold">
          Support Inclusion Through Sport
        </h5>

        <p>
          Your donation helps us empower people with disabilities to discover
          strength, confidence, and community through sports. Every contribution
          — big or small — brings us closer to a world where everyone can play,
          compete, and belong.
        </p>
      </SupportComponent>
      <Footer />
    </main>
  );
};

export default about;
