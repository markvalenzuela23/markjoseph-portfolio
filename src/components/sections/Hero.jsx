import { useEffect, useState } from "react";
import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.webp";
import SocialLinks from "../common/SocialLinks";

import {
  FaServer,
  FaCode,
  FaBrain,
  FaRobot,
} from "react-icons/fa";

// Automation and AI lead; the infrastructure work sits behind them as the
// track record that makes the automations credible.
const expertise = [
  {
    icon: FaRobot,
    title: "Workflow Automation",
    items: ["n8n", "Telegram & Messenger", "Google Sheets"],
  },
  {
    icon: FaBrain,
    title: "AI Integration",
    items: ["OpenAI API", "Google Gemini", "Prompt Engineering"],
  },
  {
    icon: FaCode,
    title: "AI-Assisted Development",
    items: ["Claude Code", "React & Node.js", "Test-backed delivery"],
  },
  {
    icon: FaServer,
    title: "Enterprise IT",
    items: ["Windows Server", "VMware ESXi", "Active Directory"],
  },
];

function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % profile.headline.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] bg-slate-950 text-white flex items-center pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          {/* ================= LEFT ================= */}

          <div className="max-w-2xl">

            <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mt-4">
              {profile.name}
            </h1>

            <h2 className="mt-6 h-12 text-2xl md:text-3xl font-bold text-blue-400">
              {profile.headline[currentTitle]}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              {profile.shortDescription}
            </p>

            {/* ================= EXPERTISE ================= */}

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Core Expertise
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              {expertise.map(({ icon: Icon, title, items }) => (

                <div
                  key={title}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
                >

                  <Icon className="text-3xl text-blue-400" />

                  <h4 className="mt-4 text-lg font-semibold">
                    {title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400 leading-6">
                    {items.map((item, index) => (
                      <span key={item}>
                        {index > 0 && <br />}
                        {item}
                      </span>
                    ))}
                  </p>

                </div>

              ))}

            </div>

            {/* ================= BUTTONS ================= */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
              >
                {profile.buttons.projects}
              </a>

              <a
                href={profile.resumeUrl}
                download
                className="border border-slate-600 hover:border-white hover:bg-slate-800 transition px-6 py-3 rounded-lg"
              >
                {profile.buttons.resume}
              </a>

            </div>

            {/* ================= SOCIAL ================= */}

            <div className="mt-8">
              <SocialLinks />
            </div>

            {/* ================= STATUS ================= */}

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">

                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                Available for Remote Opportunities

              </span>
            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:w-1/2 flex justify-center">

            <div className="relative">

              {/* Blue Glow */}

              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl"></div>

              {/* Card */}

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

                {/* Available */}

                <div className="absolute -top-5 left-1/2 -translate-x-1/2">

                  <span className="bg-green-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                    ● Available for Hire
                  </span>

                </div>

                {/* Photo */}

                <div className="flex justify-center mt-4">

                  <img
                    src={profileImage}
                    alt="Mark Joseph Valenzuela"
                    className="w-72 h-72 rounded-full object-cover object-[center_20%] border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.35)] float-animation"
                  />

                </div>

                {/* Location — the name and headline already lead the left
                    column, so the card only carries what they don't. */}

                <div className="text-center mt-8">

                  <p className="text-slate-400 text-sm">
                    📍 {profile.location}
                  </p>

                </div>

                {/* Skills */}

                <div className="grid grid-cols-2 gap-3 mt-8">

                  {profile.quickSkills.map((skill) => (

                    <div
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-slate-800/70 p-3 text-center text-sm font-medium"
                    >
                      {skill}
                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
