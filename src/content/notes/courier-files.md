---
order: 2
pillar: "Courier files"
title: "An order is not a delivery."
lead: "Dispatch, delivery and remittance are different events. Your reporting should treat them that way."
seoTitle: "COD Courier Reconciliation: An Order Is Not a Delivery | Muhammad Farooqui"
seoDescription: "How to track COD orders from dispatch to remittance: common keys, exception queues, cohort comparisons and closing the return loop."
---

## Follow one order all the way through

Order placed → confirmed → dispatched → delivered or returned → remittance reconciled. Each event answers a different question. A sales total cannot tell you whether the courier has paid the business.

## Give every record a common key

Connect the store order ID with the courier tracking number. Keep the delivery status, COD amount, fees, remittance reference and settlement date together so mismatches can be investigated.

## Use an exception queue

Separate unresolved deliveries, returned parcels, missing remittances and fee differences. Assign each exception an owner and a next action. Review the queue until the issue is closed, rather than repeatedly exporting the same report.

## Compare the same cohort

A dispatch cohort needs time to reach a final outcome. Comparing yesterday’s new dispatches with older completed deliveries can create misleading rates. State the time window and whether pending orders are included.

## Close the loop

Use recurring return reasons to review confirmation calls, address collection, product expectations and courier choice. Document what the evidence supports before changing the process.
