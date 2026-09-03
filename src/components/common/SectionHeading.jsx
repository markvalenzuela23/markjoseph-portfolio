// One place that owns the section header treatment, so every section gets the
// same eyebrow, heading size and lead measure.
function SectionHeading({ eyebrow, title, children, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>

      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>

      <h2 className="font-display font-bold text-3xl md:text-[42px] leading-[1.08] tracking-[-0.03em] mt-3 text-balance">
        {title}
      </h2>

      {children && (
        <p
          className={`mt-5 text-[17px] leading-[1.65] text-muted max-w-2xl ${
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
