import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import portrait from "@/assets/harini-portrait.png.asset.json";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(localStorage.getItem("theme") === "light");
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b bg-background/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={portrait.url}
            alt={profile.name}
            className="h-10 w-10 rounded-full border border-border/60 object-cover shadow-soft transition-transform duration-300 hover:scale-105"
          />
          <span className="font-display text-2xl text-foreground">
            {profile.shortName}
            <span className="text-primary">.</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
                  active === n.id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLight((v) => !v)}
            aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full p-2.5 text-foreground hover:bg-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="animate-in fade-in slide-in-from-top-2 border-b bg-background/95 backdrop-blur-xl duration-200 lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium",
                    active === n.id ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
