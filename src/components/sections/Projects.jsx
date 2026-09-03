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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-sm p-6 cursor-zoom-out"
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] w-auto max-w-full rounded-xl border border-slate-700 object-contain cursor-default"
      />

      <p className="mt-4 max-w-2xl text-center text-sm text-slate-400">
        {image.alt}
      </p>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-6 right-6 text-4xl leading-none text-slate-400 hover:text-white transition"
      >
        ×
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
    <div className="flex flex-wrap gap-3 mt-8">

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition"
      >
        <FaCode aria-hidden="true" />
        View workflow JSON
      </a>

      <a
        href={href}
        download
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition"
      >
        <FaDownload aria-hidden="true" />
        Download
      </a>

    </div>
  );
}

function Projects() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-32 md:py-40 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          eyebrow="Selected Work"
          title="Automations, Products & Infrastructure"
        >
          Real automations and AI integrations built for live businesses,
          alongside the platform and infrastructure work behind them. Click any
          screenshot to view it full size.
        </SectionHeading>

        <div className="space-y-12 mt-16">

          {projects.map((project) => {
            const cover = project.images?.length
              ? imageLibrary[project.images[0]]
              : null;

            return project.featured ? (

              <div
                key={project.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden"
              >

                {/* Featured projects without screenshots run full width rather
                    than leaving half the card empty. */}
                <div className={cover ? "grid lg:grid-cols-2" : ""}>

                  {/* LEFT IMAGE */}

                  {cover && (
                    <div className="bg-slate-900">

                      <img
                        src={cover.src}
                        alt={cover.alt}
                        width={cover.width}
                        height={cover.height}
                        loading="lazy"
                        decoding="async"
                        onClick={() => setLightboxImage(cover)}
                        className="w-full h-full object-cover cursor-zoom-in"
                      />

                    </div>
                  )}

                  {/* RIGHT CONTENT */}

                  <div className="p-10 flex flex-col justify-center">

                    <span className="w-fit bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md text-xs uppercase tracking-[0.15em] font-semibold">
                      Featured
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold mt-6">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mt-3 text-lg">
                      {project.role}
                    </p>

                    <p className="text-slate-500 mt-1">
                      {project.client}
                    </p>

                    <p className="text-slate-300 leading-8 mt-8">
                      {project.description}
                    </p>

                    {/* METRICS */}

                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4 mt-8">

                        {project.metrics.map((metric) => (

                          <div
                            key={metric.label}
                            className="bg-slate-900 rounded-xl p-5"
                          >

                            <p className="text-3xl font-bold text-blue-400">
                              {metric.value}
                            </p>

                            <p className="text-slate-400 text-sm mt-1">
                              {metric.label}
                            </p>

                          </div>

                        ))}

                      </div>
                    )}

                    {/* TECHNOLOGIES */}

                    <div className="flex flex-wrap gap-2 mt-8">

                      {project.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="bg-slate-800/70 text-slate-300 px-3 py-1.5 rounded-md text-[13px]"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* WORKFLOW SOURCE */}

                    <ProjectLinks project={project} />

                    {/* ACHIEVEMENTS */}

                    <div className="mt-10">

                      <h4 className="text-lg font-semibold mb-4">
                        Key Contributions
                      </h4>

                      <ul className="grid md:grid-cols-2 gap-3">

                        {project.achievements.map((item) => (

                          <li
                            key={item}
                            className="text-slate-400"
                          >
                            ✔ {item}
                          </li>

                        ))}

                      </ul>

                    </div>

                  </div>

                </div>

                {/* IMAGE GALLERY */}

                {project.images?.length > 1 && (

                  <div className="grid md:grid-cols-3 gap-6 p-8 border-t border-slate-800">

                    {project.images.map((key) => {
                      const image = imageLibrary[key];

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setLightboxImage(image)}
                          className="rounded-xl overflow-hidden border border-slate-700 cursor-zoom-in transition duration-300 hover:scale-105 hover:border-blue-500"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      );
                    })}

                  </div>

                )}

              </div>

            ) : (

              <div
                key={project.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
              >

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-300 mt-2">
                  {project.role}
                </p>

                <p className="text-slate-500">
                  {project.client}
                </p>

                <p className="text-slate-300 leading-8 mt-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-slate-800/70 text-slate-300 px-3 py-1.5 rounded-md text-[13px]"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-8">

                  <h4 className="text-lg font-semibold mb-3">
                    Key Contributions
                  </h4>

                  <ul className="grid md:grid-cols-2 gap-2">

                    {project.achievements.map((item) => (

                      <li
                        key={item}
                        className="text-slate-400"
                      >
                        ✔ {item}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            );
          })}

        </div>

      </div>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
        />
      )}

    </section>
  );
}

export default Projects;
