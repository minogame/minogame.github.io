---
layout: post
title: 基于 CCCP 时代技术的大语言模型研究（awesome-cccp-llm）
date: 2025-12-14 00:35
description: 蚂蚁海星 · 2025年12月14日 00:35・日本
tags: misc
disqus_comments: true
categories: Chinese
---

本文档基于 20 世纪中叶发展的经典数学与工程理论，对LLM的关键研究文献进行了系统梳理。这些理论为理解 LLM 的内部机制、可解释性、鲁棒性及可控性提供了强大的分析框架，也为找不到研究方向的博士生提供了一条科研考古的可循路径。

## 随机过程与统计物理 (Stochastic Processes & Statistical Physics)

本节研究将 LLM 视为一个高维动力系统，利用马尔可夫链、随机微分方程（SDE）和随机矩阵理论来分析其动力学演化及参数结构。

### Large Language Models as Markov Chains https://arxiv.org/pdf/2410.02724v2

该论文提出了一种创新的分析视角，将大语言模型的推理机制（而非语言本身）抽象为词汇空间上的马尔可夫链。通过构建该模型，研究人员能够应用马尔可夫链理论分析系统的平稳分布，从而在理论层面理解 LLM 的长期生成行为。

### A Stochastic Dynamical Theory of LLM Self-Adversariality: Modeling Severity Drift as a Critical Process https://arxiv.org/pdf/2501.16783

本文聚焦于 LLM 的安全问题，特别是“思维链”（Chain-of-Thought, CoT）中潜在偏见的自我放大现象。其核心贡献是将这一动态过程建模为连续时间的随机微分方程（SDE）。基于该模型，研究利用福克-普朗克（Fokker-Planck）方法分析了系统的相变特征。这一分析视角为 LLM 安全提供了一种新的诊断标准：确保系统保持在“亚临界”（Subcritical）区域，以防止偏见的失控放大。

### Small Singular Values Matter: A Random Matrix Analysis of Transformer Models https://arxiv.org/pdf/2410.17770

本文利用随机矩阵理论（RMT）分析高维 LLM 权重矩阵的结构。其核心方法是将 RMT（具体为 Marchenko-Pastur 定律）作为信息的“零假设”。通过观察模型实际权重矩阵的奇异值分布偏离 RMT 预测的程度，研究确定了信息的存储位置。一个关键发现是“小奇异值至关重要”：信息不仅存储在最大的奇异值中，也存储在偏离 RMT 预测的最小奇异值中，这对模型剪枝和理解具有重要意义。

### Black-box Detection of LLM-generated Text Using Generalized Jensen-Shannon Divergence https://arxiv.org/abs/2510.07500v1

本文提出了一种名为 SurpMark 的 AI 生成文本检测方法。其核心思想是将生成过程中 token “惊异值”（surprisal）的动态变化建模为马尔可夫链，并通过计算该链与人类写作参考链之间的广义 Jensen-Shannon 散度（GJS score）来实现高效检测。

## 定量表征与信息论 (Quantitative Representation & Information Theory)

本节研究利用信息论的两种范式（柯尔莫哥洛夫的算法视角和香农的概率视角）作为“探针”，来度量和归因 LLM 内部的信息流。

### Position: Understanding LLMs Requires More Than Statistical Generalization https://arxiv.org/abs/2405.01964

本文使用柯尔莫哥洛夫复杂度（Kolmogorov Complexity, KC）作为深刻的理论分析工具。其核心贡献在于论证了深度学习模型（包括 LLM）能够泛化的根本原因之一在于其固有的“简单性偏差”（Simplicity Bias），即模型在训练过程中倾向于学习更简单的函数（即具有较低 KC 的函数）。

### The KoLMogorov Test: Compression by Code Generation https://arxiv.org/abs/2503.13992v1

本文展示了一种巧妙的“元分析”方法。它反转了分析关系，利用代码生成 LLM（CodeLMs）作为工具来估计任意给定序列  的柯尔莫哥洛夫复杂度（KC）上界。其实现方式是提示 LLM 生成输出  的最短程序 ，其中  的长度即作为 KC 的估计值。

### Entropy-Lens: The Information Signature of Transformer Computations https://arxiv.org/abs/2502.16570v1
文章摘要：本文提出了一种称为“熵流”（Entropy Flow）的分析技术。其核心贡献在于通过追踪 Transformer 内部（逐层）token 表征的香农熵演变，可视化并量化信息在何处被“处理”、“压缩”或“组合”，从而打开了模型内部信息处理的“黑箱”。

## 控制论与最优控制 (Cybernetics & Optimal Control)

本节研究将 LLM 视为一个待“操纵”的系统，应用控制论（Wiener）的概念框架和最优控制（Pontryagin）的数学工具，以实现模型的“对齐”和“可控性”。

### Test-Time Alignment of LLMs via Sampling-Based Optimal Control in pre-logit space https://arxiv.org/abs/2510.26219v1

本文提出了一种名为 AISP 的免训练对齐方法。其核心思想是在 LLM 的 pre-logits 空间施加扰动  作为“控制输入”，并利用最优控制技术实时引导 LLM 生成高奖励的输出，从而在推理阶段实现可控性。

### Data Selection via Optimal Control for Language Models https://arxiv.org/abs/2410.07064

本文将最优控制理论的应用范围从“测试时”扩展到了“训练时”。其核心贡献是严格地将预训练数据选择过程形式化为一个最优控制问题，目标是计算出一种能最大化模型最终性能的最优数据选择策略。

### Prompt Engineering Through the Lens of Optimal Control https://arxiv.org/abs/2310.14201

本文应用了最优控制框架。其核心贡献是将提示工程（Prompt Engineering）中的提示优化过程形式化为最优控制问题，寻求最优的“控制输入”（即提示词），以引导模型达到预期的输出状态。

### What’s the Magic Word? A Control Theory of LLM Prompting https://arxiv.org/abs/2310.04444v4

本文批判性地分析了直接将经典控制理论（CCT）应用于 LLM 的局限性。其核心贡献指出了两者之间存在的根本性“阻抗失配”（impedance mismatch）。该分析视角指出，LLM 的动力学是离散的、高维的，且具有 CCT 无法处理的“移位与增长”（Shift-and-Grow，即 KV 缓存的动态增长）特性。

### Unveiling LLM Mechanisms Through Neural ODEs and Control Theory https://arxiv.org/abs/2406.16985v1

本文的核心贡献是将 Transformer 的离散动态过程重新建模为连续时间的神经常微分方程（Neural ODEs），从而为应用连续域控制理论来分析和确保 LLM 训练动力学的稳定性与可靠性架起了桥梁。

## 信号处理与频域分析 (Signal Processing & Frequency Domain Analysis)

本节研究将语言和 Transformer 组件（如位置编码）视为“信号”，利用傅里叶分析和小波变换等工具对其进行解构，并指导架构改进。

### Fourier Position Embedding: Enhancing Attention’s Periodic Extension for Length Generalization https://arxiv.org/abs/2412.17739v1

本文将 Transformer 位置编码视为一个信号处理问题。其核心贡献是从频域深度分析了 RoPE（旋转位置编码）的内部工作机制，在数学上将其与非均匀离散傅里叶变换（NU-DFT）联系起来。

### Wavelet-based Positional Representation for Long Context https://arxiv.org/abs/2502.02004

本文提供了一个从理论分析到架构改进的完整闭环。该分析视角指出，虽然 RoPE 类似于小波变换，但其关键缺陷（外推性能差）在于仅使用了固定的尺度参数。基于这一深刻诊断，改进视角提出了一种利用全小波变换（能够捕获多尺度信息）的新型位置编码方法，并通过实证表明该新方法显著提高了模型在长序列上的外推能力。