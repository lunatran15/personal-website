import { jsx, jsxs } from "react/jsx-runtime";
import { a as allAwards } from "./allAwards-ByYF1lFn.js";
import { C as Card, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { Trophy, BadgeCheck } from "lucide-react";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
function Awards() {
  const awards = [...allAwards].sort((a, b) => a.order - b.order);
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Recognition" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Awards & Certifications" }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: awards.map((a) => /* @__PURE__ */ jsx(Card, { className: "border-gold/30 transition-shadow hover:shadow-md", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex gap-4 pt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold", children: a.type === "Competition Award" ? /* @__PURE__ */ jsx(Trophy, { size: 20 }) : /* @__PURE__ */ jsx(BadgeCheck, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mb-2", children: a.type }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: a.issuer }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: new Date(a.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long"
        }) })
      ] })
    ] }) }, a.title)) })
  ] }) });
}
export {
  Awards as component
};
