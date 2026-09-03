import { useEffect, useState } from "react";
import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.webp";
import SocialLinks from "../common/SocialLinks";
import CountUp from "../common/CountUp";

const stats = [
  { value: "6", label: "parallel Claude Code sessions" },
  { value: "101", label: "tests added to untested code" },
  { value: "$1,860", label: "annual hosting removed" },
  { value: "Zero", label: "downtime on migration" },
];

function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % profile.headline.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-32 md:pt-40 pb-16 md:pb-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ================= LEFT ================= */}

          <div className="lg:col-span-7">

            <div className="rise-in inline-flex items-center gap-2 rounded-full border border-ok-line bg-ok-soft px-3 py-1.5 text-[13px] font-semibold text-ok">
              <span className="h-[7px] w-[7px] rounded-full bg-ok" aria-hidden="true" />
              Open to remote work
            </div>

            <h1 className="rise-in rise-delay-1 font-display font-bold text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.06] tracking-[-0.032em] mt-5 text-balance">
              Automations that replace the manual work
            </h1>

            <p
              aria-live="polite"
              className="rise-in rise-delay-2 mt-4 text-lg md:text-xl font-semibold text-accent h-8"
            >
              {/* Keyed so each title remounts and replays the fade, rather
                  than the text blinking from one string to the next. */}
              <span key={currentTitle} className="headline-swap inline-block">
                {profile.headline[currentTitle]}
              </span>
            </p>

            <p className="rise-in rise-delay-3 mt-5 text-[17px] md:text-[18px] leading-[1.65] text-muted max-w-xl">
              {profile.shortDescription}
            </p>

            <div className="rise-in rise-delay-4 mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-[10px] bg-accent px-6 py-3.5 text-[15px] font-semibold text-accent-ink shadow-[var(--shadow-accent)] hover:opacity-90 transition"
              >
                {profile.buttons.projects}
              </a>

              <a
                href="#method"
                className="rounded-[10px] border border-line bg-surface px-6 py-3.5 text-[15px] font-semibold hover:border-line-strong transition"
              >
                How I work
              </a>
            </div>

            <div className="rise-in rise-delay-5 mt-8">
              <SocialLinks />
            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-5">

            <div className="rise-in rise-delay-2 flex items-center gap-4">
              <img
                src={profileImage}
                alt="Mark Joseph Valenzuela"
                width="1085"
                height="1450"
                className="h-20 w-20 rounded-2xl object-cover object-[center_20%] border border-line float-animation"
              />
              <div>
                <div className="font-display font-bold text-lg tracking-tight">
                  {profile.name}
                </div>
                <div className="text-sm text-muted mt-0.5">
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="rise-in rise-delay-3 grid grid-cols-2 gap-3.5 mt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[14px] border border-line bg-surface p-5"
                >
                  <CountUp
                    value={stat.value}
                    className="block font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-accent tabular-nums"
                  />
                  <div className="mt-2 text-[13px] leading-[1.45] text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rise-in rise-delay-4 mt-4 flex flex-wrap gap-2">
              {profile.quickSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-sunk px-3 py-1.5 text-[13px] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
