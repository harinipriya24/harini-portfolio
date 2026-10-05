import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Star, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { btn, GithubIcon, Reveal, Section, SectionTitle, Tag } from "./ui";

function ProjectLinks({ p }: { p: Project }) {
  return (
    <>
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noreferrer" className={btn.smallPrimary}>
          <ExternalLink className="h-3.5 w-3.5" /> Live Demo
        </a>
      )}
      {p.githubUrl ? (
        <a href={p.githubUrl} target="_blank" rel="noreferrer" className={btn.small}>
          <GithubIcon className="h-3.5 w-3.5" /> GitHub
        </a>
      ) : (
        <button disabled className={btn.small} title="Repository link not available yet">
          <GithubIcon className="h-3.5 w-3.5" /> GitHub
        </button>
      )}
    </>
  );
}

export function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lift",
        p.featured ? "p-7 md:p-9" : "p-6",
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full glow-orb opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">/ {String(index + 1).padStart(2, "0")}</span>
        {p.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
            <Star className="h-3 w-3" /> Featured Project
          </span>
        )}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</p>
      <h3 className={cn("mt-2 font-display text-foreground", p.featured ? "text-3xl md:text-4xl" : "text-2xl")}>
        {p.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      {p.featured && (
        <ul className="mt-5 grid gap-x-4 gap-y-1.5 text-sm text-foreground/80 sm:grid-cols-2">
          {p.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-primary">—</span> {f}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {p.technologies.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
        <ProjectLinks p={p} />
        <button onClick={onOpen} className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary">
          View Details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}

export function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-overlay p-0 backdrop-blur-sm animate-in fade-in duration-200 sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border bg-card p-7 shadow-soft animate-in slide-in-from-bottom-6 zoom-in-95 duration-300 sm:rounded-3xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</p>
            <h3 id="project-modal-title" className="mt-2 font-display text-4xl text-foreground">{p.title}</h3>
          </div>
          <button autoFocus onClick={onClose} aria-label="Close details" className="rounded-full border p-2 hover:border-primary hover:text-primary">
            <X className="h-4 w-4" />
          </button>
        </div>

        <Block title="Overview / Goal"><p>{p.description}</p></Block>
        <Block title="Technologies">
          <div className="flex flex-wrap gap-2">{p.technologies.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </Block>
        <Block title="Key Features">
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-primary">—</span>{f}</li>
            ))}
          </ul>
        </Block>
        {p.demonstrates && (
          <Block title="What this project demonstrates">
            <div className="flex flex-wrap gap-2">{p.demonstrates.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </Block>
        )}
        <Block title="Project Links">
          <div className="flex flex-wrap gap-2"><ProjectLinks p={p} /></div>
        </Block>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <div className="text-sm leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="Work"
        title="Featured Projects"
        subtitle="Projects where I turned ideas into practical AI, full-stack and real-world applications."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80} className={i === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard p={p} index={i} onOpen={() => setOpen(p)} />
          </Reveal>
        ))}
      </div>
      <h3 className="mb-5 mt-16 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">More Projects</h3>
      <div className="grid gap-5 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <ProjectCard p={p} index={featured.length + i} onOpen={() => setOpen(p)} />
          </Reveal>
        ))}
      </div>
      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
