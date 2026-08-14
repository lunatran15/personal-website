import { jsx, jsxs } from "react/jsx-runtime";
import { marked } from "marked";
import { a as allJobs } from "./allJobs-De9SzQiw.js";
import { a as allEducations } from "./allEducations-DRxDpqSd.js";
import { a as allAwards } from "./allAwards-ByYF1lFn.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { B as Button } from "./button-CYR7_VuG.js";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { c as cn } from "./router-CIAbZC5-.js";
import { Download, CheckCircle2, Languages } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const LANGUAGES = [{
  name: "Vietnamese",
  level: "Native Speaker",
  pct: 100
}, {
  name: "English",
  level: "Fluent",
  pct: 90
}, {
  name: "Chinese",
  level: "Intermediate",
  pct: 55
}];
function Resume() {
  const jobs = [...allJobs].sort((a, b) => a.order - b.order);
  const educations = [...allEducations].sort((a, b) => a.order - b.order);
  const certs = allAwards.filter((a) => 
    a.type === "Professional Certification" ||
    a.type === "Competition Award");
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Resume" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Professional Experience & Education" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "/resume.pdf", download: true, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "gold", children: [
        /* @__PURE__ */ jsx(Download, { size: 16 }),
        " Download Resume"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "mt-8" }),
    /* @__PURE__ */ jsxs(Card, { className: "mt-10", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Professional Profile" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-8 sm:flex-row", children: [
        /* @__PURE__ */ jsx("p", { className: "flex-1 leading-relaxed text-muted-foreground", children: "Phuong Thu Do (Pallas Do) is a technology professional specializing in Product Management, Business Analysis, Cybersecurity Research, Blockchain Security, Artificial Intelligence, and Software Development. With international experience spanning Vietnam, the United States, and China, she bridges business strategy and technical execution — leading Agile product delivery while pursuing a Master of Cybersecurity with a research focus on Blockchain Security on RegTech." }),
        /* @__PURE__ */ jsx("img", { src: "/images/phuong-do.png", alt: "Professional headshot of Phuong Thu Do", className: "h-52 w-44 rounded-2xl object-cover" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-14 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-ink", children: "Work Experience" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: jobs.map((job) => /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-2 sm:flex-row sm:items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: job.jobTitle }),
            /* @__PURE__ */ jsxs("p", { className: "font-medium text-jade-deep", children: [
              job.company,
              " - ",
              job.location
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "w-fit text-sm", children: [
            new Date(job.startDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short"
            }),
            " – ",
            job.endDate ? new Date(job.endDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short"
            }) : "Present"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "mb-5 leading-relaxed text-muted-foreground", children: job.summary }),
          job.achievements.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mb-5 space-y-2", children: job.achievements.map((a) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 text-sm leading-relaxed", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-0.5 shrink-0 text-jade-deep", size: 16 }),
            /* @__PURE__ */ jsx("span", { children: a })
          ] }, a)) }),
          /* @__PURE__ */ jsx("div", { className: "mb-5 flex flex-wrap gap-2", children: job.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tag }, tag)) }),
          job.content && /* @__PURE__ */ jsx("div", { className: "prose prose-sm mt-4 max-w-none", dangerouslySetInnerHTML: {
            __html: marked(job.content)
          } })
        ] })
      ] }, job.jobTitle)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-14 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-ink", children: "Education" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: educations.map((education) => /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: education.degree }),
          /* @__PURE__ */ jsxs("p", { className: "font-medium text-jade-deep", children: [
            education.school,
            education.location ? ` - ${education.location}` : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-muted-foreground", children: education.summary }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: education.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tag }, tag)) }),
          education.content && /* @__PURE__ */ jsx("div", { className: "prose prose-sm mt-6 max-w-none", dangerouslySetInnerHTML: {
            __html: marked(education.content)
          } })
        ] })
      ] }, education.school)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-14 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-ink", children: "Certifications" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: certs.map((c) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: c.issuer })
      ] }) }, c.title)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-14 space-y-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 font-display text-3xl text-ink", children: [
        /* @__PURE__ */ jsx(Languages, { size: 26, className: "text-jade-deep" }),
        " Languages"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: LANGUAGES.map((l) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-ink", children: l.name }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: l.level })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-gradient-to-r from-jade to-gold", style: {
          width: `${l.pct}%`
        } }) })
      ] }, l.name)) })
    ] })
  ] }) });
}
export {
  Resume as component
};
