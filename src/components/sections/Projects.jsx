import { useCallback, useEffect, useState } from "react";
import { FaCode, FaDownload } from "react-icons/fa";
import projects from "../../data/projects";
import SectionHeading from "../common/SectionHeading";

// AI Chatbot
import chatbotWorkflow from "../../assets/projects/ai-chatbot-jieunshideout/ai-chatbot-jieunshideout-workflow.webp";
import chatbotMessenger from "../../assets/projects/ai-chatbot-jieunshideout/ai-chatbot-jieunshideout-messenger.webp";
import chatbotKnowledgebase from "../../assets/projects/ai-chatbot-jieunshideout/ai-chatbot-jieunshideout-knowledgebase.webp";

// GCash Buy Load
import workflowImg from "../../assets/projects/gcash-buyload/gcash-buyload-workflow.webp";
import telegramImg from "../../assets/projects/gcash-buyload/gcash-buyload-telegram.webp";
import sheetImg from "../../assets/projects/gcash-buyload/gcash-buyload-sheet.webp";

// Intrinsic dimensions are declared so the browser can reserve space before an
// image loads, which stops the gallery from shifting the page as it fills in.
const imageLibrary = {
  workflow: {
    src: workflowImg,
    width: 1600,
    height: 585,
    alt: "n8n workflow canvas for the GCash buy load automation",
  },
  telegram: {
    src: telegramImg,
    width: 691,
    height: 1011,
    alt: "Telegram bot confirming a completed load transaction",
  },
  sheet: {
    src: sheetImg,
    width: 1600,
    height: 797,
    alt: "Google Sheets transaction log populated automatically by the workflow",
  },

  "chatbot-workflow": {
    src: chatbotWorkflow,
    width: 1600,
    height: 650,
    alt: "n8n workflow canvas for the AI customer support chatbot",
  },
  "chatbot-facebook": {
    src: chatbotMessenger,
    width: 1193,
    height: 887,
    alt: "The chatbot answering a customer inside Facebook Messenger",
  },
  "chatbot-conversation": {
    src: chatbotKnowledgebase,
    width: 1600,
    height: 761,
    alt: "Google Docs knowledge base the chatbot reads its answers from",
  },
};

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas/95 backdrop-blur-sm p-6 cursor-zoom-out"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] w-auto max-w-full rounded-xl border border-line object-contain cursor-default shadow-[var(--shadow-md)]"
      />

      <p className="mt-4 max-w-2xl text-center text-sm text-muted">
        {image.alt}
      </p>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-6 right-6 rounded-lg border border-line bg-surface p-2.5 text-muted hover:text-ink transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

// Renders the "see the actual workflow" links, but only for projects that
// declare a sanitised export. Screenshots show that a workflow exists; the
// JSON lets someone verify how it was built.
function ProjectLinks({ project }) {
  if (!project.workflowFile) return null;

  const href = `${import.meta.env.BASE_URL}workflows/${project.workflowFile}`;

  return (
    <div className="flex flex-wrap gap-2.5 mt-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-[10px] border border-line px-4 py-2.5 text-[13.5px] font-medium hover:border-accent hover:text-accent transition"
      >
        <FaCode aria-hidden="true" />
        View workflow JSON
      </a>

      <a
        href={href}
        download
        className="inline-flex items-center gap-2 rounded-[10px] border border-line px-4 py-2.5 text-[13.5px] font-medium hover:border-accent hover:text-accent transition"
      >
        <FaDownload aria-hidden="true" />
        Download
      </a>
    </div>
  );
}

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md bg-sunk px-3 py-1.5 text-[12.5px] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Achievements({ items }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[14px] text-muted">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1 shrink-0"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <section id="projects" className="py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <SectionHeading
          eyebrow="Selected Work"
          title="Automations, products & infrastructure"
        >
          Real automations and AI integrations built for live businesses,
          alongside the platform and infrastructure work behind them. Click any
          screenshot to view it full size.
        </SectionHeading>

        <div className="flex flex-col gap-6 mt-12">

          {projects.map((project) => {
            const cover = project.images?.length
              ? imageLibrary[project.images[0]]
              : null;

            return project.featured ? (

              <article
                key={project.id}
                className="overflow-hidden rounded-[20px] border border-line bg-surface"
              >

                <div className={cover ? "grid lg:grid-cols-2" : ""}>

                  {cover && (
                    <div className="bg-sunk">
                      <img
                        src={cover.src}
                        alt={cover.alt}
                        width={cover.width}
                        height={cover.height}
                        loading="lazy"
                        decoding="async"
                        onClick={() => setLightboxImage(cover)}
                        className="h-full w-full object-cover cursor-zoom-in"
                      />
                    </div>
                  )}

                  <div className="p-7 md:p-9 flex flex-col justify-center">

                    <span className="w-fit rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                      Featured
                    </span>

                    <h3 className="font-display font-bold text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mt-4">
                      {project.title}
                    </h3>

                    <div className="text-[15px] font-medium text-muted mt-2">
                      {project.role}
                    </div>

                    <div className="text-[14px] text-subtle mt-0.5">
                      {project.client}
                    </div>

                    <p className="text-[15px] leading-[1.7] text-muted mt-5">
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-xl bg-sunk p-4"
                          >
                            <div className="font-display font-bold text-[24px] leading-none tracking-[-0.02em] text-accent">
                              {metric.value}
                            </div>
                            <div className="text-[12.5px] text-muted mt-1.5 leading-[1.4]">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-6">
                      <Chips items={project.technologies} />
                    </div>

                    <ProjectLinks project={project} />

                    <div className="mt-7">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                        Key contributions
                      </h4>
                      <Achievements items={project.achievements} />
                    </div>

                  </div>

                </div>

                {project.images?.length > 1 && (
                  <div className="grid sm:grid-cols-3 gap-4 p-5 border-t border-line">
                    {project.images.map((key) => {
                      const image = imageLibrary[key];

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setLightboxImage(image)}
                          className="overflow-hidden rounded-xl border border-line cursor-zoom-in hover:border-accent transition"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

              </article>

            ) : (

              <article
                key={project.id}
                className="rounded-[20px] border border-line bg-surface p-7 md:p-8"
              >

                <h3 className="font-display font-bold text-[21px] tracking-[-0.02em]">
                  {project.title}
                </h3>

                <div className="text-[14.5px] font-medium text-muted mt-1.5">
                  {project.role}
                </div>

                <div className="text-[13.5px] text-subtle mt-0.5">
                  {project.client}
                </div>

                <p className="text-[15px] leading-[1.7] text-muted mt-4">
                  {project.description}
                </p>

                <div className="mt-5">
                  <Chips items={project.technologies} />
                </div>

                <ProjectLinks project={project} />

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                    Key contributions
                  </h4>
                  <Achievements items={project.achievements} />
                </div>

              </article>

            );
          })}

        </div>

      </div>

      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={closeLightbox} />
      )}

    </section>
  );
}

export default Projects;
