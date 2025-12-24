"use client";
import AnalysisMeasure from "@/components/analysisMeasure/AnalysisMeasure";
import Button from "@/components/button/Button";
import Header from "@/components/header/header";
import CausesSection from "@/components/progressSection/ProgressSection";
import SectionTitle from "@/components/sectionTitles/sectionTitle";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import imageProgram1 from "@/assets/images/IMG_6201.jpeg";
import sportVector from "@/assets/svg/gym-running-foot-run-svgrepo-com.svg";
// import sportFestival from "@/assets/images/IMG_6313.jpeg";
import Image from "next/image";
import imgblog from "@/assets/images/IMG_6246.jpeg";
import CTA from "@/components/CTA/CTA";
import Testimonials from "@/components/testimonials/Testimonials";
import aboutImg from "@/assets/images/IMG_8304.jpeg";
import aboutImg2 from "@/assets/images/IMG_8287.jpeg";
import { motion } from "framer-motion";
import schoolOutreach from "@/assets/images/IMG_6295.jpeg";
import sportFestival from "@/assets/images/Community-sports-festival.jpg";
import headerBg5 from "@/assets/images/christmas-image.jpg";
import headerBg6 from "@/assets/images/christmas-image-1.jpg";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/posts");
        const { data } = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const blogPosts = [
    {
      id: 1,
      title: "Missioners in Charge",
      description:
        "Our missioners lead the effort to empower children with disabilities through inclusive sports programs, building confidence and unity.",
      image: imgblog.src,
      date: "23rd April, 2025",
    },
    {
      id: 2,
      title: "Celebrating the Adoption",
      description:
        "We mark another milestone as young athletes find opportunities to shine and grow through our adaptive training sessions.",
      image: imgblog.src,
      date: "5th April, 2025",
    },
    {
      id: 3,
      title: "Charity for Everyone",
      description:
        "Our community continues to expand, embracing the power of giving and inclusivity. Every donation fuels another dream.",
      image: imgblog.src,
      date: "25th April, 2025",
    },
  ];
  const router = useRouter();
  return (
    <div className="pt- about w-full top-0 left-0 ">
      <Header />
      <section className="bg-gray py-20 text-center px-4">
        <div className="max-w-7xl m-auto grid md:grid-cols-2">
          <div>
            <h1 className="text-4xl text-left md:text-5xl font-bold text-gray-600 -700">
              Empowering Abilities Through Sports
            </h1>
            <p className="mt-4 text-lg text-left text-gray-600 max-w-2xl mx-auto">
              Gabify is building an inclusive sporting community where people
              with disabilities are given equal access and encouragement to
              thrive through sports.
            </p>
            <div className="mt-8 space-x-4 text-left">
              <Button
                onClick={() => router.push("/donate")}
                className=" px-6 py-3  "
              >
                Get Involved
              </Button>
              <Button
                href="#donate"
                className="bg border-2  border-gray-700 bg-transparent !text-gray-700 hover:bg-gray-200"
              >
                Donate
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="bg-red-700  px-6 py-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div className="text-white py-14">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
              🎄 Christmas Special
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Share Love. Spread Joy. Make Christmas Meaningful.
            </h2>
            <p className="text-lg text-white/90 mb-6">
              This Christmas, Gabify Foundation is bringing smiles to people
              living with disabilities through food, fellowship, and thoughtful
              gifts. Your support helps us create moments of dignity, inclusion,
              and happiness.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Donate Now
              </button>
              <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-700 transition">
                Become a Volunteer
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-[600px] py-10 bg-gray-600/50 rounded-xl pl-3 md:pl-8">
            <Image
              src={headerBg6}
              alt="Gabify Christmas Support"
              fill
              className="object-fill rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <SectionTitle
          title="About Gabify"
          subtitle="Promoting inclusion and equality in sports"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
          className="max-w-7xl mx-auto grid md:grid-cols-2  gap-12 items-start"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src={aboutImg.src}
              alt="Sample"
              className="rounded object-cover sm:w-80 sm:h-40"
            />
            <div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  About Gabify
                </h3>
                <p className="text-gray-600 text-sm ">
                  Gabify is a non-profit organization dedicated to integrating
                  people with disabilities into mainstream and adaptive sports.
                  We use the power of sports to build confidence, independence,
                  and community.
                </p>
              </div>
            </div>{" "}
            <img
              src={aboutImg2.src}
              alt="Sample"
              className="rounded object-cover sm:w-80 sm:h-40"
            />
            <div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Professional and personalised assistance{" "}
                </h3>
                <p className="text-gray-600 text-sm">
                  We assist in telling our para athletes &apos; stories in a
                  clear and compelling manner, and we invite partners to support
                  us. Our statistics and feedback reports assist us in learning
                  and improving our support for individual para-athletes.
                  Donations and grants from corporate relationships all across
                  the world help 85 percent of Gabify para-athletes.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-2xl">
            <p className="mt-4 text-sm">
              When you give to Our humanity, you know your donation is making a
              difference. Whether you are supporting one of our Signature
              Programs or our carefully curated list of Gifts That Give More,
              our professional staff works hard every day to ensure every dollar
              has impact for the cause of your choice.
            </p>
            <h3 className="text-primary font-semibold text-2xl mt-4">
              🌍 Empowering Change Across Nigeria{" "}
            </h3>
            <div>
              <div>
                <h4 className="font-semibold"> </h4>

                <p className="mt-4 text-sm">
                  At Gabify Nigeria, we proudly collaborate with dozens of
                  impactful community programs nationwide, supporting
                  initiatives that uplift lives and promote inclusion through
                  sports and education. Since our inception, we’ve provided
                  grants, training, and essential resources to help individuals
                  and organizations thrive.
                </p>

                <ul className="space-y-3 list-disc list-inside text-sm">
                  <li>This mistaken idea of denouncing pleasure</li>
                  <li>Master-builder of human happiness</li>
                  <li>Occasionally circumstances occur in toil</li>
                  <li>Undertakes laborious physical exercise</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-red-700 py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left text */}
          <div className="text-white">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
              🎄 Christmas Special
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Share Love. Spread Joy. Make Christmas Meaningful.
            </h2>
            <p className="text-lg text-white/90 mb-6">
              This Christmas, Gabify Foundation is bringing smiles to people
              living with disabilities through food, fellowship, and thoughtful
              gifts. Your support helps us create moments of dignity, inclusion,
              and happiness.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Donate Now
              </button>
              <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-700 transition">
                Become a Volunteer
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex justify-end">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
              <p className="text-red-700 font-bold text-xl mb-2">
                📅 27th December
              </p>
              <p className="text-gray-700 mb-4">
                A Christmas Picnic of Love & Inclusion
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>🍲 Foodstuffs & Refreshments</li>
                <li>🎁 Gifts & Donations</li>
                <li>🤝 Community & Fellowship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-gray-50 px-4">
        <SectionTitle
          title="Our Programs"
          subtitle="Building skills, confidence, and community"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          }}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        >
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
          ].map((p, i) => (
            <motion.div
              variants={fadeInUpVariant}
              transition={{ delay: 1 * i }}
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnalysisMeasure />

      <CTA />

      <section className="bg-gray-50 py-20 px-6 md:px-12" id="blog">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <SectionTitle
            title=" From Our Blog"
            subtitle="Stay updated with inspiring stories and highlights from our ongoing
            projects, where every effort brings us closer to an inclusive
            sporting community."
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-4"></h2>
          <p className="text-gray-600 max-w-2xl mx-auto"></p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white group rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={post?.image}
                  alt={post?.title}
                  className=" object-cover h-full w-full group-hover:scale-110 transition-all duration-500 "
                />
              </div>
              <div className="p-6 flex flex-col">
                <p className="text-sm text-gray-400 mb-2">{post?.createdat}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post?.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5  h-full ">
                  {post?.excerpt}
                </p>
                <Button
                  onClick={() => router.push(`/blog/${post.id}`)}
                  className=" block bg-red-400 text-blue-600 font-medium hover:text-blue-80 transition"
                >
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CausesSection />

      {/* Get Involved */}
      <section id="get-involved" className="py-20 px-4 bg-white">
        <SectionTitle title="Get Involved" subtitle="Be part of the change" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Volunteer",
              desc: "Join our team as a mentor, coach, or event helper.",
            },
            {
              title: "Donate",
              desc: "Help fund adaptive equipment, training, and events.",
            },
            {
              title: "Partner",
              desc: "Collaborate with us to expand opportunities for athletes with disabilities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-theme-bg shadow rounded-2xl p-6 hover:bg-blu hover:shadow-none transition text-center"
            >
              <h3 className="font-semibold text-xl text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <Testimonials />

      {/* Contact */}
      <section
        id="contact"
        className="py-20  px-4 bg-[url(/background/noise.jpg)]"
      >
        <div className="flex flex-col md:flex-row gap-5 max-w-7xl m-auto ">
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold text-center leading-[60px]">
              They <br />
              Need <br />
              Your <br />
              <span className="text-primary">Help...</span>
            </h2>
          </div>
          <form className="max-w-2xl w-full flex-1 mx-auto grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 outline-gray-300 focus:border-none bg-white rounded px-4 py-3 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 outline-none bg-white rounded px-4 py-3 w-full"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border border-gray-300 outline-gray-300 focus:border-none bg-white rounded px-4 py-3 w-full"
            ></textarea>
            <Button type="submit" className="">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
