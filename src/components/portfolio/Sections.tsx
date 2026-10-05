import { Award, BadgeCheck, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { achievements, certifications, currentlyLearning, experiences, skillGroups } from "@/data/portfolio";
import { Reveal, Section, SectionTitle, Tag } from "./ui";

const highlights = [
  { n: "01", label: "Education", value: "B.Tech – Artificial Intelligence & Data Science" },
  { n: "02", label: "Focus", value: "AI + Full-Stack Development" },
  { n: "03", label: "CGPA", value: "8.76 / 10" },
];

export function About() {
  return (
    <Section id="about">
      <SectionTitle eyebrow="About" title="About Me" />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-foreground/85 leading-relaxed">
          <p>
            I am a B.Tech student specializing in Artificial Intelligence &amp; Data Science with a strong interest in AI
            and Full-Stack Development. I enjoy transforming ideas into practical applications by combining intelligent
            systems with modern web technologies.
          </p>
          <p>
            Through academic projects, internships and real-world development work, I have gained hands-on experience
            with frontend development, backend APIs, databases, AI concepts and modern development tools.
          </p>
          <p>
            My goal is to become a strong AI and Full-Stack Developer capable of building complete, scalable and
            user-friendly applications that solve real-world problems.
          </p>
        </Reveal>
        <Reveal delay={120} className="rounded-3xl border bg-card p-6 shadow-soft">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Sparkles className="h-4 w-4 text-primary" /> Currently Learning
          </p>
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.n} delay={i * 80}>
            <div className="group h-full rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <p className="font-mono text-xs text-primary">{h.n}</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{h.label}</p>
              <p className="mt-2 font-display text-2xl text-foreground">{h.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" className="bg-secondary/40">
      <SectionTitle eyebrow="Education" title="Academic Foundation" />
      <div className="relative pl-8 md:pl-12">
        <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-4" />
        <Reveal className="relative">
          <span className="absolute -left-[30px] top-7 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background md:-left-[38px]" />
          <div className="rounded-3xl border bg-card p-7 shadow-soft md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <GraduationCap className="mb-4 h-6 w-6 text-primary" />
                <h3 className="font-display text-3xl text-foreground">B.Tech – Artificial Intelligence &amp; Data Science</h3>
                <p className="mt-2 text-muted-foreground">KLH University</p>
              </div>
              <div className="rounded-2xl bg-accent px-5 py-3 text-center">
                <p className="font-display text-3xl text-accent-foreground">8.76</p>
                <p className="text-xs text-muted-foreground">CGPA / 10</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionTitle eyebrow="Experience" title="Experience & Learning" />
      <div className="grid gap-5 md:grid-cols-3">
        {experiences.map((e, i) => (
          <Reveal key={e.org} delay={i * 80}>
            <article className="flex h-full flex-col rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
              <div className="mb-6 flex items-center justify-between">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground">{e.kind}</span>
              </div>
              <p className="text-sm font-semibold text-primary">{e.org}</p>
              <h3 className="mt-1 font-display text-2xl text-foreground">{e.role}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SkillCard({ title, skills, index }: { title: string; skills: string[]; index: number }) {
  return (
    <div className="h-full rounded-3xl border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="mb-5 flex items-baseline justify-between">
        <h3 className="font-display text-2xl text-foreground">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary/40">
      <SectionTitle
        eyebrow="Skills"
        title="Technical Skills"
        subtitle="Technologies and tools I use to build modern applications."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60} className={i === 3 ? "lg:col-span-2" : ""}>
            <SkillCard title={g.title} skills={g.skills} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CertificationCard({ issuer, title, type }: { issuer: string; title: string; type: string }) {
  return (
    <div className="group flex h-full items-start gap-4 rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
        <BadgeCheck className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{type}</p>
        <h3 className="mt-1 font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-primary">{issuer}</p>
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionTitle eyebrow="Certifications" title="Certifications & Learning" />
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <CertificationCard {...c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AchievementCard({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl text-primary/10">
        0{n}
      </span>
      <Award className="mb-6 h-5 w-5 text-primary" />
      <h3 className="font-display text-2xl text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" className="bg-secondary/40">
      <SectionTitle eyebrow="Achievements" title="Highlights" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 60} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
            <AchievementCard n={i + 1} {...a} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
