import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Achievements, Certifications, Education, Experience, Skills } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer, Resume } from "@/components/portfolio/Contact";

const title = "Kakkerla Harini Priya | AI & Full-Stack Developer";
const description =
  "Portfolio of Kakkerla Harini Priya, an AI & Full-Stack Developer specializing in Artificial Intelligence, React, Python, Flask, Node.js and modern web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <div className="py-12" />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
}
