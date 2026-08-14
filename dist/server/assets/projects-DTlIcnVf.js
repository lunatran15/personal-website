import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { Github, ExternalLink, Target, Lightbulb, Cog, Trophy, BookOpen } from "lucide-react";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const allProjects = [
  {
    "title": "Low-Carbon Optimization Mini Program — Alipay Developer Competition",
    "location": "Shenzhen, China",
    "description": "A machine-learning-powered Alipay Mini Program that helps users track and optimize their carbon footprint, built for the Alipay Mini Program Developer Competition and Shenzhen International Fintechathon.",
    "challenge": "Design and ship a consumer-facing application within a compressed hackathon timeline that could meaningfully reduce users' carbon footprint while meeting the technical and business criteria of a national fintech competition.",
    "solution": "Led product strategy for a Machine Learning-based low-carbon optimization Alipay Mini Program that analyzed user spending and travel behavior to recommend lower-carbon alternatives, paired with a clean, intuitive UI/UX designed for rapid adoption.",
    "role": "Project Manager cum UI/UX Designer — owned product strategy, roadmap planning, team management, and interface design.",
    "process": "Facilitated rapid discovery with the engineering and data science team, defined the MVP feature set under competition time constraints, designed wireframes and high-fidelity UI in Figma, and coordinated daily standups to keep the cross-functional team aligned through the build sprint.",
    "result": "The team was recognized among the Top 10 in the Product Manager track at the Shenzhen International Fintech Competition, and the project was showcased as an entrant in the Alipay Mini Program Developer Competition.",
    "lessons": "Reinforced the value of ruthless scope prioritization under time pressure, and how tight designer-engineer-data science collaboration can compress a product's path from concept to demo-ready prototype.",
    "techStack": [
      "Alipay Mini Program Framework",
      "Machine Learning",
      "Figma",
      "Python"
    ],
    "tags": [
      "Fintech",
      "Machine Learning",
      "Sustainability",
      "Product Strategy",
      "UI/UX"
    ],
    "content": "## Overview\n\nWorking with a cross-functional team in Shenzhen, I led product strategy and interface design for a Machine Learning-based Alipay Mini Program aimed at helping everyday users understand and reduce their carbon footprint through smarter financial and lifestyle choices.\n\n## Team Management\n\nCoordinated a small, fast-moving team of engineers and data scientists, running daily syncs to track progress against the competition deadline and resolve technical blockers as they emerged.\n\n## Outcome\n\nThe project earned recognition as a **Top 10 finalist in the Product Manager track** of the Shenzhen International Fintech Competition, validating both the product concept and the team's execution under pressure.",
    "_meta": {
      "filePath": "shenzhen-fintechathon.md",
      "fileName": "shenzhen-fintechathon.md",
      "directory": ".",
      "extension": "md",
      "path": "shenzhen-fintechathon"
    }
  },
  {
    "title": "Social Listening Application — Facebook Developer Circles",
    "location": "Hanoi, Vietnam",
    "description": "A social listening product built within the Facebook Developer Circles Hanoi community, combining data science and mobile engineering to surface actionable brand and market insights from social conversations.",
    "challenge": "Volunteer contributors across data science and mobile engineering needed a coordinated product plan to turn raw social-media signal into a usable, insight-generating application within a community-driven, part-time development structure.",
    "solution": "Defined the product strategy and requirements for a social listening application that aggregated and classified social media conversations, prioritizing features that balanced technical feasibility for a volunteer team with real user value for marketers and community managers.",
    "role": "Product Manager — set product strategy, defined requirements, and coordinated collaboration between the data science and mobile development workstreams.",
    "process": "Ran structured requirements sessions with the data science team to define sentiment and topic classification needs, then translated those into a mobile-first product spec, keeping the roadmap realistic for a volunteer-driven, Facebook Developer Circles Hanoi community project.",
    "result": "Delivered a working social listening prototype that demonstrated end-to-end sentiment and trend detection on social data, strengthening the case for social listening as an accessible product category for smaller organizations.",
    "lessons": "Learned how to manage product scope and stakeholder expectations in a volunteer, community-driven environment, and how to bridge data science outputs into product features that are legible to non-technical end users.",
    "techStack": [
      "Data Science / NLP pipeline",
      "Mobile Development",
      "Firebase",
      "Google Analytics"
    ],
    "tags": [
      "Product Management",
      "Data Science",
      "Mobile",
      "NLP",
      "Community"
    ],
    "content": "## Overview\n\nAs part of the Facebook Developer Circles Hanoi community, I served as Product Manager for a social listening application, coordinating between data science contributors building the NLP-driven sentiment engine and mobile developers building the client experience.\n\n## Collaboration Model\n\nFacilitated regular alignment between the data science and mobile teams to ensure the classification outputs could be meaningfully surfaced within the mobile product, keeping scope realistic for a community-driven build.\n\n## Outcome\n\nThe project delivered a functioning prototype that showcased how social listening insights could be packaged into an accessible mobile product, contributing to the local developer community's body of applied AI/NLP work.",
    "_meta": {
      "filePath": "social-listening-fdc.md",
      "fileName": "social-listening-fdc.md",
      "directory": ".",
      "extension": "md",
      "path": "social-listening-fdc"
    }
  }
];
function Projects() {
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Portfolio" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Featured Projects" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Product leadership in action — from a fintech machine-learning competition entry in Shenzhen to a community-driven social listening application in Hanoi." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-10", children: allProjects.map((project) => /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden border-border/70", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: project.title }),
            project.location && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-jade-deep", children: project.location })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            project.github && /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-jade-deep", children: [
              /* @__PURE__ */ jsx(Github, { size: 16 }),
              " Code"
            ] }),
            project.liveUrl && /* @__PURE__ */ jsxs("a", { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-sm text-jade-deep hover:underline", children: [
              /* @__PURE__ */ jsx(ExternalLink, { size: 16 }),
              " Live"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: project.description })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: project.techStack.map((t) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: t }, t)) }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(ProjectBlock, { icon: Target, label: "Challenge", text: project.challenge }),
          /* @__PURE__ */ jsx(ProjectBlock, { icon: Lightbulb, label: "Solution", text: project.solution }),
          /* @__PURE__ */ jsx(ProjectBlock, { icon: Cog, label: "Process", text: project.process }),
          /* @__PURE__ */ jsx(ProjectBlock, { icon: Trophy, label: "Result", text: project.result })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-xl bg-secondary/60 p-5", children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-1 flex items-center gap-2 text-sm font-semibold text-ink", children: [
            /* @__PURE__ */ jsx(BookOpen, { size: 16, className: "text-jade-deep" }),
            " Role"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: project.role })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 rounded-xl border border-gold/30 bg-gold/5 p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-1 text-sm font-semibold text-ink", children: "Lessons Learned" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: project.lessons })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tag }, tag)) })
      ] })
    ] }, project._meta.path)) })
  ] }) });
}
function ProjectBlock({
  icon: Icon,
  label,
  text
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("p", { className: "mb-1 flex items-center gap-2 text-sm font-semibold text-ink", children: [
      /* @__PURE__ */ jsx(Icon, { size: 16, className: "text-jade-deep" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: text })
  ] });
}
export {
  Projects as component
};
