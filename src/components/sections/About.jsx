import SectionHeading from "../common/SectionHeading";
import CountUp from "../common/CountUp";
import useReveal from "../../hooks/useReveal";

// Every figure here is defensible in an interview.
const stats = [
  { value: "7+", label: "Years Professional Experience" },
  { value: "4+", label: "Years in IT & Automation" },
  { value: "$1,860", label: "Annual Hosting Cost Removed" },
  { value: "Zero", label: "Downtime on Production Migration" },
];

function About() {
  const copyRef = useReveal();
  const statsRef = useReveal({ stagger: true });

  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Automating the work people shouldn't be doing by hand"
            />

            <p ref={copyRef} className="mt-6 text-[17px] leading-[1.7] text-muted">
              I build workflow automations that take repetitive manual
              processes off people's plates — n8n workflows wired into LLMs,
              Telegram, Facebook Messenger, OCR, and Google Sheets. The chatbot
              and transaction pipelines below are running in live businesses
              today, not demos.
            </p>

            <p className="mt-4 text-[17px] leading-[1.7] text-muted">
              That work sits on top of an infrastructure background: Windows
              Server, VMware virtualization, Active Directory, FortiGate
              firewalls, backup systems, and structured cabling. It's the reason
              the things I automate keep running after handover instead of
              breaking the first time something upstream changes.
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-surface p-6 md:p-7"
              >
                <CountUp
                  value={stat.value}
                  className="block font-display font-bold text-[34px] md:text-[40px] leading-none tracking-[-0.03em] text-accent tabular-nums"
                />
                <div className="mt-3 text-sm leading-[1.5] text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
