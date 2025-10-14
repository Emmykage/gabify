import Button from "@/components/button/Button";
import DonationForm from "@/components/donation/donationForm";
import Navbar from "@/components/nav/Navbar";
import PageTitle from "@/components/pageTitle/PageTitle";
import SectionTitle from "@/components/sectionTitles/sectionTitle";
import React from "react";
import teamImg from "@/assets/images/IMG_6313.jpeg";

const GetInvolved = () => {
  return (
    <main>
      <Navbar />
      <PageTitle title="Get Involved" link={"get-involved"} />
      <section className="py-20 px-4">
        <SectionTitle title={"Join Us"} />
        <div className="max-w-7xl m-auto grid gap-4 md:grid-cols-2">
          <div className="h-96 ">
            <img
              src={teamImg.src}
              alt="Team "
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <h3 className="text-4xl font-semibold mb-4">Join Us</h3>
            <p className="mb-8">
              Our group is free to join, and we're dedicated to assisting more
              para athletes by raising even more funds for their future
              endeavours. Gabify makes it simple and secure for you to donate to
              local projects anywhere in the world, while also giving the
              resources, training, and support that para-athletes require to
              succeed.
            </p>

            <Button className={"w-full md:w-auto"}>Join US</Button>
          </div>
        </div>
      </section>
      <section className="mt-20 bg-theme-bg py-20">
        <SectionTitle title={"Support Us"} />

        <DonationForm />
      </section>
    </main>
  );
};

export default GetInvolved;
