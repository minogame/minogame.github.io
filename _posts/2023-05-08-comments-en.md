---
layout: post
title: So just how bad is this "Interim Measures for the Management of Generative Artificial Intelligence Services (Draft for Comment)"? (DeepSeek Translated Version)
date: 2023-05-08 20:05:00
description: Mai-Haishin · May 8, 2023, 20:05 · Guangdong
tags: misc
disqus_comments: true
categories: English
---

Of course, the hype around this has long died down. Even on that forum where users supposedly earn millions annually, discussions vanished after April 11. I’m only writing this now purely due to muscle memory as a Ph.D. student racing against deadlines—hoping the folks in that office don’t think I’m adding to their workload.

Criticism of this draft measure is plentiful, whether from a purely technical or legislative perspective. But today, I’m stepping up to call it terrible from a metaphysical angle, questioning the essential meaning of the "providers" it seeks to regulate. In other words, I argue that the draft fails to clearly define who these "providers" are before swinging the regulatory bat, embodying that uniquely Chinese flaw of prioritizing form over substance. Hence, I made this diagram to dissect what a "provider" actually is.

{% include figure.liquid loading="eager" path="assets/img/20230508/640.webp" class="img-fluid rounded z-depth-1" %}

Setting aside deeper universal infrastructure and focusing solely on the chain specialized for "content-generation products," providers can roughly be divided into three modules:

The module supplying data for developing generative AI

The module using this data to develop generative AI

The module deploying the finished product to directly serve end-users

These modules may overlap but are not subordinate. A module may involve multiple entities, and a single entity may operate across multiple modules. For example, a tech company might collect its own data, develop a model, and offer it via API to multiple firms or agencies for repackaging. In such cases, regulating this entire chain under the vague term "providers" (as in Article 5) creates ambiguity, leading to unclear accountability. Below, I analyze the draft in greater detail based on the relationships between these four modules:

Data = Algorithm: The relationship here is usually clear-cut and technical—data trains algorithms, and algorithms provide feedback on data. Articles 7 and 8 of the draft focus on this, mandating the legality of data sources while offering "suggestions" (for lack of a better word) on data quality.

First, data quality doesn’t need administrative optimization. Whether independent data vendors or algorithm developers handling data, all have inherent incentives to improve accuracy and authenticity. Article 8, in particular, should focus on foundational legality or value alignment, not factual correctness.

Second, legal accountability should follow the actual chain of data acquisition and usage, not just blanket "providers." For illegal sources or those involving personal data, responsibility should fall on the specific culpable party. For instance, if an independent data vendor supplies content endangering national security to multiple algorithm developers, only the vendor should be held liable—not every developer using that data.

Algorithm = Frontend: While major tech companies often handle the entire chain in-house, real-world scenarios require distinguishing whether a "provider" can independently develop algorithms. The draft’s definitions here (Articles 4, 5, 15, 16) are extremely vague.

Article 4 is intriguing, especially its second paragraph, which attempts to define "providers" by behavior. Phrases like "algorithm design" suggest it targets algorithm providers, treating data and frontend as upstream/downstream actors. Paragraph 4 also pins primary responsibility on algorithm providers, exempting standalone frontend services. This vagueness dilutes enforceability and overburdens algorithm providers.

Article 5 inherits this broad "provider" definition and acknowledges cases where algorithm providers and frontend services are separate (e.g., APIs). Yet it still leans toward algorithm providers as primary accountability holders, leaving frontend responsibilities unclear.

Articles 15 and 16 establish a feedback loop from frontend to algorithm providers. Frontend services relying on third-party algorithms can’t possibly meet compliance demands within three months. Responsibilities should be split: frontend providers handle content filtering, while algorithm improvements fall under separate rules.

Frontend = User: This relationship aligns best with the draft’s tone. In short, frontend providers are responsible for their content and user interactions, while users need channels to provide feedback. Key articles here are 9–14 and 17–19.

These clauses shouldn’t target algorithm providers—especially Articles 9, 10, and 18, which should be narrowed to frontend services.

For user feedback (Articles 11–13, 17), accountability should extend to both algorithm and frontend providers.

User = Data: The link here is more distant, but data providers might exploit gray areas to harvest user data or incentivize feedback. Relevant articles include 7, 11, and 17.

Article 7 mandates personal data protection but lacks clear definitions. Article 11 offers partial clarity but remains insufficient.

Article 17 requires "providers" to disclose information upon request, but such requests should be explicitly defined in the measures.

Final Suggestions to fix the "provider" definition:

Clarify responsibilities per module, aligning penalties with specific targets. This would unshackle algorithm providers, protecting China’s already lagging generative AI sector.

Revise Article 6 to explicitly categorize "providers" (e.g., data/algorithm/frontend) and manage them separately during algorithm filings.

I know you won’t read this, so feel free to debate me directly—I’ll explain in plain terms.