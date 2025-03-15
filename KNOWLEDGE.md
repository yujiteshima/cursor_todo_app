# Cursor Todo App プロジェクトナレッジベース

## プロジェクト概要

Cursor Todo Appは、Next.js、React、TypeScriptを使用した簡単なタスク管理アプリケーションです。ユーザーはタスクの追加、完了/未完了の切り替え、削除などの基本的な機能を利用できます。

## 技術スタック

- **フロントエンド**: React 18.2.0、Next.js 14.0.4
- **スタイリング**: Tailwind CSS 3.3.5
- **言語**: TypeScript
- **状態管理**: React Hooks (useState, useEffect)
- **データ永続化**: localStorage

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
├── next.config.js       # Next.js設定
├── package.json         # 依存関係
├── postcss.config.js    # PostCSS設定
└── tailwind.config.js   # Tailwind CSS設定
```

## コンポーネント設計

### TodoList

タスク一覧を管理する親コンポーネントです。以下の機能を持ちます：

- タスクの状態管理（useState）
- ローカルストレージからのタスク読み込み（useEffect）
- タスクの追加、完了状態の切り替え、削除機能
- TodoFormとTodoItemコンポーネントの統合

### TodoForm

新しいタスクを入力するフォームコンポーネントです：

- テキスト入力フィールド
- 送信ボタン
- 入力値の状態管理

### TodoItem

個々のタスクを表示するコンポーネントです：

- タスクのテキスト表示
- 完了/未完了の切り替えチェックボックス
- 削除ボタン
- 作成日時の表示

## データモデル

```typescript
export type Todo = {
    id: string;        // ユニークID（crypto.randomUUID()で生成）
    text: string;      // タスクの内容
    completed: boolean; // 完了状態
    createdAt: Date;   // 作成日時
};
```

## 主要な機能

1. **タスクの追加**: テキスト入力からタスクを作成
2. **タスクの完了/未完了**: チェックボックスでタスクの状態を切り替え
3. **タスクの削除**: 不要なタスクを削除
4. **データの永続化**: ローカルストレージを使用してタスクを保存

## 既知の問題と解決策

### 問題1: 依存関係のバージョンの不一致

**症状**: アプリケーションが起動しない、または予期しないエラーが発生する

**解決策**: package.jsonの依存関係を適切なバージョンに更新する
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.4"
  }
}
```

### 問題2: クライアントコンポーネントの指定漏れ

**症状**: `localStorage is not defined`などのエラーが発生する

**解決策**: クライアントサイドの機能を使用するコンポーネントの先頭に`"use client"`ディレクティブを追加する
```typescript
"use client";

import { useState, useEffect } from "react";
// ...
```

### 問題3: Tailwind CSSの設定不備

**症状**: スタイルが適用されない

**解決策**: 
1. postcss.config.jsを正しく設定
2. tailwind.config.jsでコンテンツパスを適切に設定
3. globals.cssにTailwindディレクティブを追加

## 開発環境のセットアップ

1. リポジトリをクローン: `git clone git@github.com:yujiteshima/cursor_todo_app.git`
2. 依存関係をインストール: `npm install`
3. 開発サーバーを起動: `npm run dev`
4. ブラウザで http://localhost:3000 にアクセス

## デプロイ方法

1. ビルド: `npm run build`
2. 静的ファイルの生成: `npm run export` (Next.jsの設定による)
3. `out`ディレクトリの内容をホスティングサービスにデプロイ

## 参考リソース

- [Next.js ドキュメント](https://nextjs.org/docs)
- [React ドキュメント](https://reactjs.org/docs)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs) 