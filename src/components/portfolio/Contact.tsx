import { useState, type FormEvent } from "react";
import { ArrowUp, CheckCircle2, Download, Mail, Send } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { downloadResume } from "./Hero";
import { btn, GithubIcon, LinkedinIcon, Reveal, Section, SectionTitle } from "./ui";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters).").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  message: z.string().trim().min(10, "Your message should be at least 10 characters.").max(1000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail className="h-5 w-5" /> },
  { label: "LinkedIn", value: "kakkerla-harini-priya", href: profile.linkedin, icon: <LinkedinIcon className="h-5 w-5" /> },
  { label: "GitHub", value: "harinipriya24", href: profile.github, icon: <GithubIcon className="h-5 w-5" /> },
];

export function Resume() {
  return (
    <section className="px-5 md:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-card p-8 md:p-12">
        <div className="glow-orb pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">Want to know more about my journey?</h2>
            <p className="mt-2 text-muted-foreground">
              Download my resume to explore my education, skills, projects and experience.
            </p>
          </div>
          <button onClick={downloadResume} className={btn.primary}>
            <Download className="h-4 w-4" /> Download Resume
          </button>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] ??= i.message));
      setErrors(errs);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    form.reset();
  };

  const field = (name: keyof Errors, label: string, type = "text") => (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      {type === "textarea" ? (
        <textarea
          id={name} name={name} rows={5} required aria-invalid={!!errors[name]} aria-describedby={`${name}-err`}
          className={cn("w-full resize-none rounded-2xl border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary", errors[name] && "border-destructive")}
        />
      ) : (
        <input
          id={name} name={name} type={type} required aria-invalid={!!errors[name]} aria-describedby={`${name}-err`}
          className={cn("w-full rounded-2xl border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary", errors[name] && "border-destructive")}
        />
      )}
      {errors[name] && <p id={`${name}-err`} className="mt-1.5 text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Build Something Together"
        subtitle="I'm always interested in learning, building meaningful applications and exploring opportunities in AI and Full-Stack Development."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="grid gap-4 self-start">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-3xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">{c.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">{c.label}</span>
                  <span className="block truncate font-medium text-foreground group-hover:text-primary">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border bg-card p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {field("name", "Name")}
              {field("email", "Email", "email")}
            </div>
            {field("message", "Message", "textarea")}
            <button type="submit" className={cn(btn.primary, "justify-self-start")}>
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && (
              <p role="status" className="flex items-center gap-2 text-sm text-success animate-in fade-in">
                <CheckCircle2 className="h-4 w-4" /> Thank you! Your message has been received.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl text-foreground">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-primary">Email</a>
          <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-full border hover:border-primary hover:text-primary">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-muted-foreground">© 2026 Kakkerla Harini Priya. All rights reserved.</p>
    </footer>
  );
}
