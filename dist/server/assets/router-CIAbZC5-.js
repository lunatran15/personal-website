import { useRouterState, Link, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { X, Menu, Mail, Linkedin, Github } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/expertise", label: "Expertise" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/publications", label: "Publications" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-border/70 bg-ivory/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "flex size-9 items-center justify-center rounded-full border border-jade/40 bg-gradient-to-br from-jade to-jade-deep text-sm font-semibold text-primary-foreground", children: "PD" }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-lg tracking-wide text-ink", children: "Pallas Do" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: NAV_LINKS.map((link) => {
        const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            className: cn(
              "rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-jade-deep",
              active && "bg-secondary text-jade-deep"
            ),
            children: link.label
          },
          link.to
        );
      }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen((v) => !v),
          className: "inline-flex size-10 items-center justify-center rounded-full border border-border text-ink lg:hidden",
          "aria-label": "Toggle navigation",
          children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-1 border-t border-border/70 bg-ivory px-5 py-4 lg:hidden", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(
      Link,
      {
        to: link.to,
        onClick: () => setOpen(false),
        className: "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary",
        children: link.label
      },
      link.to
    )) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "ink-wash-bg mt-24 border-t border-border/70 bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 py-14 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-ink", children: "Phuong Thu Do" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Pallas Do" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground", children: "Building the future through technology, research, and innovation." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:pallas.do@example.com",
              "aria-label": "Email",
              className: "flex size-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-jade hover:text-jade-deep",
              children: /* @__PURE__ */ jsx(Mail, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/phuong-do-574a6813a/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LinkedIn",
              className: "flex size-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-jade hover:text-jade-deep",
              children: /* @__PURE__ */ jsx(Linkedin, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/lunatran15",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "GitHub",
              className: "flex size-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-jade hover:text-jade-deep",
              children: /* @__PURE__ */ jsx(Github, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/about", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/resume", children: "Resume" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/expertise", children: "Expertise" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/research", children: "Research" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink", children: "Knowledge Hub" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/projects", children: "Projects" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/blog", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/publications", children: "Publications" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { className: "hover:text-jade-deep", to: "/contact", children: "Contact" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Phuong Thu Do (Pallas Do). All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "italic", children: '"Building the future through technology, research, and innovation."' })
    ] })
  ] }) });
}
const Route$b = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Phuong Thu Do (Pallas Do) | Product Manager & Cybersecurity Researcher"
      },
      {
        name: "description",
        content: "Phuong Thu Do (Pallas Do) — Product Manager, Cybersecurity Researcher, Blockchain Security enthusiast, and AI & technology professional bridging business, engineering, and research across Vietnam, the United States, and China."
      },
      {
        property: "og:title",
        content: "Phuong Thu Do (Pallas Do) | Product Manager & Cybersecurity Researcher"
      },
      {
        property: "og:description",
        content: "A technology professional bridging business, engineering, cybersecurity research, and innovative product development."
      },
      {
        property: "og:type",
        content: "website"
      }
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "font-sans", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
        /* @__PURE__ */ jsx(Footer, {})
      ] }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$a = () => import("./resume-CFnf8lwo.js");
const Route$a = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./research-lEuFiNOv.js");
const Route$9 = createFileRoute("/research")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./publications-D5ybsfrG.js");
const Route$8 = createFileRoute("/publications")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./projects-DTlIcnVf.js");
const Route$7 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./expertise-CSykI9Do.js");
const Route$6 = createFileRoute("/expertise")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-rHz0xhav.js");
const Route$5 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./awards-NVQNs_Lt.js");
const Route$4 = createFileRoute("/awards")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-CETPvaJx.js");
const Route$3 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-C59J8rps.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DErns1lT.js");
const Route$1 = createFileRoute("/blog/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-Bwr2e7vR.js");
const Route = createFileRoute("/blog/$slug")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$a.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$b
});
const ResearchRoute = Route$9.update({
  id: "/research",
  path: "/research",
  getParentRoute: () => Route$b
});
const PublicationsRoute = Route$8.update({
  id: "/publications",
  path: "/publications",
  getParentRoute: () => Route$b
});
const ProjectsRoute = Route$7.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$b
});
const ExpertiseRoute = Route$6.update({
  id: "/expertise",
  path: "/expertise",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const AwardsRoute = Route$4.update({
  id: "/awards",
  path: "/awards",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const BlogIndexRoute = Route$1.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$b
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AwardsRoute,
  ContactRoute,
  ExpertiseRoute,
  ProjectsRoute,
  PublicationsRoute,
  ResearchRoute,
  ResumeRoute,
  BlogSlugRoute,
  BlogIndexRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  cn as c,
  router as r
};
