---
title: 'Claude Fable 5、7月20日からMax/Team Premiumに恒久実装 ― Proはクレジット制へ、Claude CodeはV2.1.215で/verify自動実行を廃止'
description: 'Anthropicは2026年7月19日、数度延長してきたClaude Fable 5の無料プロモーションを終了し、7月20日以降はMax・Team Premiumプランに週次利用枠50%の恒久機能として組み込むと発表しました。Pro・Team Standardユーザーは100ドル分のワンタイムクレジット後、API料金（入力$10/出力$50 per Mトークン）での従量課金に移行します。あわせて、Claude Codeがv2.1.215で/verifyと/code-reviewスキルの自動実行を廃止し、明示的な呼び出しが必要になりました。'
pubDate: 2026-07-19
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは2026年7月19日（太平洋時間）、7月7日を皮切りに2度延長してきたClaude Fable 5の無料プロモーション期限を迎え、翌7月20日からの恒久的な提供形態を公式X（旧Twitter）アカウントで発表しました。これによると、Max・Team Premiumプランでは今後Fable 5が週次利用枠の50%を上限として標準機能に組み込まれ、追加課金なしで継続利用できるようになります。一方、Pro・Team Standardプランのユーザーは利用枠経由ではなく「使用クレジット」経由でのアクセスとなり、まず100ドル分のワンタイムクレジットが付与されます。このプロモーションはOpenAIのGPT-5.6（Sol/Terra/Luna）ファミリーのGA投入に対抗する形で7月7日に始まり、7月12日、7月19日と2度の延長を経てきましたが、Anthropicは「Fableの需要は予測が難しかったため、段階的に確保した供給能力に合わせて何度か期限を延長した」と説明しています。

Pro・Team Standardユーザーにとって実務上のインパクトが大きいのはクレジット消費後の扱いです。付与された100ドル分を使い切ると、以降のFable 5利用はAPI料金と同水準の従量課金（入力100万トークンあたり10ドル、出力100万トークンあたり50ドル）に移行します。これは通常モデルの週次利用枠に比べて明確にコストが可視化される仕組みであり、Fable 5を日常的なコーディングエージェント用途で多用してきた個人開発者やチームは、今後の利用量次第でMax・Team Premiumへのアップグレードとどちらが得か再計算する必要が出てきそうです。

同じ7月19日前後、Claude Codeもv2.1.215をリリースしました。今回の変更点は一つに絞られていますが、日常的にClaude Codeを使う開発者にとっては地味に影響が大きい仕様変更です。これまでClaudeは特定の条件を満たすと`/verify`や`/code-review`スキルを自律的に自動実行することがありましたが、v2.1.215以降はこの自動実行が廃止され、必要な際はユーザーが明示的に`/verify`または`/code-review`を呼び出す必要があります。エージェントが「頼んでもいないのに検証やレビューを勝手に走らせてトークンを消費する」という不満に応える変更とみられ、自律性とコスト・実行時間のコントロールのバランスを取ろうとするAnthropicの姿勢が、Fable 5の課金体系見直しと同じ週に重なった形です。

無料プロモーションで需要を試しながら段階的に恒久機能へ落とし込むFable 5の展開と、エージェントの「勝手な自動実行」を絞り込むClaude Codeの調整は、どちらも自律的なAI利用が広がる中でのコストと制御可能性のせめぎ合いを象徴しています。Claude Codeやサブスクリプションプランの中でFable 5を使っているチームは、7月20日の切り替え後にダッシュボードの利用枠・クレジット残高を確認し、想定外の従量課金が発生していないか早めにチェックしておくとよいでしょう。

---

### 出典

- [Claude (@claudeai) announcement on X](https://x.com/claudeai/status/2078302415804379218)
- [Claude Fable 5 Ends Subscription Limbo: Permanent for Max, Credits-Only for Pro (Tech Times)](https://www.techtimes.com/articles/320905/20260718/claude-fable-5-ends-subscription-limbo-permanent-max-credits-only-pro.htm)
- [Anthropic slashes Claude Fable 5 limits in Max and Team Premium and pushes Pro users toward API pricing (THE DECODER)](https://the-decoder.com/anthropic-slashes-claude-fable-5-limits-in-max-and-team-premium-and-pushes-pro-users-toward-api-pricing/)
- [claude-code/CHANGELOG.md (GitHub)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Claude Code changelog (Claude Code Docs)](https://code.claude.com/docs/en/changelog)
