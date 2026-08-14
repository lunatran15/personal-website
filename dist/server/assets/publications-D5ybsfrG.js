import { jsx, jsxs } from "react/jsx-runtime";
import { C as Card, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { FileText, ExternalLink } from "lucide-react";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const allPublications = [
  {
    "title": "Bridging Product Management and Cybersecurity Research: A Practitioner's Perspective",
    "type": "Technical Article",
    "date": "2026-03-01",
    "status": "Published on Personal Blog",
    "researchArea": "Product Management / Cybersecurity",
    "abstract": "An essay examining how product management practice and cybersecurity research methodology reinforce one another — arguing that security-minded product managers make better risk-aware decisions, and that researchers with product instincts build more usable security tools.",
    "link": "/blog/bridging-product-and-security-research",
    "content": "Published as a long-form article on the personal knowledge-sharing blog, synthesizing lessons from both an industry product career and graduate cybersecurity research.",
    "_meta": {
      "filePath": "bridging-pm-security-article.md",
      "fileName": "bridging-pm-security-article.md",
      "directory": ".",
      "extension": "md",
      "path": "bridging-pm-security-article"
    }
  },
  {
    "title": "Product Strategy for ML-Driven Sustainability Products: Lessons from the Alipay Mini Program Fintechathon",
    "type": "Conference Presentation",
    "date": "2025-11-01",
    "status": "Presented",
    "researchArea": "Product Management / Applied ML",
    "abstract": "A presentation of product strategy lessons drawn from building a Machine Learning-based low-carbon optimization Alipay Mini Program during the Shenzhen International Fintech Competition, focusing on rapid MVP scoping, cross-functional coordination, and designing ML-driven features for mainstream consumer adoption.",
    "link": "",
    "content": "Presented to peers and mentors within the Shenzhen fintech innovation community following a Top 10 finish in the Product Manager track of the Shenzhen International Fintech Competition.",
    "_meta": {
      "filePath": "fintechathon-presentation.md",
      "fileName": "fintechathon-presentation.md",
      "directory": ".",
      "extension": "md",
      "path": "fintechathon-presentation"
    }
  },
  {
    "title": "Blockchain Security on RegTech: Toward Verifiable Compliance Without Data Exposure",
    "type": "Research Thesis",
    "date": "2026-06-01",
    "status": "In Progress",
    "researchArea": "Blockchain Security / RegTech",
    "abstract": "This research explores how blockchain-based architectures can support regulatory technology (RegTech) use cases — such as automated compliance reporting and financial audit trails — while remaining resilient to smart contract vulnerabilities and consensus-layer attacks. The work proposes a framework for balancing on-chain transparency with cryptographic privacy guarantees required by financial regulators.",
    "link": "",
    "content": "Graduate thesis research conducted at the University of Science and Technology of China, forming the core of the Master of Cybersecurity program. The thesis examines threat models specific to RegTech-oriented blockchain deployments and proposes mitigations informed by applied cryptography and smart contract security analysis.",
    "_meta": {
      "filePath": "thesis-blockchain-regtech.md",
      "fileName": "thesis-blockchain-regtech.md",
      "directory": ".",
      "extension": "md",
      "path": "thesis-blockchain-regtech"
    }
  }
];
function Publications() {
  const publications = [...allPublications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Knowledge Sharing" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Publications & Speaking" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Research papers, technical articles, conference submissions, and presentations across cybersecurity, blockchain, and product management." }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-6", children: publications.map((pub) => /* @__PURE__ */ jsx(Card, { className: "border-border/70", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsx(Badge, { children: pub.type }),
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: pub.status }),
        /* @__PURE__ */ jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: new Date(pub.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long"
        }) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 flex items-start gap-2 font-display text-xl text-ink", children: [
        /* @__PURE__ */ jsx(FileText, { className: "mt-1 shrink-0 text-jade-deep", size: 18 }),
        pub.title
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-medium text-jade-deep", children: pub.researchArea }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: pub.abstract }),
      pub.link && /* @__PURE__ */ jsxs("a", { href: pub.link, className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-jade-deep hover:underline", children: [
        "View ",
        /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
      ] })
    ] }) }, pub.title)) })
  ] }) });
}
export {
  Publications as component
};
