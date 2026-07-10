---
title: 'Claude Code デスクトップ版に「Browser pane」 ― Claudeがアプリのプレビューと外部サイト閲覧を同一ワークスペースで実行'
description: 'Anthropicは2026年7月10日、Claude Codeデスクトップ版の新機能「Browser pane」を紹介しました。開発中アプリのプレビューと、ドキュメントや課題管理ツールなど外部サイトの閲覧を同じタブ型ブラウザ内で行え、専用のセーフティチェックとサイト単位の許可制御を備えています。'
pubDate: 2026-07-10
---

> この記事はAIが自動的にキュレーションしたものです。

Anthropicは2026年7月10日、Claude Codeのデスクトップアプリ（Codeタブ）に統合されたタブ型ブラウザ「Browser pane」を紹介しました。これまでもClaudeは開発用サーバーを起動してプレビューを表示し、スクリーンショット撮影やDOM検査、クリック、フォーム入力によって自らの変更を検証する機能を備えていましたが、今回はそのプレビュー機能に加えて、ドキュメントサイトや課題管理ツール、その他任意の外部サイトを同じペイン内で開けるようになった点が新しく、9to5MacやDigital Trendsなど複数メディアが取り上げました。Browser paneはmacOSでは「Cmd+Shift+B」、Windowsでは「Ctrl+Shift+B」で呼び出せるほか、チャット内のリンクをクリックした際に「アプリ内で開く」か「既定のブラウザで開く」かを選べるチューザーも表示されます。

Browser paneは、ユーザーが普段使うブラウザとは別の「クリーンなプロファイル」で動作し、保存済みのログイン情報や閲覧履歴を一切引き継ぎません。開発中アプリのプレビューでは、サーバー再起動をまたいでCookieやローカルストレージを保持する「Persist sessions」を選択でき、都度ログインし直す手間を省けます。一方、ユーザー自身としてログイン状態のセッションでClaudeに操作させたい場合は、ブラウザのログイン状態を共有する既存の「Claude in Chrome」拡張機能を使うようガイドされており、用途に応じて2つの仕組みが使い分けられる設計です。

外部サイトでの操作には、開発用サーバーのプレビューにはない追加の安全策が設けられています。Claudeがクリックや入力といった書き込み操作を行う際は、権限モードによらず「Auto mode」で使われているものと同じセーフティ分類器が毎回チェックし、リスクが疑われる操作は権限モードにかかわらずプロンプトで確認を求められます。さらにAuto／Bypass permissions以外のモードでは、未知のサイトへ遷移する前にドメイン許可リストによるチェックも入ります。初回操作時には「Allow once」「Always allow」「Deny」を選ぶ許可カードが表示され、サブドメインごとに個別の許可が必要です。承認済みのサイトであっても、Claudeは購入操作やアカウント作成、CAPTCHA回避は行わない設計になっています。組織向けには、Claude in Chrome拡張機能と共通のサイト許可・ブロックリストがBrowser paneにも適用されるほか、管理者設定`browserExternalPageTools`により外部ページに対するClaudeのツール操作自体を無効化することも可能です。

開発者にとっては、フロントエンドの見た目確認だけでなくAPIサーバーの動作確認やログ閲覧にも対応し、ドキュメント参照からPRレビューまで一つのワークスペースで完結できる点が実務上のメリットです。一方で、Claudeがエージェントとして外部サイトを自律的に閲覧・操作する範囲が広がることは、直近報じられた中国当局によるClaude Codeの通信内容をめぐる指摘（本ブログ7月8日記事）とも重なる論点であり、許可リストの運用やログの可視性など、組織としてのガバナンス設計は引き続き注視が必要でしょう。

---

### 出典

- [Desktop application (Claude Code Docs)](https://code.claude.com/docs/en/desktop)
- [Anthropic highlights Claude Code's in-app browser on the desktop (9to5Mac)](https://9to5mac.com/2026/07/10/anthropic-highlights-claude-codes-in-app-browser-on-the-desktop/)
- [Claude Code can now browse the web without opening Chrome (Digital Trends)](https://www.digitaltrends.com/cool-tech/claude-code-can-now-browse-the-web-without-opening-chrome/)
- [Making Claude Code more secure and autonomous with sandboxing (Anthropic)](https://www.anthropic.com/engineering/claude-code-sandboxing)
