---
title: 'Claudeの「価値観」は使う言語とモデルで変わる ― Anthropicが30万件超の会話を分析、Hindiは温かくEnglishは厳格に'
description: 'Anthropicは2026年7月14日までに、Claudeが表出する価値観がモデルと会話言語によって系統的に異なることを示す研究結果を公開しました。Sonnet 4.6・Opus 4.6・Opus 4.7の3モデル、20言語、約31万件のClaude.ai会話を分析し、4つの軸で傾向の違いを定量化しています。あわせて、Anthropicは米国のK-12教員向けにClaude Proを無償提供する「Claude for Teachers」も発表しました。'
pubDate: 2026-07-14
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは、Claudeが応答の中で表出する「価値観」がモデルおよび会話に使われた言語によって系統的に変化することを示す研究結果を公開しました。研究チームはClaude.ai上の主観的なタスクを含む会話309,815件を、Sonnet 4.6・Opus 4.6・Opus 4.7の3モデルと利用頻度上位20言語の組み合わせ（1組あたり約5,000件）でサンプリングし分析しています。先行研究で識別済みの3,307種類の価値観を339の上位カテゴリに手動でクラスタリングした上で、最終的に「Warmth（温かさ）vs Rigor（厳格さ）」「Deference（追従）vs Caution（慎重さ）」「Depth（深さ）vs Brevity（簡潔さ）」「Candor（率直さ）vs Execution（実行重視）」という4つの軸に集約しました。

言語による差では、HindiとArabicでの応答が最も「Warmth」寄りとなり、丁寧な言い回しやユーモア、ユーザーのアイデアや取り組みへの肯定的な言及が目立つ一方、EnglishとRussianは「Rigor」寄りで、前提を問い直したり、詳細を訂正したり、根拠の提示を求めたりする傾向が強く出ました。4軸のうちWarmth/Rigor軸が最も変動幅が大きく、次いでCandor/Execution軸が大きかったと報告されています。ほかにも、Arabicで最も「Deference」が強く、Englishで最も「Caution」が強いこと、Dutchでは「Candor」寄り、Indonesianでは「Execution」寄りになることなどが確認されました。モデル間では、Opus 4.7がユーザーの成果物に対して率直な批評を行ったり、求められていないリスク警告を行ったりする傾向が強い一方、Sonnet 4.6は励ましやユーモアを交えた応答に傾く傾向があるとされています。

Anthropicはこうした差異の要因として、モデルの学習データにおける言語ごとのデータ量・構成の偏り、特定のテキスト種別の過剰representation、言語ごとの会話規範の違いなどを挙げていますが、確定的な原因特定には至っていないとしています。技術者にとっての含意は明確で、多言語対応のプロダクトやエージェントを設計する際には、同一プロンプトであっても応答言語によってトーンやリスク許容度が変わりうることを前提に、評価・チューニングを言語横断で行う必要があるという点です。単一言語（多くの場合English）での評価結果を他言語にそのまま適用するのはリスクを伴うことを示す事例といえます。

同時期の動きとして、Anthropicは米国のK-12教員を対象に、Claudeのプレミアム機能を無償で1年間利用できる「Claude for Teachers」イニシアチブも発表しています。対象の教員は2027年6月30日までに申請することで、通常は有償のPro相当の機能を利用できるとのことです。教育分野でのAI活用を後押しする動きとして、開発者コミュニティ以外への展開が続いていることがうかがえます。

---

### 出典

- [How Claude's values vary by model and language (Anthropic)](https://www.anthropic.com/research/claude-values-models-languages)
- [Anthropic Says Claude's Values Are Different Depending on Which Language You're Using (Gizmodo)](https://gizmodo.com/anthropic-says-claudes-values-are-different-depending-on-which-language-youre-using-2000785113)
- [Claude responds with more warmth in Hindi and more rigor in Russian, showing how language shapes AI answers (The Decoder)](https://the-decoder.com/claude-values-study/)
- [Anthropic is giving teachers free access to premium Claude features (9to5Mac)](https://9to5mac.com/2026/07/14/anthropic-is-giving-teachers-free-access-to-premium-claude-features-details-here/)
