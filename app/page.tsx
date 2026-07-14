import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import Headshot from "@/components/Headshot";
import {
  profile,
  about,
  experience,
  skills,
  highlights,
  education,
  LINKEDIN_URL,
  MAILTO,
  EMAIL,
} from "@/lib/content";

/** Small uppercase section label. */
function Eyebrow({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "accent";
}) {
  return (
    <div
      className={`eyebrow ${tone === "accent" ? "text-accent" : "text-ink-4"}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Header />

      <main id="top" className="mx-auto max-w-page">
        {/* ---------------------------------------------------------------- */}
        {/* Hero                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-5 pb-11 pt-14 sm:px-[34px] sm:pb-[46px] sm:pt-14">
          <div className="flex flex-col-reverse gap-9 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
            {/* Text column */}
            <div className="min-w-0">
              <FadeIn>
                <Eyebrow tone="accent">{profile.eyebrow}</Eyebrow>
              </FadeIn>
              <FadeIn delay={1}>
                <h1 className="mt-5 max-w-[15em] text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[38px]">
                  {profile.headline}
                </h1>
              </FadeIn>
              <FadeIn delay={2}>
                <p className="mt-[22px] max-w-[34em] text-[15px] font-normal leading-[1.6] text-ink-2">
                  {profile.lead}
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={3}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-accent"
                  >
                    <Linkedin size={15} strokeWidth={1.75} />
                    View LinkedIn
                  </a>
                  <a
                    href={MAILTO}
                    className="group inline-flex items-center gap-2 rounded-md border border-hairline bg-surface px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors duration-150 hover:border-accent hover:text-accent"
                  >
                    <Mail size={15} strokeWidth={1.75} />
                    Get in Touch
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Oval headshot */}
            <FadeIn className="self-center sm:self-start sm:pt-1">
              <Headshot />
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* About                                                            */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="about"
          className="border-t border-hairline px-5 py-10 sm:px-[34px] sm:py-[40px]"
        >
          <FadeIn>
            <Eyebrow>About</Eyebrow>
          </FadeIn>
          <div className="mt-[26px] grid grid-cols-1 gap-[26px] sm:grid-cols-[1.4fr_1fr] sm:gap-10">
            <FadeIn>
              <p className="max-w-[34em] text-[15px] leading-[1.6] text-ink-2">
                {about.body}
              </p>
            </FadeIn>
            <FadeIn delay={1}>
              <dl className="flex flex-col gap-4">
                {about.meta.map((m) => (
                  <div key={m.k}>
                    <dt className="text-[15px] font-semibold text-ink">
                      {m.k}
                    </dt>
                    <dd className="mt-[3px] text-[13px] text-ink-3">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Highlights (bento)                                               */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="highlights"
          className="border-t border-hairline bg-surface px-5 py-10 sm:px-[34px] sm:py-[40px]"
        >
          <FadeIn>
            <Eyebrow>Highlights</Eyebrow>
          </FadeIn>
          <div className="mt-[26px] grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <FadeIn key={h.label} delay={i} className="h-full">
                <div className="flex h-full flex-col gap-2 bg-surface p-5 transition-colors duration-150 hover:bg-bg">
                  <div className="text-[26px] font-bold leading-none tracking-[-0.02em] text-ink">
                    {h.metric}
                  </div>
                  <div className="eyebrow text-accent">{h.label}</div>
                  <p className="mt-1 text-[13px] leading-[1.5] text-ink-3">
                    {h.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Experience                                                       */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="work"
          className="border-t border-hairline px-5 py-10 sm:px-[34px] sm:py-[40px]"
        >
          <FadeIn>
            <Eyebrow>Experience</Eyebrow>
          </FadeIn>
          <div className="mt-[26px] flex flex-col gap-8">
            {experience.map((job, i) => (
              <FadeIn key={`${job.role}-${job.date}`} delay={i} as="div">
                <article className="grid grid-cols-1 gap-2 border-t border-hairline pt-6 first:border-t-0 first:pt-0 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <div className="pt-[3px] text-[12px] font-semibold uppercase tracking-wide text-ink-4">
                    {job.date}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-ink">
                      {job.role}
                    </h3>
                    <div className="mt-[3px] text-[13px] text-ink-3">
                      {job.company}
                      {job.context ? (
                        <span className="text-ink-4"> · {job.context}</span>
                      ) : null}
                    </div>
                    <ul className="mt-3 flex flex-col gap-2">
                      {job.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="relative pl-4 text-[13px] leading-[1.55] text-ink-2 before:absolute before:left-0 before:top-[9px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-ink-4"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Skills                                                           */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="skills"
          className="border-t border-hairline bg-surface px-5 py-10 sm:px-[34px] sm:py-[40px]"
        >
          <FadeIn>
            <Eyebrow>Skills &amp; Tools</Eyebrow>
          </FadeIn>
          <div className="mt-[26px] flex flex-col gap-8">
            {skills.map((group, gi) => (
              <FadeIn key={group.category} delay={gi}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[120px_1fr] sm:gap-6">
                  <div className="pt-1 text-[12px] font-semibold uppercase tracking-wide text-ink-4">
                    {group.category}
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-hairline bg-bg px-3 py-1.5 text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:border-accent hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Education                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-hairline px-5 py-10 sm:px-[34px] sm:py-[40px]">
          <FadeIn>
            <Eyebrow>Education</Eyebrow>
          </FadeIn>
          <div className="mt-[26px] flex flex-col gap-5">
            {education.map((e, i) => (
              <FadeIn key={e.school} delay={i}>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <div>
                    <div className="text-[15px] font-semibold text-ink">
                      {e.school}
                    </div>
                    <div className="mt-[3px] text-[13px] text-ink-3">
                      {e.detail}
                    </div>
                  </div>
                  <div className="text-[12px] font-semibold uppercase tracking-wide text-ink-4">
                    {e.place}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* Contact / Footer                                                   */}
      {/* ------------------------------------------------------------------ */}
      <footer
        id="contact"
        className="border-t border-hairline bg-bg"
      >
        <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-[34px]">
          <a
            href={MAILTO}
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink transition-colors duration-150 hover:text-accent"
          >
            Let&rsquo;s talk
            <ArrowUpRight
              size={17}
              strokeWidth={1.75}
              className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <div className="flex items-center gap-5">
            <a
              href={MAILTO}
              className="text-[13px] font-medium text-accent transition-opacity duration-150 hover:opacity-70"
            >
              {EMAIL}
            </a>
            <span className="h-4 w-px bg-hairline" aria-hidden />
            <div className="flex items-center gap-3 text-ink-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-150 hover:text-ink"
              >
                <Linkedin size={18} strokeWidth={1.75} />
              </a>
              <a
                href={MAILTO}
                aria-label="Email"
                className="transition-colors duration-150 hover:text-ink"
              >
                <Mail size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-page px-5 pb-8 sm:px-[34px]">
          <p className="text-[12px] text-ink-4">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
