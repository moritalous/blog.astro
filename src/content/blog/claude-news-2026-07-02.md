---
title: '今日のClaudeニュース'
description: 'Claude Sonnet 5のリリースやClaude Science公開など、直近のAnthropic関連ニュースをまとめました。'
pubDate: 2026-07-02
---

> この記事はAIが自動的にキュレーションしたものです。

ここ数日でAnthropic/Claude関連の大きな発表が相次ぎました。主なトピックをまとめます。

## Claude Sonnet 5がリリース

Anthropicは新モデル「Claude Sonnet 5」を発表しました。「最もエージェント性能の高いSonnetモデル」と位置付けられており、Free・Proプランのデフォルトモデルとなったほか、Max・Team・Enterpriseの各プランでも利用可能です。

- **価格**: 2026年8月31日までの導入価格として入力100万トークンあたり$2、出力100万トークンあたり$10（以降は入力$3・出力$15）。最上位モデルOpus 4.8（入力$5・出力$25）と比べて大幅に安価です。
- **性能**: エージェント型コーディングのベンチマークで63.2%を記録し、Sonnet 4.6（58.1%）とOpus 4.8（69.2%）の中間に位置。知識労働系ベンチマーク（GDPval-AA v2）ではOpus 4.8をわずかに上回るスコアを記録しています。
- **その他の改善**: ハルシネーションや過度な迎合（sycophancy）の低減、悪意あるリクエストへの拒否精度向上、エージェント利用時のプロンプトインジェクションへの耐性強化などが挙げられています。

## Claude Fable 5 / Mythos 5がグローバルに復活

米商務省による輸出規制が解除されたことを受け、Anthropicは7月1日からClaude Fable 5をグローバルに、Claude Mythos 5を一部の米国組織向けに再展開しました。あわせて新しいサイバーセキュリティ分類器（cybersecurity classifier）も追加されています。

## Claude Science：研究者向けAIワークベンチ

科学研究者向けの新しいアプリケーション「Claude Science」が公開されました。

- ゲノミクス・シングルセル解析・プロテオミクス・ケモインフォマティクスなどに対応し、60以上の科学データベースと連携。
- 自然言語での質問に対し、専門エージェントが横断的にデータを検索・統合。
- 生成される図表には、コード・計算環境・手法の平易な説明・やり取りの全履歴を含む「再現性パッケージ」が付属し、他の研究者が検証・再現できるようになっています。
- ラボ自身のインフラ上で稼働させることも可能で、機密性の高いデータを外部に出さずに済む設計。既存のHPCクラスタやModal（クラウド計算サービス）へのジョブ投入にも対応します。

なお、AI for Scienceプロジェクトの応募は2026年7月15日まで受付中とのことです。

## カリフォルニア州との提携

カリフォルニア州のニューサム知事は、州政府機関でのAI活用を支援するためAnthropicと提携したと発表しました。州職員向けのトレーニング拡充や行政サービスの効率化を目指すとしています。

---

### 出典

- [Introducing Claude Sonnet 5 (Anthropic)](https://www.anthropic.com/news/claude-sonnet-5)
- [Anthropic launches Claude Sonnet 5 at a steep discount to its top model (VentureBeat)](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo)
- [Anthropic Claude Sonnet 5 vs Sonnet 4.6 vs Opus 4.8 (MarkTechPost)](https://www.marktechpost.com/2026/06/30/anthropic-claude-sonnet-5-vs-sonnet-4-6-vs-opus-4-8-agentic-coding-benchmarks-api-pricing-and-cost-performance-tradeoffs-compared/)
- [Anthropic Redeploys Claude Fable 5 on July 1 After US Export Controls Lift (MarkTechPost)](https://www.marktechpost.com/2026/07/01/anthropic-redeploys-claude-fable-5-on-july-1-after-us-export-controls-lift-adds-new-cybersecurity-classifier/)
- [US lifts restrictions on Anthropic's powerful AI models Fable and Mythos (Al Jazeera)](https://www.aljazeera.com/economy/2026/7/1/us-lifts-restrictions-on-powerful-ai-models-fable-mythos-anthropic-says)
- [Claude Science, an AI workbench for scientists (Anthropic)](https://www.anthropic.com/news/claude-science-ai-workbench)
- [Anthropic Launches Claude Science Workbench For Researchers (Dataconomy)](https://dataconomy.com/2026/07/01/anthropic-claude-science-ai-research-launch/)
- [Governor Newsom announces partnership with Anthropic (Governor of California)](https://www.gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership-providing-anthropic-tools-to-state-agencies-and-improving-services-for-californians/)
