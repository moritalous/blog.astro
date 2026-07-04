---
title: 'Claude EnterpriseにAdmin向け新機能、Claude Codeも権限まわりを刷新'
description: 'Anthropicが管理者向けの使用量分析・モデル権限管理・支出アラートをClaude Enterpriseに追加。あわせてClaude Codeではデフォルトの権限モードがManualに変更されるなど、直近のアップデートをまとめました。'
pubDate: 2026-07-04
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは、法人向けプランClaude Enterprise向けに、管理者の可視性とコスト管理を強化する新機能を追加しました。管理コンソールのダッシュボードでは、グループ単位・ユーザー単位で利用量とコストを確認できるようになり、作成したアーティファクト数や編集ファイル数、利用したスキル・コネクタといった成果物がコストと並べて表示されます。また「モデルのデフォルト設定と権限（entitlements）」機能により、管理者はチャット・Cowork・Claude Codeそれぞれで新しい会話が開始する際のデフォルトモデルを指定できるようになり、日常的な作業が常に最上位モデルにルーティングされてコストが膨らむ事態を防げます。特定のロールや組織全体に対して、利用可能なモデルを制限することも可能です。

さらに、組織全体の支出上限に対して75%・90%に達した時点で管理者に通知する「支出アラート」も導入されました。これにより、作業中に突然利用がブロックされる前に、上限を引き上げるかどうかを判断する猶予が生まれます。これらの機能はすでにClaude Enterpriseの全顧客に管理コンソール経由で提供されています。エージェント型の利用が広がる中で、AI利用料が想定を超えて膨らむ「予算超過」への対策として、企業のIT管理者にとって実用的なアップデートといえます。

一方、開発者向けのClaude Codeでも細かなアップデートが相次いでいます。バージョン2.1.200では、デフォルトの権限モードが「default」から「Manual」に変更され、`AskUserQuestion`のダイアログも自動継続しないようになりました。また、スリープ/ウェイク後にバックグラウンドセッションが無言で停止してしまう不具合や、デーモンの引き継ぎ処理の問題も修正されています。直前のバージョン2.1.198では、サブエージェントがデフォルトでバックグラウンド実行されるようになり、Claudeが他の作業を進めながらサブエージェントの完了を待てるようになったほか、Claude Platform on AWSがアップストリームプロバイダとして追加されました。

これらは一見地味な変更に見えますが、エージェント運用を前提とした「安全側に倒す」権限設計や、コスト可視化・ガバナンス強化という共通のテーマを持っています。プロダクション環境でClaude CodeやClaude Enterpriseを運用しているチームは、権限モードの挙動変化とコスト管理機能の両方を確認しておくとよいでしょう。

---

### 出典

- [New analytics and cost controls are available for Claude Enterprise (Claude by Anthropic)](https://claude.com/blog/giving-admins-more-visibility-and-control-over-claude-usage-and-spend)
- [Claude Enterprise Spend Controls Arrive as Agentic AI Bills Blow Past Budgets (Tech Times)](https://www.techtimes.com/articles/319687/20260704/claude-enterprise-spend-controls-arrive-agentic-ai-bills-blow-past-budgets.htm)
- [claude-code/CHANGELOG.md (GitHub)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
