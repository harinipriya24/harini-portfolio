import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { btn, GithubIcon, LinkedinIcon } from "./ui";
import { toast } from "sonner";
import portrait from "@/assets/harini-portrait.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export function downloadResume() {
  if (profile.resumeUrl) window.open(profile.resumeUrl, "_blank", "noopener");
  else toast("Resume coming soon", { description: "The resume file will be available here shortly." });
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div className="order-last animate-in fade-in slide-in-from-bottom-4 duration-700 lg:order-none">
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

        <div className="order-first animate-in fade-in zoom-in-95 duration-1000 lg:order-none">
          <div className="flex min-h-0 flex-col items-center justify-center px-0 py-0 text-center lg:min-h-[32rem] lg:rounded-3xl lg:border lg:bg-card/70 lg:px-6 lg:py-8 lg:shadow-soft lg:backdrop-blur">
            <img
              src={assetUrl(portrait.url)}
              alt={profile.name}
              width={512}
              height={512}
              className="aspect-square w-full max-w-36 rounded-full border-[6px] border-background object-cover shadow-soft lg:max-w-80"
            />
            <div className="mt-3 w-full max-w-[20rem] rounded-2xl border border-border/60 bg-background/50 px-5 py-3 text-center lg:mt-5 lg:py-4">
              <p className="font-display text-2xl text-foreground">{profile.shortName}</p>
              <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
