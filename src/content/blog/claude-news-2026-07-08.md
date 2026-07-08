---
title: '中国当局がClaude Codeに「バックドア」警告 ― Anthropicは不正蒸留対策の実験機能と説明'
description: '中国工業情報化部（MIIT）傘下の国家脆弱性データベース（NVDB）が、Claude Codeに同意なく位置情報などを外部送信する「セキュリティバックドア」があると警告。Anthropicは中国からの利用は元々許可されていないとした上で、不正リセラー対策・蒸留対策の実験機能だったと説明しています。'
pubDate: 2026-07-08
---

> この記事はAIが自動的にキュレーションしたものです。

中国工業情報化部（MIIT）が運営する国家脆弱性データベース（NVDB）は2026年7月8日（現地報道ベース）、AnthropicのAIコーディングツール「Claude Code」に深刻なセキュリティ脅威となる「バックドア脆弱性」が存在すると警告する声明を発表しました。NVDBによると、Claude Codeにはユーザーの同意なしに位置情報や身元に関わる識別子などの機微情報を外部サーバーへ送信できる監視機構が組み込まれており、影響を受けるのはバージョン2.1.91から2.1.196（2026年4月2日〜6月29日にリリース）とされています。NVDBは対象組織・ユーザーに対し、該当バージョンの即時アンインストールか、当該コードが除去された最新版へのアップグレードを推奨しました。

この件は、7月6日付のWashington Post報道（本ブログでも既報）で明らかになった、Anthropicが中国拠点とみられるアカウントを識別するために3月からひそかに組み込んでいた追跡コードと同一の仕組みを指すとみられます。今回新たなのは、これが一民間報道にとどまらず、中国政府機関が正式な脆弱性情報として公表し、具体的な対象バージョン番号まで示した上で自国の組織・開発者に利用停止を呼びかける「政府対応」の段階に進んだ点です。

Anthropicはこれに対し、当該機構は不正リセラーによるアカウント悪用や、自社モデルの「蒸留」対策を目的として3月に開始した実験的な仕組みであったと説明。Claude CodeのエンジニアであるThariq Shihipar氏はX（旧Twitter）上で、「その後より強力な対策を導入しており、以前からこの仕組みを撤去するつもりだった」と述べ、今回の指摘とは独立して撤去作業が進んでいたことを強調しました。さらにAnthropicは、中国をはじめとする「敵対国」からの自社モデル利用はそもそも利用規約で許可されておらず、中国のユーザーがClaude Codeのアンインストールを勧告されること自体が「本来利用すべきでなかった」ことの裏返しだとの立場を示しています。

技術的な観点からは、AIコーディングツールが不正利用対策の名目でどこまでテレメトリを収集しうるかという透明性の問題が、今回は一企業対利用者の摩擦にとどまらず、米中間のAI覇権競争を背景にした国家レベルの応酬に発展した点が注目されます。Claude Codeを業務で利用する開発者や企業にとっては、ベンダー側の不正利用対策と、地政学的緊張下でのデータガバナンスの両立が今後どう図られるか、引き続き注視が必要な事例といえるでしょう。

---

### 出典

- [China warns about AI risks with Anthropic's Claude Code (CNBC)](https://www.cnbc.com/2026/07/08/china-anthropic-ai-claude-code-backdoor-security-threat.html)
- [China warns of 'backdoor' security risk in Anthropic's Claude Code (Cybernews)](https://cybernews.com/ai-news/china-backdoor-security-alert-anthropics-claude-code/)
- [Anthropic hits back after China warns of Claude Code 'backdoor' risks (South China Morning Post)](https://www.scmp.com/news/china/article/3359901/anthropic-hits-back-after-china-warns-claude-code-backdoor-risks)
- [China tells devs to ditch Claude Code over 'backdoor code' fears (The Register)](https://www.theregister.com/security/2026/07/08/china-ditch-older-claude-versions-with-backdoor-code/5268371)
- [China warns of "security backdoor" in Anthropic AI coding tool (CBS News)](https://www.cbsnews.com/news/china-security-backdoor-anthropic-ai-coding-tool/)
