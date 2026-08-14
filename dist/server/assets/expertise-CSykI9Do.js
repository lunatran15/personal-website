import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { Code2, Cloud, Wrench, Palette, KanbanSquare } from "lucide-react";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const CATEGORIES = [{
  icon: Code2,
  title: "Programming & Frameworks",
  items: ["Python", "JavaScript", "PHP", "Java", "SQL", "PyTorch", "React", "Solidity", "Rust"]
}, {
  icon: Cloud,
  title: "Cloud & Platforms",
  items: ["Amazon AWS", "Azure", "WordPress"]
}, {
  icon: Wrench,
  title: "Technical Tools",
  items: ["Kibana", "VMware", "Trello", "Jira", "POSTMAN", "Firebase", "Google Analytics", "Playwright"]
}, {
  icon: Palette,
  title: "Design",
  items: ["Adobe Suite", "Photoshop", "Premiere Pro", "Dreamweaver", "XD", "Figma", "Axure", "Xmind"]
}, {
  icon: KanbanSquare,
  title: "Project Management",
  items: ["Kanban", "Scrum", "Waterfall"]
}];
function Expertise() {
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Expertise" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Skills & Expertise Dashboard" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "A working toolkit spanning software development, cloud platforms, product tooling, design, and project management methodology — built across product, engineering, and research roles." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsx(Card, { className: "border-border/70", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-full bg-secondary text-jade-deep", children: /* @__PURE__ */ jsx(cat.icon, { size: 20 }) }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: cat.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: cat.items.map((item) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "border-jade/30 px-3 py-1 text-sm text-ink hover:border-jade hover:text-jade-deep", children: item }, item)) })
    ] }) }, cat.title)) })
  ] }) });
}
export {
  Expertise as component
};
