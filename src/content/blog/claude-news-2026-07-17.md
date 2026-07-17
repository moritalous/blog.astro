---
title: 'Claude Code v2.1.212公開 ― /forkがバックグラウンドセッション化、WebSearch・サブエージェント数に上限を追加'
description: 'Anthropicは2026年7月17日、Claude Code v2.1.212をリリースしました。/forkコマンドが会話をバックグラウンドセッションに複製する仕様に変わり、旧来の同一セッション内サブエージェント起動は/subtaskに分離。WebSearch呼び出し数とサブエージェント生成数にセッション単位の上限が新設されたほか、2分を超えるMCPツール呼び出しの自動バックグラウンド化、削除済みセッションも選べる/resumeピッカーが追加されました。'
pubDate: 2026-07-17
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは2026年7月17日、Claude Code v2.1.212をリリースしました。今回の目玉は`/fork`コマンドの挙動変更です。従来`/fork`は現在の会話から同一セッション内でサブエージェントを起動する形でしたが、新バージョンでは会話全体を新しいバックグラウンドセッション（`claude agents`で独立した行として表示される）に複製し、ユーザーは元のセッションでの作業を中断せずに続けられるようになりました。これまで`/fork`が担っていた「セッション内でサブエージェントを走らせる」機能は`/subtask`という別コマンドに切り出され、役割が明確に分離されています。あわせて、標準のauto-mode設定に戻すための`claude auto-mode reset`コマンドも追加されました。

セッションの安全策としては、WebSearchツール呼び出しにセッション単位の上限（デフォルト200回、`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`で調整可能）と、サブエージェント生成数の上限（デフォルト200件、`CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`で調整可能）が新設されました。長時間稼働するエージェントが際限なく検索やサブエージェント起動を繰り返すことへの歯止めとみられ、自律性の高いワークフローを運用するチームにとっては、想定外のコスト増や暴走を防ぐガードレールとして働きます。また、2分を超えて実行されるMCPツール呼び出しは自動的にバックグラウンドに移行するようになり、長時間のツール実行がセッションの応答性を損なわないよう配慮されています。

利便性の面では、`/resume`コマンドが過去セッションのピッカーを開くようになり、削除済みのセッションも一覧から選択できるようになりました。誤って閉じた、あるいは削除したセッションを復元しやすくなる地味ながら実用的な改善です。このほか、プランモードでのファイル操作やworktree作成に関する複数のバグ修正、UI描画まわりの不具合修正も含まれています。

直前の v2.1.211（7月15日）ではサブエージェントの出力をstream-json形式で取り込む`--forward-subagent-text`フラグが追加され、v2.1.207（7月11日）ではBedrock・Vertex AI・FoundryでAuto modeがオプトインなしで既定利用可能になり、AWS上のデフォルトモデルがClaude Opus 4.8に切り替わるなど、この2週間でClaude Codeは急ピッチで機能追加とガードレール強化を重ねています。エージェントを自律的に長時間走らせる運用が広がる中、`/fork`のセッション分離やツール呼び出し上限といった今回の変更は、実運用でのコスト管理と安全性を両立させるための布石といえます。

---

### 出典

- [Claude Code changelog (Claude Code Docs)](https://code.claude.com/docs/en/changelog)
- [claude-code/CHANGELOG.md (GitHub)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Claude Code Updates by Anthropic - July 2026 (Releasebot)](https://releasebot.io/updates/anthropic/claude-code)
