import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { btn, GithubIcon, LinkedinIcon } from "./ui";
import { toast } from "sonner";

export function downloadResume() {
  if (profile.resumeUrl) window.open(profile.resumeUrl, "_blank", "noopener");
  else toast("Resume coming soon", { description: "The resume file will be available here shortly." });
}

const codeLines = [
  ["const", " developer = {"],
  ["  name", ": 'Harini Priya',"],
  ["  focus", ": ['AI', 'Full-Stack'],"],
  ["  stack", ": ['React', 'Python', 'Node'],"],
  ["  builds", ": 'real-world apps',"],
  ["", "};"],
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="glow-orb animate-float pointer-events-none absolute -left-24 top-24 h-96 w-96 rounded-full" aria-hidden />
      <div
        className="glow-orb animate-float pointer-events-none absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {profile.title}
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl">
            Kakkerla <br />
            <em className="text-primary">Harini Priya</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85">
            B.Tech student specializing in Artificial Intelligence &amp; Data Science, passionate about building
            intelligent, scalable and user-friendly applications.
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Building the intersection of Artificial Intelligence and modern Full-Stack Development.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={btn.primary}>
              View My Projects <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={downloadResume} className={btn.outline}>
              <Download className="h-4 w-4" /> Download Resume
            </button>
            <a href="#contact" className={btn.ghost}>
              Let's Connect →
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2">
            {[
              { href: profile.github, label: "GitHub", icon: <GithubIcon /> },
              { href: profile.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
              { href: `mailto:${profile.email}`, label: "Email", icon: <Mail className="h-4 w-4" /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative hidden animate-in fade-in zoom-in-95 duration-1000 lg:block" aria-hidden>
          <div className="rounded-3xl border bg-card/70 p-6 shadow-soft backdrop-blur">
            <div className="mb-5 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
            </div>
            <pre className="font-mono text-[13px] leading-7">
              {codeLines.map(([k, v], i) => (
                <div key={i}>
                  <span className="text-primary">{k}</span>
                  <span className="text-muted-foreground">{v}</span>
                </div>
              ))}
            </pre>
          </div>
          <div className="absolute -bottom-8 -left-8 rounded-2xl border bg-card px-5 py-4 shadow-soft">
            <p className="font-display text-3xl text-primary">8.76</p>
            <p className="text-xs text-muted-foreground">CGPA / 10</p>
          </div>
        </div>
      </div>
    </section>
  );
}
