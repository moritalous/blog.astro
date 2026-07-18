---
title: 'Claude Code v2.1.214公開 ― 権限チェックの抜け穴を一斉修正、EndConversationツールも追加'
description: 'Anthropicは2026年7月18日、Claude Code v2.1.214をリリースしました。Windows PowerShell 5.1での権限チェック回避、`dir/**`許可ルールの範囲逸脱、Bashのファイルディスクリプタリダイレクトや1万文字超コマンドの誤判定など、権限まわりの複数の抜け穴を修正。悪質なユーザーとの対話を打ち切るEndConversationツールや長時間ツール呼び出しの進捗ハートビートも追加されました。あわせて、AnthropicがIPOを見据えMetaと最大100億ドル規模の計算資源リース交渉を進めていると報じられています。'
pubDate: 2026-07-18
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは2026年7月18日、Claude Code v2.1.214をリリースしました。今回の中心はセキュリティ修正で、権限システムの抜け穴が一挙に塞がれています。特に目を引くのは、`Edit(src/**)`のような単一セグメントの`dir/**`許可ルールが、本来は`<cwd>/dir`配下だけを許可するはずが、ツリー内のどこにある`dir`ディレクトリへの書き込みも誤って自動承認してしまっていた不具合の修正です。このほか、Windows PowerShell 5.1セッションで権限チェックが回避されてしまう問題、bashの解釈とパーミッション解析器の判断がずれるファイルディスクリプタのリダイレクト構文でチェックが素通りしていた問題、1万文字を超える長大なコマンドが誤判定されていた問題、zshの変数添字や`[[ ]]`内の修飾子が無害なテキストとして扱われ承認をすり抜けていた問題、`help`や`man`コマンドが危険なオプションやコマンド置換・バックスラッシュパスを伴う場合でも自動承認されていた問題など、権限周りの見落としが一度に修正されています。自律的にコマンドを実行するエージェント運用が広がる中、こうした「一見無害に見えるコマンドが実は危険な操作を含む」ケースへの対処は実運用上重要な意味を持ちます。

新機能としては、悪質なユーザーやジェイルブレイク試行に対してClaude自身がセッションを終了できるEndConversationツールが追加されました。また、これまで応答が止まって見えていた長時間実行のツール呼び出しに定期的な進捗ハートビートが付くようになったほか、OpenTelemetryのログイベントに`message.uuid`・`client_request_id`・`tool_source`属性が追加され、メッセージ単位の相関やツールの出所追跡がしやすくなっています。Docker（Podmanのdockerシム含む）のデーモンリダイレクト系フラグ（`--url`・`--connection`・`--identity`など）を伴うコマンドにも新たに権限プロンプトが表示されるようになりました。直前の v2.1.212（7月17日）では`/fork`がバックグラウンドセッション複製に変わりWebSearch・サブエージェント数に上限が設けられたばかりで、この1〜2日でClaude Codeは機能追加とガードレール強化を高い頻度で重ねています。

同時期のビジネス面では、AnthropicがMetaとの間で、最大100億ドル規模・2年間の計算資源リース契約について初期段階の交渉を進めていると複数の米メディア（New York Times発、Bloomberg・CNBC・CNN等が追随報道）が7月17日に報じました。Anthropicは6月にこの提案を持ちかけたとされ、既に発表済みのSpaceX Colossus 1データセンターとの計算資源利用契約に続く動きです。Meta CEOのマーク・ザッカーバーグ氏は5月、AI投資が既存事業以外の収益にもつながることを投資家に示す手段として、クラウド事業への参入を検討していると述べており、両社の思惑が一致した形です。Anthropicは10月にもIPOを見据えて投資家との面談を進めているとも報じられており、モデル開発企業が計算資源の確保と資本市場対応を並行して進める局面が続いています。開発者にとっては直接の影響は小さいものの、Claudeを支える計算基盤の拡大がサービスの安定性や将来的な価格・提供能力にどう波及するかは注視に値します。

---

### 出典

- [claude-code/CHANGELOG.md (GitHub)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Claude Code changelog (Claude Code Docs)](https://code.claude.com/docs/en/changelog)
- [Meta, Anthropic in talks for potential $10 billion compute lease deal (CNBC)](https://www.cnbc.com/2026/07/17/anthropic-meta-ai-compute.html)
- [Meta in Talks to Sell Computing Power to Anthropic, NYT Reports (Bloomberg)](https://www.bloomberg.com/news/articles/2026-07-17/meta-in-talks-to-sell-computing-power-to-anthropic-nyt-reports)
- [Meta in talks to rent some of its billions in AI infrastructure to Anthropic (CNN Business)](https://us.cnn.com/2026/07/17/tech/meta-anthropic-ai-cloud-computing)
