import { jsx, jsxs } from "react/jsx-runtime";
import { a as allJobs } from "./allJobs-De9SzQiw.js";
import { a as allEducations } from "./allEducations-DRxDpqSd.js";
import { C as Card, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { Target, Users, Cpu, FlaskConical, Sparkles } from "lucide-react";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const STRENGTHS = [{
  icon: Target,
  title: "Business-to-Technical Translation",
  body: "Turning ambiguous business problems into clear requirements, specs, and roadmaps that engineering teams can execute against."
}, {
  icon: Users,
  title: "Cross-Functional Leadership",
  body: "Leading distributed product, design, engineering, and QA teams across time zones and cultures, from Hanoi to Shenzhen to remote-first teams."
}, {
  icon: Cpu,
  title: "Technology Product Building",
  body: "Shipping fintech, education, and consumer products end-to-end, from discovery through Agile delivery and measurable business impact."
}, {
  icon: FlaskConical,
  title: "Cybersecurity Research",
  body: "Graduate-level research into blockchain security, AI security, cryptography, and information hiding at USTC."
}];
function About() {
  const timelineItems = [...allJobs.map((j) => ({
    date: j.startDate,
    title: j.jobTitle,
    subtitle: `${j.company} · ${j.location}`,
    kind: "work"
  })), ...allEducations.map((e) => ({
    date: e.startDate,
    title: e.degree,
    subtitle: e.school,
    kind: "education"
  }))].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "About Me" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Building a career at the nexus of business strategy, technology, and applied research." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("p", { className: "leading-relaxed text-muted-foreground", children: [
        "My career philosophy is simple: ",
        /* @__PURE__ */ jsx("strong", { className: "text-ink", children: "technology only matters if it solves a real business problem responsibly." }),
        " ",
        "That belief has carried me from running a small e-commerce business in Ohio, through business studies in California, into Agile product leadership across Vietnam's technology sector, and now into cybersecurity graduate research in China."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-muted-foreground", children: "I am drawn to the technologies reshaping trust itself - artificial intelligence, blockchain security, and the regulatory systems that must keep pace with them. My vision is to lead at the intersection of product strategy and security research: building technology that is not only delightful and effective, but rigorously trustworthy by design." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2", children: STRENGTHS.map((s) => /* @__PURE__ */ jsx(Card, { className: "border-border/70", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex gap-4 pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-jade-deep", children: /* @__PURE__ */ jsx(s.icon, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: s.body })
      ] })
    ] }) }, s.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-ink", children: "Career & Education Timeline" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-8 border-l-2 border-dashed border-jade/30 pl-8", children: timelineItems.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-[2.55rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-jade bg-ivory", children: /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-jade" }) }),
        /* @__PURE__ */ jsx(Badge, { variant: item.kind === "education" ? "secondary" : "outline", className: "mb-1", children: item.kind === "education" ? "Education" : "Career" }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.subtitle }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long"
        }) })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "mt-16 border-gold/40 bg-gradient-to-br from-secondary/60 to-card", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-start gap-4 pt-2", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "mt-1 shrink-0 text-gold", size: 22 }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-ink", children: "Vision for the Future" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 leading-relaxed text-muted-foreground", children: "To grow into a technology leader who bridges product strategy, cybersecurity research, and AI governance: helping organizations build systems that are innovative, globally-minded, and trustworthy by design." })
      ] })
    ] }) })
  ] }) });
}
export {
  About as component
};
