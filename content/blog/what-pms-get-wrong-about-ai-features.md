---
title: "What Product Managers Get Wrong About AI Features"
date: "2026-04-10"
summary: "AI is not a feature you bolt onto a roadmap. Lessons from shipping ML-driven product features on managing uncertainty, evaluation, and user trust."
category: "AI & Machine Learning"
tags: ["AI Product Management", "Machine Learning", "Product Strategy"]
author: "Phuong Thu Do"
readingTime: "6 min read"
featured: true
---

## AI Features Fail Product Requirements, Not Just Models

Most "AI didn't work" postmortems I've seen are actually product management failures. The model performed within its documented accuracy range — the product simply never defined what "good enough" meant for the user experience it was embedded in.

## Three Questions Before Writing a Single User Story

1. **What does the model get wrong, and who is harmed when it does?** Building a low-carbon optimization feature taught me that a "close enough" recommendation is fine for suggesting a bike route, and not fine for a compliance decision.
2. **How is uncertainty communicated to the user?** Confidence scores mean nothing to a user unless the UI translates them into a decision they can act on.
3. **What is the fallback when the model is wrong?** Every AI feature needs a deterministic escape hatch.

## A Simple Evaluation Framing

```python
def is_recommendation_actionable(prediction, confidence_threshold=0.75):
    return prediction.confidence >= confidence_threshold and prediction.has_fallback
```

Trivial code, but it forces the product conversation that usually gets skipped: what happens below the threshold?

## Bringing Security Thinking to AI Product Work

My cybersecurity research background changes how I scope AI features — I default to asking "how could this be gamed or poisoned" alongside "does this delight the user." Both questions belong in the same PRD.
