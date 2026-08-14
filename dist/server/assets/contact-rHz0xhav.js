import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { B as Button } from "./button-CYR7_VuG.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./router-CIAbZC5-.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "ink-wash-bg", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-gold", children: "Get in Touch" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl text-ink sm:text-5xl", children: "Contact" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-muted-foreground", children: "Have a question about product management, cybersecurity research, or a potential collaboration? Reach out — I'd love to hear from you." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "mailto:pallas.do@example.com", className: "flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-jade", children: [
          /* @__PURE__ */ jsx(Mail, { className: "text-jade-deep", size: 20 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink", children: "Email" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "pallas.do@example.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-jade", children: [
          /* @__PURE__ */ jsx(Linkedin, { className: "text-jade-deep", size: 20 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink", children: "LinkedIn" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Connect professionally" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://github.com/", target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-jade", children: [
          /* @__PURE__ */ jsx(Github, { className: "text-jade-deep", size: 20 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-ink", children: "GitHub" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Explore technical work" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: submitted ? /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center rounded-2xl border border-jade/30 bg-secondary/40 p-10 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 flex size-14 items-center justify-center rounded-full bg-jade/10", children: /* @__PURE__ */ jsx(Mail, { className: "text-jade-deep", size: 26 }) }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl text-ink", children: "Message Sent!" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Thanks for reaching out. I'll get back to you as soon as possible." }),
        /* @__PURE__ */ jsx(Button, { className: "mt-6", variant: "outline", onClick: () => setSubmitted(false), children: "Send Another Message" })
      ] }) : /* @__PURE__ */ jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", onSubmit: (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        fetch("/contact.html", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(formData).toString()
        }).then(() => setSubmitted(true));
      }, className: "space-y-5 rounded-2xl border border-border p-6", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
        /* @__PURE__ */ jsx("p", { hidden: true, children: /* @__PURE__ */ jsxs("label", { children: [
          "Don't fill this out: ",
          /* @__PURE__ */ jsx("input", { name: "bot-field" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "mb-1 block text-sm font-medium text-ink", children: "Name" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "name", name: "name", required: true, className: "w-full rounded-lg border border-border px-4 py-2 outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/30", placeholder: "Your name" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "mb-1 block text-sm font-medium text-ink", children: "Email" }),
          /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", required: true, className: "w-full rounded-lg border border-border px-4 py-2 outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/30", placeholder: "your@email.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "mb-1 block text-sm font-medium text-ink", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { id: "message", name: "message", required: true, rows: 6, className: "w-full resize-none rounded-lg border border-border px-4 py-2 outline-none transition-colors focus:border-jade focus:ring-2 focus:ring-jade/30", placeholder: "Your message..." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", children: [
          /* @__PURE__ */ jsx(Send, { size: 16 }),
          " Send Message"
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-16 text-center font-display text-xl italic text-jade-deep", children: '"Building the future through technology, research, and innovation."' })
  ] }) });
}
export {
  Contact as component
};
