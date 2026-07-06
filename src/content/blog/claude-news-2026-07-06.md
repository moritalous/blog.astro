---
title: 'Anthropic、Claude Codeでの中国系ユーザー追跡ソフトを撤去 ― Alibaba Qwenへの「蒸留」疑惑も表面化'
description: 'Anthropicが今年3月からClaude Codeユーザーを対象にひそかに展開していた追跡コードの存在が発覚し、批判を受けて先週撤去したとWashington Postが報道。AlibabaのQwenチームによる大規模な「蒸留」疑惑の詳細も明らかになりました。'
pubDate: 2026-07-06
---

> この記事はAIが自動的にキュレーションしたものです。

Washington Postの2026年7月6日付の報道によると、Anthropicは今年3月、Claude Codeの利用者のうち中国を拠点とするとみられるアカウントを特定するための追跡コードを、ユーザーに告知せずひそかに組み込んでいました。このコードは、利用者の端末が中国のタイムゾーンに設定されているかや、特定の中国系AI企業に関連するWebドメインを利用しているかを不可視の形でチェックする仕組みだったとされます。目的は、Anthropicの技術を自社モデルの強化に流用していると疑われる中国の競合他社を特定することでした。しかし、あるソフトウェア開発者がこの追跡コードの存在を暴露し、プライバシー擁護派から「自社ユーザーを監視している」との批判が噴出したことを受け、Anthropicは先週になってこの仕組みを撤去したと報じられています。

この追跡の背景にあるのが、Anthropicが米上院議員宛の書簡で主張した「蒸留(distillation)」疑惑です。同社は、AlibabaのQwenチームが約2万5000件の不正アカウントを使い、Claudeとの間で2880万件を超えるやり取りを生成して自社モデルの性能向上に利用したとする調査結果を明らかにしました。蒸留とは、大規模で高価なAIモデルに大量の質問を投げかけて得られた応答を使い、小規模で安価なモデルの性能を安く引き上げる手法です。Anthropicは2月にもDeepSeek、Moonshot、MiniMaxの3社に対して同様の疑惑を提起しており、「こうしたキャンペーンは規模と巧妙さを増している」と警戒感を示していました。

技術的な観点で注目すべきは、今回の追跡コードが単なる利用規約違反の検知にとどまらず、ユーザーの地理的属性や利用パターンを本人への通知なしにサーバー側で収集していた点です。Claude Codeを業務で利用する開発者や企業にとっては、ベンダーが不正利用対策の名目でどこまでテレメトリを収集しうるかという透明性の問題を突きつける事例であり、Anthropicが今後どのような形で不正利用対策とプライバシー配慮の両立を図るのか、対応が注目されます。米中間のAI開発競争を背景にした「蒸留」を巡る攻防は、OpenAIも同様の懸念を表明するなど業界全体に広がりつつあり、今回の一件はその一断面といえます。

---

### 出典

- [Why Anthropic alleges Chinese firms are "distilling" knowledge from Claude (The Washington Post)](https://www.washingtonpost.com/national-security/2026/07/06/why-anthropic-alleges-chinese-firms-are-distilling-knowledge-claude/)
- [Inside the secret AI war between Silicon Valley and China (Yahoo News)](https://www.yahoo.com/news/politics/articles/the-covert-us-china-battle-to-make-chatbots-leak-their-secrets-090000095.html)
- [Anthropic's 'distillation' claims against Chinese firm lack substance, rooted in tech hegemony anxiety: Chinese expert (Global Times)](https://www.globaltimes.cn/page/202606/1364418.shtml)
- [Inside Anthropic's Claims of Distillation Attack by Alibaba (Cybersecurity Magazine)](https://cybermagazine.com/news/inside-anthropics-claims-of-distillation-attack-by-alibaba)
- [Anthropic's distilling charges against Chinese firms expose AI training grey area (South China Morning Post)](https://www.scmp.com/tech/tech-war/article/3344499/anthropics-distilling-charges-against-chinese-firms-expose-ai-training-grey-area)
