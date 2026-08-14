import { jsx, jsxs } from "react/jsx-runtime";
import { a as allEducations } from "./allEducations-DRxDpqSd.js";
import { C as Card, c as CardContent, B as Badge } from "./badge-DITUi_Qy.js";
import { GraduationCap, FlaskConical } from "lucide-react";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const allResearch = [
  {
    "title": "Artificial Intelligence Security",
    "summary": "Research interest in adversarial robustness, model security, and the emerging security implications of deploying AI systems in production environments.",
    "order": 2,
    "tags": [
      "AI Security",
      "Adversarial ML",
      "Model Robustness"
    ],
    "content": "As AI systems move from research labs into production financial and consumer products, their security properties become a first-class concern. My interest in **AI security** focuses on adversarial robustness, data poisoning risks, and how security-by-design principles from traditional cybersecurity translate to machine learning pipelines.",
    "_meta": {
      "filePath": "ai-security.md",
      "fileName": "ai-security.md",
      "directory": ".",
      "extension": "md",
      "path": "ai-security"
    }
  },
  {
    "title": "Blockchain Security on RegTech",
    "summary": "Primary research direction examining how blockchain infrastructure can be secured and leveraged to strengthen regulatory technology, compliance automation, and financial oversight.",
    "order": 1,
    "tags": [
      "Blockchain Security",
      "RegTech",
      "Compliance",
      "Smart Contracts"
    ],
    "content": "The core of my graduate research at the University of Science and Technology of China investigates the intersection of **blockchain security** and **regulatory technology (RegTech)** — asking how distributed ledger systems can be hardened against adversarial threats while being leveraged to automate and strengthen compliance in financial systems.\n\nKey threads of this research include smart contract vulnerability analysis, consensus-layer attack surfaces, and how on-chain transparency can be paired with cryptographic privacy techniques to satisfy regulatory reporting requirements without exposing sensitive data.",
    "_meta": {
      "filePath": "blockchain-security-regtech.md",
      "fileName": "blockchain-security-regtech.md",
      "directory": ".",
      "extension": "md",
      "path": "blockchain-security-regtech"
    }
  },
  {
    "title": "Applied Cryptography",
    "summary": "Graduate coursework and research interest in cryptographic protocols underpinning secure, privacy-preserving systems, including their application to blockchain and RegTech.",
    "order": 4,
    "tags": [
      "Cryptography",
      "Privacy",
      "Protocol Security"
    ],
    "content": "**Cryptography** forms the technical bedrock of my cybersecurity research — from the primitives that secure blockchain consensus to the privacy-preserving protocols that let RegTech systems verify compliance without revealing underlying sensitive data.",
    "_meta": {
      "filePath": "cryptography.md",
      "fileName": "cryptography.md",
      "directory": ".",
      "extension": "md",
      "path": "cryptography"
    }
  },
  {
    "title": "Information Hiding",
    "summary": "Study of steganography, steganalysis, and information-hiding techniques and their implications for digital forensics, privacy, and security research.",
    "order": 5,
    "tags": [
      "Information Hiding",
      "Steganography",
      "Digital Forensics"
    ],
    "content": "Research into **information hiding** examines how data can be concealed within digital media, and — just as importantly — how such techniques can be detected and countered. This work connects to broader questions of digital forensics, privacy engineering, and secure communications.",
    "_meta": {
      "filePath": "information-hiding.md",
      "fileName": "information-hiding.md",
      "directory": ".",
      "extension": "md",
      "path": "information-hiding"
    }
  },
  {
    "title": "Natural Language Processing",
    "summary": "Applied NLP research interests spanning sentiment analysis, text classification, and language-driven product features, connecting to prior social listening and product work.",
    "order": 3,
    "tags": [
      "NLP",
      "Text Classification",
      "Applied AI"
    ],
    "content": "My interest in **Natural Language Processing** grew out of applied product work — including a social listening application built with the Facebook Developer Circles Hanoi community — and extends into graduate coursework on language models, classification techniques, and their intersection with security and privacy.",
    "_meta": {
      "filePath": "nlp.md",
      "fileName": "nlp.md",
      "directory": ".",
      "extension": "md",
      "path": "nlp"
    }
  }
];
function Research() {
  const research = [...allResearch].sort((a, b) => a.order - b.order);
  const gradSchool = allEducations.find((e) => e.school.includes("Science and Technology of China"));
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Research & Innovation" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Academic Research Profile" }),
    /* @__PURE__ */ jsx(Card, { className: "mt-8 border-jade/30 bg-gradient-to-br from-secondary/60 to-card", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-start gap-4 pt-2", children: [
      /* @__PURE__ */ jsx(GraduationCap, { className: "mt-1 shrink-0 text-jade-deep", size: 26 }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-ink", children: "Master of Cybersecurity" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-jade-deep", children: "University of Science and Technology of China" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: gradSchool?.summary }),
        /* @__PURE__ */ jsx(Badge, { className: "mt-4", variant: "secondary", children: "Research Direction: Blockchain Security with Machine Learning" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("h2", { className: "mt-14 flex items-center gap-2 font-display text-2xl text-ink", children: [
      /* @__PURE__ */ jsx(FlaskConical, { className: "text-jade-deep", size: 22 }),
      " Relevant Knowledge Areas"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: research.map((r) => /* @__PURE__ */ jsx(Card, { className: "border-border/70", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-2", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-ink", children: r.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: r.summary }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: r.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tag }, tag)) })
    ] }) }, r.title)) })
  ] }) });
}
export {
  Research as component
};
