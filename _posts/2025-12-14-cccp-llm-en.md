---
layout: post
title: "Research on Large Language Models Based on CCCP-Era Technologies (awesome-cccp-llm)"
date: 2025-12-14 00:35
description: By Mai-haishin · December 14, 2025 · Japan
tags: misc
disqus_comments: true
categories: English
---

This document provides a systematic review of key research literature on Large Language Models (LLMs), grounded in classical mathematical and engineering theories developed during the mid-20th century. These theories offer a robust analytical framework for understanding the internal mechanisms, interpretability, robustness, and controllability of LLMs. They also provide a viable path for "academic archaeology" for PhD students searching for a research direction.

---

## Stochastic Processes & Statistical Physics

This section treats LLMs as high-dimensional dynamical systems, utilizing Markov chains, Stochastic Differential Equations (SDE), and Random Matrix Theory to analyze their dynamical evolution and parameter structures.

### Large Language Models as Markov Chains 

[https://arxiv.org/pdf/2410.02724v2](https://arxiv.org/pdf/2410.02724v2)

This paper proposes an innovative analytical perspective by abstracting the inference mechanism of LLMs (rather than the language itself) as a Markov chain over the vocabulary space. By constructing this model, researchers can apply Markov chain theory to analyze the system's stationary distribution, thereby gaining a theoretical understanding of the long-term generation behavior of LLMs.

### A Stochastic Dynamical Theory of LLM Self-Adversariality: Modeling Severity Drift as a Critical Process 

[https://arxiv.org/pdf/2501.16783](https://arxiv.org/pdf/2501.16783)

This paper focuses on LLM safety, specifically the self-amplification of potential biases within "Chain-of-Thought" (CoT) processes. Its core contribution is modeling this dynamic process as a continuous-time Stochastic Differential Equation (SDE). Based on this model, the study utilizes the **Fokker-Planck** method to analyze the system's phase transition characteristics. This perspective offers a new diagnostic criterion for LLM safety: ensuring the system remains in a "subcritical" region to prevent the runaway amplification of bias.

### Small Singular Values Matter: A Random Matrix Analysis of Transformer Models 

[https://arxiv.org/pdf/2410.17770](https://arxiv.org/pdf/2410.17770)

This study employs Random Matrix Theory (RMT) to analyze the structure of high-dimensional LLM weight matrices. The core methodology involves using RMT (specifically the **Marchenko-Pastur Law**) as a "null hypothesis" for information. By observing the degree to which the singular value distribution of actual weight matrices deviates from RMT predictions, the researchers identify where information is stored. A key finding is that "small singular values matter": information is stored not only in the largest singular values but also in the smallest ones that deviate from RMT predictions, which has significant implications for model pruning and understanding.

### Black-box Detection of LLM-generated Text Using Generalized Jensen-Shannon Divergence 

[https://arxiv.org/abs/2510.07500v1](https://arxiv.org/abs/2510.07500v1)

This paper introduces "SurpMark," a method for detecting AI-generated text. The central idea is to model the dynamic changes of token **"surprisal"** during the generation process as a Markov chain. Efficient detection is achieved by calculating the Generalized Jensen-Shannon Divergence (GJS score) between this chain and a reference chain of human writing.

---

## Quantitative Representation & Information Theory

This section utilizes two paradigms of information theory—**Kolmogorov’s** algorithmic perspective and **Shannon’s** probabilistic perspective—as "probes" to measure and attribute information flow within LLMs.

### Position: Understanding LLMs Requires More Than Statistical Generalization 

[https://arxiv.org/abs/2405.01964](https://arxiv.org/abs/2405.01964)

This paper uses **Kolmogorov Complexity (KC)** as a profound theoretical tool. Its core contribution is arguing that one of the fundamental reasons deep learning models (including LLMs) can generalize lies in their inherent "Simplicity Bias"—the tendency of models to learn simpler functions (i.e., functions with lower KC) during the training process.

### The KoLMogorov Test: Compression by Code Generation 

[https://arxiv.org/abs/2503.13992v1](https://arxiv.org/abs/2503.13992v1)

This paper demonstrates a clever "meta-analysis" approach. It inverts the analytical relationship by using code-generating LLMs (CodeLMs) as tools to estimate the upper bound of the Kolmogorov Complexity for any given sequence $x$. This is implemented by prompting the LLM to generate the shortest program $p$ that outputs $x$, where the length of $p$ serves as the estimate for KC.

### Entropy-Lens: The Information Signature of Transformer Computations 

[https://arxiv.org/abs/2502.16570v1](https://arxiv.org/abs/2502.16570v1)

This paper proposes an analytical technique called **"Entropy Flow."** Its core contribution lies in tracing the evolution of Shannon entropy in token representations layer-by-layer within the Transformer. By visualizing and quantifying where information is "processed," "compressed," or "combined," it opens the "black box" of internal information processing.

---

## Cybernetics & Optimal Control

This section treats the LLM as a system to be "manipulated," applying the conceptual frameworks of Cybernetics (**Wiener**) and the mathematical tools of Optimal Control (**Pontryagin**) to achieve model alignment and controllability.

### Test-Time Alignment of LLMs via Sampling-Based Optimal Control in pre-logit space 

[https://arxiv.org/abs/2510.26219v1](https://arxiv.org/abs/2510.26219v1)

This paper presents AISP, a training-free alignment method. The core idea is to apply a perturbation $u$ as a "control input" in the LLM's pre-logit space and use optimal control techniques to guide the LLM toward generating high-reward outputs in real-time, achieving controllability during the inference phase.

### Data Selection via Optimal Control for Language Models 

[https://arxiv.org/abs/2410.07064](https://arxiv.org/abs/2410.07064)

This study extends the application of optimal control theory from "test-time" to "training-time." Its core contribution is the rigorous formalization of the pre-training data selection process as an optimal control problem, with the goal of calculating an optimal data selection strategy that maximizes the model's final performance.

### Prompt Engineering Through the Lens of Optimal Control 

[https://arxiv.org/abs/2310.14201](https://arxiv.org/abs/2310.14201)

This paper applies the optimal control framework to prompt engineering. Its core contribution is formalizing the prompt optimization process as an optimal control problem, seeking the optimal "control input" (i.e., the prompt) to steer the model toward a desired output state.

### What’s the Magic Word? A Control Theory of LLM Prompting 

[https://arxiv.org/abs/2310.04444v4](https://arxiv.org/abs/2310.04444v4)

This paper critically analyzes the limitations of directly applying Classical Control Theory (CCT) to LLMs. Its core contribution points out a fundamental **"impedance mismatch"** between the two. The analysis notes that LLM dynamics are discrete, high-dimensional, and possess a "Shift-and-Grow" characteristic (the dynamic growth of the KV cache) that CCT is unequipped to handle.

### Unveiling LLM Mechanisms Through Neural ODEs and Control Theory 

[https://arxiv.org/abs/2406.16985v1](https://arxiv.org/abs/2406.16985v1)

The core contribution of this paper is the re-modeling of the Transformer's discrete dynamical process as continuous-time **Neural Ordinary Differential Equations (Neural ODEs)**. This builds a bridge for applying continuous-domain control theory to analyze and ensure the stability and reliability of LLM training dynamics.

---

## Signal Processing & Frequency Domain Analysis

This section treats language and Transformer components (such as positional encodings) as "signals," using tools like **Fourier analysis** and **Wavelet transforms** to deconstruct them and guide architectural improvements.

### Fourier Position Embedding: Enhancing Attention’s Periodic Extension for Length Generalization 

[https://arxiv.org/abs/2412.17739v1](https://arxiv.org/abs/2412.17739v1)

This paper treats Transformer positional encoding as a signal processing problem. Its core contribution is a deep frequency-domain analysis of the internal working mechanism of **RoPE** (Rotary Positional Encoding), mathematically linking it to the Non-Uniform Discrete Fourier Transform (NU-DFT).

### Wavelet-based Positional Representation for Long Context 

[https://arxiv.org/abs/2502.02004](https://arxiv.org/abs/2502.02004)

This paper provides a complete closed loop from theoretical analysis to architectural improvement. The analysis points out that while RoPE is similar to a wavelet transform, its key flaw (poor extrapolation performance) lies in using only fixed scale parameters. Based on this diagnosis, the study proposes a new positional encoding method using the full wavelet transform—capable of capturing multi-scale information—and empirically demonstrates that this method significantly improves the model's extrapolation capabilities on long sequences.