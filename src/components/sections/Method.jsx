import SectionHeading from "../common/SectionHeading";
import {
  FaImage,
  FaCodeBranch,
  FaClipboardCheck,
  FaEye,
  FaShieldAlt,
  FaVial,
} from "react-icons/fa";

const principles = [
  {
    icon: FaImage,
    title: "Screenshots as the spec",
    body: "A screenshot carries spacing, alignment, hierarchy and density all at once — the details nobody writes down and everybody notices when they're wrong. Prose descriptions get implemented faithfully and still look wrong; a side-by-side settles it in one message.",
  },
  {
    icon: FaCodeBranch,
    title: "Parallel sessions, hard isolation",
    body: "Each AI coding session owns a declared slice of the codebase, with its own git worktree and its own scratch database. Sessions sharing one checkout switch branches under each other, and a shared database means one session's cleanup destroys another's fixtures.",
  },
  {
    icon: FaClipboardCheck,
    title: "Report numbers, not adjectives",
    body: "Tests run, passed, failed — plus the exit code. Zero errors with a non-zero exit means distrust the run, not the code. And state explicitly what you did not run, because silence about a suite reads as a pass.",
  },
  {
    icon: FaEye,
    title: "\"Done\" means visible",
    body: "Merged, deployed, and visible to the person who asked for it. Anything else is \"written, not on staging.\" A passing build, a green suite and a merged branch can all be true while the feature renders nothing at all.",
  },
  {
    icon: FaVial,
    title: "Test after every merge",
    body: "The full suite runs after each individual merge into the integration branch, not once at the end. That catches breaks a typechecker is blind to — like a changed function signature with stale call sites in a file nothing typechecks.",
  },
  {
    icon: FaShieldAlt,
    title: "Staging first, no exceptions",
    body: "Every change goes to staging and gets exercised on the live staging site before it reaches production — including one-line fixes. Staging runs against an isolated database with outbound sending disabled at a single chokepoint.",
  },
];

function Method() {
  return (
    <section id="method" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <SectionHeading
          eyebrow="How I Work"
          title="AI-assisted development, with receipts"
        >
          I build with Claude Code, directed conversationally rather than from
          written specs — most recently six sessions in parallel to ship a
          production SaaS module. That only works with discipline attached.
          These are the rules I hold the work to, learned on production systems
          where a green test suite and an invisible feature turned out to be
          entirely compatible.
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {principles.map(({ icon: Icon, title, body }) => (

            <div
              key={title}
              className="rounded-2xl border border-line bg-surface p-6"
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent-soft">
                <Icon className="text-[15px] text-accent" aria-hidden="true" />
              </span>

              <h3 className="font-display font-bold text-[17px] tracking-tight mt-4">
                {title}
              </h3>

              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-muted">
                {body}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Method;
