---
order: 2
eyebrow: "Case study 02 / AEEN implementation"
title: "Make the frame<br><em>feel like a frame.</em>"
lead: "A browser-based virtual try-on for the Octa Metal eyewear product. The hard part lives between the model, the camera and the material."
cardTitle: "From heavy model to browser try-on."
cardText: "A closer look at asset optimization, face tracking and the details that make eyewear feel believable."
seoTitle: "Virtual Try-On for Eyewear — Three.js + MediaPipe Case Study | Muhammad Farooqui"
seoDescription: "How an 86.9 MB 3D frame became a 2.36 MB browser try-on for AEEN: model optimization, separate lens materials, face tracking and Shopify integration."
sidebar:
  - { label: "Project", value: "AEEN / Octa Metal" }
  - { label: "Stack", value: "MediaPipe · Three.js · Shopify" }
  - { label: "Type", value: "Implementation deep dive" }
metrics:
  - { value: "86.9 MB", label: "Documented raw source model" }
  - { value: "2.36 MB", label: "Final model with separated lenses" }
  - { value: "49,999", label: "Triangles in the final model" }
---

## Context

The experience places a 3D frame over a camera view so a customer can explore how the style looks on their face. A detailed 3D source file is not automatically a useful browser asset.

## The challenge

Reduce the model weight while retaining the frame’s shape. Keep the lens tint separate from the metal. Position the frame against face landmarks and manage how the temples appear as the head moves.

## The work

1. **Optimize the asset.** The 86.9 MB source was reduced to an initial 2.1 MB version, then a 2.36 MB version with separated lens geometry.
2. **Separate materials.** The final model contains 41,765 frame triangles and 8,234 lens triangles. This makes lens tint and transparency independently adjustable.
3. **Connect tracking and rendering.** MediaPipe face landmarks feed a Three.js rendering workflow integrated into the Shopify product experience.
4. **Refine the interaction.** Calibration, temple occlusion and photo capture are part of the documented implementation.

## What changed

The final file is roughly 97% smaller than the raw source. That is an asset-size comparison, not a measured page-speed or conversion improvement. The product now has a purpose-built model and a documented camera-based interaction.

## Where testing continues

Calibration was completed in September 2026. Android and Instagram/Facebook in-app browser checks were still pending at that point, and the product-gallery experience remained a separate improvement area.
