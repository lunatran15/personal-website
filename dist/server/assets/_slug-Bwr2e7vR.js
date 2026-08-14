import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { a as allBlogs } from "./allBlogs-BFQaow73.js";
import { marked } from "marked";
import { B as Badge, C as Card, c as CardContent } from "./badge-DITUi_Qy.js";
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Link2 } from "lucide-react";
import { R as Route } from "./router-CIAbZC5-.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
import "clsx";
import "tailwind-merge";
function BlogPost() {
  const {
    slug
  } = Route.useParams();
  const post = allBlogs.find((p) => p._meta.path === slug);
  if (!post) {
    return /* @__PURE__ */ jsx("div", { className: "flex min-h-[60vh] items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-2xl font-bold text-ink", children: "Post not found" }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-jade-deep hover:underline", children: "Back to blog" })
    ] }) });
  }
  const html = marked(post.content);
  const headings = Array.from(post.content.matchAll(/^##\s+(.+)$/gm)).map((m) => m[1]);
  const related = allBlogs.filter((p) => p._meta.path !== post._meta.path && p.category === post.category).slice(0, 3);
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-jade-deep", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
      " Back to blog"
    ] }),
    /* @__PURE__ */ jsxs("article", { children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
        /* @__PURE__ */ jsx(Badge, { children: post.category }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl leading-tight text-ink", children: post.title }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-ink", children: post.author }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Calendar, { size: 14 }),
            new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Clock, { size: 14 }),
            " ",
            post.readingTime
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tag }, tag)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-4 flex aspect-[21/9] items-center justify-center rounded-2xl bg-gradient-to-br from-jade/15 to-gold/20 font-display text-2xl text-jade-deep", children: post.category }),
      headings.length > 0 && /* @__PURE__ */ jsx(Card, { className: "mb-10 border-border/70 bg-secondary/40", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-semibold text-ink", children: "Table of Contents" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-jade-deep", children: headings.map((h) => /* @__PURE__ */ jsxs("li", { children: [
          "· ",
          h
        ] }, h)) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-jade-deep", dangerouslySetInnerHTML: {
        __html: html
      } }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-3 border-t border-border/70 pt-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-ink", children: "Share:" }),
        /* @__PURE__ */ jsx("a", { href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`, target: "_blank", rel: "noopener noreferrer", className: "flex size-9 items-center justify-center rounded-full border border-border hover:border-jade hover:text-jade-deep", children: /* @__PURE__ */ jsx(Twitter, { size: 15 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/sharing/share-offsite/", target: "_blank", rel: "noopener noreferrer", className: "flex size-9 items-center justify-center rounded-full border border-border hover:border-jade hover:text-jade-deep", children: /* @__PURE__ */ jsx(Linkedin, { size: 15 }) }),
        /* @__PURE__ */ jsx("span", { className: "flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground", children: /* @__PURE__ */ jsx(Link2, { size: 15 }) })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-16 border-t border-border/70 pt-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-ink", children: "Related Articles" }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-6 sm:grid-cols-3", children: related.map((r) => /* @__PURE__ */ jsx(Link, { to: "/blog/$slug", params: {
        slug: r._meta.path
      }, children: /* @__PURE__ */ jsx(Card, { className: "h-full transition-shadow hover:shadow-md", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold leading-snug text-ink", children: r.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: r.readingTime })
      ] }) }) }, r._meta.path)) })
    ] })
  ] }) });
}
export {
  BlogPost as component
};
