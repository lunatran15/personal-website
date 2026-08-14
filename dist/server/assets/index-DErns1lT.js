import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { a as allBlogs } from "./allBlogs-BFQaow73.js";
import { C as Card, c as CardContent, B as Badge, a as CardHeader, b as CardTitle } from "./badge-DITUi_Qy.js";
import { Search, Calendar, Clock } from "lucide-react";
import "./router-CIAbZC5-.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const posts = useMemo(() => [...allBlogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), []);
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const filtered = posts.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });
  const [featured, ...rest] = filtered;
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Knowledge Hub" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Blog & Knowledge Sharing" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Editorial-style essays on AI & machine learning, cybersecurity, blockchain technology, product management, and the career & learning journey across three countries." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", size: 16 }),
        /* @__PURE__ */ jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search articles...", className: "w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm outline-none focus:border-jade" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCategory(c), className: `rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${category === c ? "border-jade bg-jade text-primary-foreground" : "border-border text-muted-foreground hover:border-jade/50"}`, children: c }, c)) })
    ] }),
    featured && /* @__PURE__ */ jsx(Link, { to: "/blog/$slug", params: {
      slug: featured._meta.path
    }, className: "mt-10 block", children: /* @__PURE__ */ jsx(Card, { className: "overflow-hidden border-gold/40 bg-gradient-to-br from-secondary/60 to-card transition-shadow hover:shadow-lg", children: /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-6 pt-2 md:grid-cols-[1fr_1.2fr] md:items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-jade/20 to-gold/20 font-display text-2xl text-jade-deep", children: featured.category }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Badge, { children: featured.category }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-2xl text-ink sm:text-3xl", children: featured.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: featured.summary }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Calendar, { size: 13 }),
            " ",
            new Date(featured.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Clock, { size: 13 }),
            " ",
            featured.readingTime
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: rest.map((post) => /* @__PURE__ */ jsx(Link, { to: "/blog/$slug", params: {
      slug: post._meta.path
    }, className: "block", children: /* @__PURE__ */ jsxs(Card, { className: "h-full cursor-pointer transition-shadow hover:shadow-md", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "w-fit", children: post.category }),
        /* @__PURE__ */ jsx(CardTitle, { className: "mt-1 text-xl", children: post.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Calendar, { size: 14 }),
          /* @__PURE__ */ jsx("time", { children: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Clock, { size: 13 }),
            " ",
            post.readingTime
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-muted-foreground", children: post.summary }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tag }, tag)) })
      ] })
    ] }) }, post._meta.path)) }),
    filtered.length === 0 && /* @__PURE__ */ jsx("p", { className: "mt-16 text-center text-muted-foreground", children: "No articles match your search yet." })
  ] }) });
}
export {
  BlogIndex as component
};
