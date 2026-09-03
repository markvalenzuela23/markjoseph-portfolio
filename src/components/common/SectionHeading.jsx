// One place that owns the section header treatment, so every section gets the
// same eyebrow, the same heading size, and the same lead paragraph measure.
// Previously About and Experience used text-5xl while the rest used text-4xl,
// and only half the sections carried an eyebrow.
function SectionHeading({ eyebrow, title, children, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>

      <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
        {title}
      </h2>

      {children && (
        <p
          className={`mt-6 text-slate-400 leading-8 max-w-3xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {children}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;
