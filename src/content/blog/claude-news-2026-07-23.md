---
title: 'Claude Voice ModeがOpus/Sonnet対応に刷新、Claude Codeには脆弱性スキャン用「Claude Security」プラグインがベータ公開'
description: 'Anthropicは2026年7月23日、Claude Voice Modeを刷新し、これまでHaikuのみだった音声モードでOpusとSonnetモデルを選択できるようにしました。また前日には、Claude Code向けにマルチエージェント方式でコードの脆弱性をスキャンする「Claude Security」プラグインのパブリックベータも公開しています。'
pubDate: 2026-07-23
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは2026年7月23日、Claude Voice Modeの大幅な刷新を発表しました。これまでVoice ModeはAnthropicのHaikuモデル固定で、即応性を優先する代わりに深い推論には向いていませんでしたが、今回のアップデートで初めてOpusおよびSonnetモデルを音声会話中に選択できるようになりました。会話の途中でもモデルを切り替えられるほか、Gmail・Slack・Canvaなど連携アプリからコンテキストを取り込む機能や、ベータ版として対応言語の拡充も行われています。音声モデル自体もより自然な抑揚と応答速度の向上を実現しており、ユーザーが選んだモデルのうち最も高速なバリアントを使うことで、ターン制（Claudeが聞く→考える→話す）のやり取りをスムーズに保つ設計になっています。カスタマイズ可能な音声キャラクターや、安全面の制御強化も盛り込まれました。

これに先立つ7月22日には、Claude Code向けの新しい公式プラグイン「Claude Security」がパブリックベータとして公開されました。ターミナルから直接、直近のコード変更に対する脆弱性スキャンや、コードベース全体を対象としたより網羅的なセキュリティレビューを実行できるのが特徴です。複数のClaudeエージェントがアーキテクチャをマッピングし、脅威モデルを構築した上で脆弱性を探索し、さらに見つかった各所見を別のエージェントが敵対的に検証してからレポートを作成するという、マルチエージェント方式のパイプラインを採用しています。単純なパターンマッチングでは見逃されがちな、複数ファイルにまたがるインジェクション欠陥・認証バイパス・メモリ破損・ロジックエラーといった深刻な脆弱性の検出を狙っており、組織管理者はAdmin ConsoleからClaude Code向けに有効化できます。

両者に共通するのは、Claudeがより高性能なモデルを日常的なワークフロー――音声での対話や、コミット前のコードレビュー――に自然に組み込んでいく方向性です。Voice Modeの刷新は個人ユーザーの利便性向上が中心である一方、Claude Securityは開発チームのセキュリティ運用に直接関わるため、Claude Codeを日常的に使っている開発者にとっては特に試す価値のあるアップデートと言えるでしょう。いずれもベータ機能であり、今後のフィードバックを踏まえて機能拡張や対応範囲の拡大が続くと見られます。

## 出典

- [Anthropic upgrades Claude voice mode with more powerful models (9to5Mac)](https://9to5mac.com/2026/07/23/anthropic-upgrades-claude-voice-mode-with-more-powerful-models/)
- [Anthropic upgrades Claude voice with natural intonation and faster responses (Mezha)](https://mezha.net/eng/bukvy/56ded401_anthropic_upgrades_claude/)
- [Claude Voice Mode to get Opus and Sonnet model options (TestingCatalog)](https://www.testingcatalog.com/claude-voice-mode-to-get-opus-and-sonnet-model-options/)
- [Claude's voice mode just got smarter (Engadget)](https://www.engadget.com/2221938/claude-voice-mode-just-got-smarter/)
- [Anthropic Launches Claude Security Plugin to Scan Code for Vulnerabilities (Cybersecurity News)](https://cybersecuritynews.com/anthropic-claude-security-plugin/)
- [Anthropic Releases Claude Security Plugin for Claude Code in Beta: A Multi-Agent Vulnerability Scanner That Runs in Your Terminal (MarkTechPost)](https://www.marktechpost.com/2026/07/22/anthropic-releases-claude-security-plugin-for-claude-code-in-beta-a-multi-agent-vulnerability-scanner-that-runs-in-your-terminal/)
- [Scan your codebase for vulnerabilities (Claude Code Docs)](https://code.claude.com/docs/en/claude-security)
