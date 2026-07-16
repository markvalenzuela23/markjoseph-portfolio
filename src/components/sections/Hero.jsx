import { useEffect, useState } from "react";
import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.jpg";
import SocialLinks from "../common/SocialLinks";

function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % profile.headline.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          {/* LEFT */}
          <div className="max-w-2xl">

            <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
              {profile.name}
            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-blue-400 h-10">
              {profile.headline[currentTitle]}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-slate-400 mt-8 leading-8">
              {profile.shortDescription}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold">
                {profile.buttons.projects}
              </button>

              <button className="border border-slate-600 hover:border-white transition px-6 py-3 rounded-lg">
                {profile.buttons.resume}
              </button>
            </div>

            {/* Social Icons */}
            <SocialLinks />

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">

            <div className="absolute w-[430px] h-[430px] bg-blue-500/25 blur-[120px] rounded-full"></div>

            <img
  src={profileImage}
  alt="Mark Joseph Valenzuela"
  className="relative w-96 h-96 rounded-full object-cover object-[center_20%] border-4 border-blue-500 shadow-2xl float-animation transition duration-500 hover:scale-105"
/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;