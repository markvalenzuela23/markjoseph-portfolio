import experience from "../../data/experience";
import SectionHeading from "../common/SectionHeading";
import useReveal from "../../hooks/useReveal";

function Experience() {
  const timelineRef = useReveal({ stagger: true, threshold: 0.04 });
  const educationRef = useReveal();

  return (
    <section id="experience" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        <SectionHeading
          eyebrow="Career Journey"
          title="Professional experience"
          align="center"
        >
          My journey from enterprise infrastructure and systems administration
          into workflow automation and AI-assisted product work.
        </SectionHeading>

        <div className="relative mt-14">

          {/* Rail sits at the dot's centre: dots are 12px wide at left-0, so
              their centre is 6px, and the 2px rail spans 5–7px. */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-line"
            aria-hidden="true"
          />

          <div ref={timelineRef} className="flex flex-col gap-5">

            {experience.map((job) => (

              <div key={job.id} className="relative pl-10">

                <span
                  className="absolute left-0 top-7 h-3 w-3 rounded-full bg-accent ring-4 ring-canvas"
                  aria-hidden="true"
                />

                <div className="rounded-2xl border border-line bg-surface p-6 md:p-7">

                  <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
                    {job.duration}
                  </div>

                  <h3 className="font-display font-bold text-[21px] md:text-[23px] tracking-tight mt-2">
                    {job.position}
                  </h3>

                  <div className="text-[15px] text-accent font-medium mt-1">
                    {job.company}
                  </div>

                  <p className="text-[15px] leading-[1.65] text-muted mt-4">
                    {job.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 mt-5">

                    {job.achievements.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 rounded-lg bg-sunk px-3 py-2.5 text-[13.5px] text-muted"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 shrink-0"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* EDUCATION */}

        <div ref={educationRef} className="mt-14 pt-10 border-t border-line">

          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle text-center">
            Education
          </h3>

          <div className="rounded-2xl border border-line bg-surface p-6 md:p-7 mt-6 text-center">

            <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-subtle">
              June 2014 – May 2018
            </div>

            <h4 className="font-display font-bold text-[21px] tracking-tight mt-2">
              BS Information Technology
            </h4>

            <div className="text-[15px] text-muted mt-1">
              STI College of Novaliches
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
