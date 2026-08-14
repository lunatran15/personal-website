import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { a as allJobs } from "./allJobs-De9SzQiw.js";
import { a as allBlogs } from "./allBlogs-BFQaow73.js";
import { a as allAwards } from "./allAwards-ByYF1lFn.js";
import { C as Card, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { B as Button } from "./button-CYR7_VuG.js";
import { ArrowRight, Download, Globe2, BrainCircuit, ShieldCheck, Blocks } from "lucide-react";
import "./router-CIAbZC5-.js";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const HIGHLIGHTS = [{
  icon: Globe2,
  title: "Multinational Experience",
  body: "Career and study spanning from Vietnam, the United States, and China - a diverse lens on product and technology."
}, {
  icon: BrainCircuit,
  title: "Product Leadership",
  body: "End-to-end product ownership across fintech, education, and consumer platforms, from BRD to launch."
}, {
  icon: ShieldCheck,
  title: "Cybersecurity Research",
  body: "Master of Cybersecurity candidate at USTC, researching Blockchain Security combined with Machine learning on RegTech."
}, {
  icon: Blocks,
  title: "AI & Blockchain Curiosity",
  body: "Active interest in AI security, blockchain architecture, machine learning and emerging technology at the edge of both."
}];
function Home() {
  const featuredPosts = [...allBlogs].filter((p) => p.featured).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "ink-wash-bg relative overflow-hidden border-b border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-jade-deep", children: [
          /* @__PURE__ */ jsx("span", { className: "bamboo-rule" }),
          " Product · Security · Research"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl", children: [
          "Phuong Thu Do",
          /* @__PURE__ */ jsx("span", { className: "block text-2xl font-normal text-jade-deep sm:text-3xl", children: "(Pallas Do)" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-lg font-medium text-foreground/80", children: "Product Manager | Cybersecurity Researcher | Blockchain Security Enthusiast | AI & Technology Professional" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl leading-relaxed text-muted-foreground", children: "Hello there. I combine product, technology, and cybersecurity to turn complex ideas into meaningful digital products. With international experience across Product Management, Business Analysis, Project Management, FinTech, and UI/UX, I bring both strategic thinking and hands-on technical understanding to every challenge. My journey spans Vietnam, the United States, and China, from leading cross-functional teams to building products and researching Blockchain Security with Machine Learning. I’m always looking for opportunities to build, solve, and create impact at the intersection of business, technology, and innovation." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/about", children: [
            "Explore My Journey ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "gold", children: /* @__PURE__ */ jsx(Link, { to: "/blog", children: "Read My Blog" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/projects", children: "View Projects" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ghost", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact Me" }) })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "/resume.pdf", download: true, className: "mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-jade-deep underline-offset-4 hover:underline", children: [
          /* @__PURE__ */ jsx(Download, { size: 16 }),
          " Download Resume"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-jade/15 via-transparent to-gold/20 blur-2xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] border border-gold/40 bg-card p-3 shadow-xl", children: [
          /* @__PURE__ */ jsx("img", { src: "/images/phuong-do.png", alt: "Portrait of Phuong Thu Do (Pallas Do)", className: "h-80 w-64 rounded-[1.5rem] object-cover sm:h-96 sm:w-80" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-5 -left-5 rounded-2xl border border-border bg-ivory px-5 py-3 shadow-lg", children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-jade-deep", children: "3" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Countries of experience" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-5 py-20 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: HIGHLIGHTS.map((h) => /* @__PURE__ */ jsx(Card, { className: "border-border/70 transition-shadow hover:shadow-md", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-full bg-secondary text-jade-deep", children: /* @__PURE__ */ jsx(h.icon, { size: 20 }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-semibold text-ink", children: h.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: h.body })
    ] }) }, h.title)) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-border/60 bg-secondary/40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4 lg:px-10", children: [{
      value: `${allJobs.length}`,
      label: "Professional roles"
    }, {
      value: "2",
      label: "Featured product launches"
    }, {
      value: `${allAwards.length}`,
      label: "Awards & certifications"
    }, {
      value: "3",
      label: "Languages spoken"
    }].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-jade-deep", children: s.value }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    featuredPosts.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-5 py-20 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-ink", children: "From the Knowledge Hub" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Thought leadership on AI, cybersecurity, blockchain, and product management." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "hidden items-center gap-1 text-sm font-medium text-jade-deep hover:underline sm:inline-flex", children: [
          "View all articles ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: featuredPosts.map((post) => /* @__PURE__ */ jsx(Link, { to: "/blog/$slug", params: {
        slug: post._meta.path
      }, children: /* @__PURE__ */ jsx(Card, { className: "h-full transition-shadow hover:shadow-md", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: post.category }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 font-semibold leading-snug text-ink", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-3 text-sm text-muted-foreground", children: post.summary }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: post.readingTime })
      ] }) }) }, post._meta.path)) })
    ] })
  ] });
}
export {
  Home as component
};
