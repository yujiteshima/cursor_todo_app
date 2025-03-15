# Cursor Todo App

Next.jsとReactで構築されたシンプルなTodoアプリケーションです。タスクの追加、完了/未完了の切り替え、削除などの基本的な機能を備えています。

## 機能

- タスクの追加
- タスクの完了/未完了の切り替え
- タスクの削除
- ローカルストレージによるデータ永続化
- レスポンシブデザイン

## 技術スタック

- **フロントエンド**: React 18.2.0、Next.js 14.0.4
- **スタイリング**: Tailwind CSS 3.3.5
- **言語**: TypeScript
- **状態管理**: React Hooks (useState, useEffect)
- **データ永続化**: localStorage

## 開発環境のセットアップ

1. リポジトリをクローン:
   ```bash
   git clone git@github.com:yujiteshima/cursor_todo_app.git
   cd cursor_todo_app
   ```

2. 依存関係をインストール:
   ```bash
   npm install
   ```

3. 開発サーバーを起動:
   ```bash
   npm run dev
   ```

4. ブラウザで http://localhost:3000 にアクセス

## プロジェクト構造

```
cursor_todo_app/
├── public/              # 静的ファイル
├── src/                 # ソースコード
│   ├── app/             # Next.js App Router
│   │   ├── components/  # Reactコンポーネント
│   │   │   ├── TodoForm.tsx    # タスク入力フォーム
│   │   │   ├── TodoItem.tsx    # 個別タスク表示
│   │   │   └── TodoList.tsx    # タスク一覧
│   │   ├── types/       # 型定義
│   │   │   └── todo.ts  # Todoの型定義
│   │   ├── globals.css  # グローバルCSS
│   │   ├── layout.tsx   # レイアウト
│   │   └── page.tsx     # メインページ
├── .cursorignore        # Cursorが無視するファイル
├── .cursorrules         # Cursorのルール設定
├── KNOWLEDGE.md         # プロジェクトのナレッジベース
├── next.config.js       # Next.js設定
├── package.json         # 依存関係
├── postcss.config.js    # PostCSS設定
└── tailwind.config.js   # Tailwind CSS設定
```

## Cursorでの開発について

このプロジェクトはCursorエディタでの開発を最適化するための設定を含んでいます。

### ナレッジベース

`KNOWLEDGE.md`ファイルにはプロジェクトに関する詳細な情報が記載されています。このファイルは以下の情報を含みます：

- プロジェクト概要
- 技術スタックの詳細
- コンポーネント設計
- データモデル
- 既知の問題と解決策
- その他の開発情報

### Cursorルール

`.cursorrules`ファイルには、Cursorエディタでの開発をサポートするためのルールが定義されています：

- ファイルタイプごとのコーディングガイドライン
- 特定のファイルに対する詳細な説明
- 全体的なコーディングスタイルのガイドライン

### 無視ファイル

`.cursorignore`ファイルには、Cursorのインデックス作成や機密情報の保護のために無視すべきファイルパターンが定義されています。

## 貢献方法

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

MITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 連絡先

Yuji Teshima - [@yujiteshima](https://twitter.com/yujiteshima)
