# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) 向けの指針を提供します。

## プロジェクト概要

tech_forgeは個人のスキル向上を目的とした100アプリケーション集約プロジェクトです。モダンなWeb技術を使用して複数のWebアプリケーションを単一プラットフォームに統合します。

### コアコンセプト
- **目的**: 多様なアプリケーション開発を通じた個人スキル向上
- **規模**: 100アプリケーション（段階的アプローチ推奨）
- **アーキテクチャ**: 共有コンポーネントと統一技術スタックによるモノレポ

### 技術スタック
- **フロントエンド**: React + TypeScript（全アプリで統一）
- **バックエンド**: Ruby on Rails 7 API
- **データベース**: MySQL（Snowflake統合の可能性あり）
- **開発手法**: TDD（テスト駆動開発）
- **キャッシュ**: セッションとパフォーマンス向上のためのRedis
- **コンテナ**: Docker & Docker Compose
- **プロセス管理**: systemd または PM2

### 開発環境
- **設計・要件管理**: Notion
- **UI設計**: Figma
- **開発支援**: Claude Code
- **バージョン管理**: Git with GitHub

## プロジェクト構造

Rails標準のapp/ディレクトリ構造を採用したモノレポ:

```
tech_forge/
   app/                        # Rails + React統合ディレクトリ
      controllers/             # Rails APIコントローラー
         api/v1/               # API v1エンドポイント
            othello_games_controller.rb      # オセロゲームAPI
            study_sessions_controller.rb     # 勉強セッションAPI 
            wall_bounce_scores_controller.rb # 壁当てスコアAPI
         application_controller.rb          # ベースコントローラー
         health_controller.rb               # ヘルスチェックAPI
      models/                  # Railsデータモデル
         application_record.rb # ActiveRecordベース
      src/                     # React + TypeScriptフロントエンド
         components/           # Reactコンポーネント（Atomic Design）
            ui/                # UI基盤コンポーネント（atoms + molecules）
               HealthStatus/   # ヘルスステータス表示
            organisms/         # 複合コンポーネント
               Header/         # ヘッダー
            pages/             # ページコンポーネント（templates + pages）
               HomePage/       # ホームページ
               OthelloPage/    # オセロゲームページ
               StudyPage/      # 勉強アプリページ  
               WallBouncePage/ # 壁当てゲームページ
               AppLayout/      # アプリレイアウト
         hooks/                # カスタムReactフック
            useHealthCheck.ts  # ヘルスチェックフック
         services/             # API通信サービス
            apiClient.ts       # axiosベースAPIクライアント
            healthApi.ts       # ヘルスAPI
         types/                # TypeScript型定義
            api.ts             # API関連型
         styles/               # スタイル
            index.css          # グローバルCSS
         main.tsx             # Reactアプリエントリポイント
         App.tsx              # ルートコンポーネント
   tests/                      # テスト環境
      setup/                   # テスト設定
         jest.setup.ts         # Jest設定
         test-utils.tsx        # カスタムレンダー関数
      mocks/                   # MSWモック
         handlers.ts           # APIモックハンドラー
      fixtures/                # テストデータ
         healthData.json       # ヘルス関連テストデータ
         gameData.json         # ゲーム関連テストデータ
      unit/                    # 単体テスト
         components/           # コンポーネントテスト
         hooks/                # フックテスト
   config/                     # Rails設定
      routes.rb                # ルーティング設定
      application.rb           # アプリケーション設定
   docker/                     # Docker設定
      rails/Dockerfile         # Rails用Dockerfile
      react/Dockerfile         # React用Dockerfile
      mysql/my.cnf            # MySQL設定
   .tech_forge_log/           # 開発ログ・議事録
      discussions/             # 技術議論ログ
```

## アーキテクチャ特徴

### デザインパターン
- **Atomic Design**: ui (atoms + molecules) → organisms → pages (templates + pages)
- **Presentational/Container Pattern**: ロジックとUIの分離
- **Custom Hooks**: ビジネスロジックの再利用性

### 技術構成
- **API設計**: Rails API-only mode, RESTful endpoints
- **状態管理**: React hooks (useState, useEffect)
- **型安全性**: TypeScript strict mode
- **テスト戦略**: Jest + MSW + Testing Library
- **ビルドツール**: Vite (高速開発サーバー)

### フェーズ1アプリケーション
1. **オセロゲーム**: マルチプレイヤー対応のターン制戦略ゲーム
2. **勉強アプリ**: 進捗追跡機能付き学習管理システム
3. **壁当てゲーム**: アニメーション・物理演算学習（SQL Runnerより先に実装推奨）

### フェーズ2アプリケーション
1. **X自動ポスト**: 外部API連携学習
2. **YouTube関連機能**: 複雑なAPI学習

### フェーズ3アプリケーション
1. **将棋**: 複雑なゲームロジック
2. **広告サイト自動作成**: 動的コンテンツ生成
3. **SQL実行環境**: セキュアなSQL実行環境（サンドボックス化）

## 議事録・開発ログルール

**tech_forgeプロジェクトの開発ログ管理**

### ログ管理方針
1. **保存場所**: `.tech_forge_log/discussions/` ディレクトリ内に集約
2. **ファイル名**: `YYYY-MM-DD_topic_name.md`
3. **記録内容**:
   - 設計・仕様に関する議論
   - 技術選定の根拠
   - 問題解決のプロセス
   - アーキテクチャ決定事項
   - 重要な開発上の議論
4. **必須項目**:
   - 日付・時刻
   - 議題
   - 参加者（通常はユーザーとClaude）
   - 決定事項

### 運用ルール
- 議論が発生したら必ずログを作成
- 重要な技術的決定は必ず記録
- 議論の結果はCLAUDE.mdに反映

全ての開発上の重要な議論は必ず記録し、プロジェクトの発展に活用する。

## 共通コマンド

### Docker環境
```bash
# 開発環境の起動
docker-compose up -d --build

# 開発環境の停止
docker-compose down

# ログ確認
docker-compose logs -f [service-name]
```

### Rails バックエンド
```bash
# 依存関係インストール
bundle install

# データベースセットアップ
rails db:create db:migrate db:seed

# 開発サーバー起動
rails server -p 3001

# テスト実行
bundle exec rspec
```

### React フロントエンド
```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# テスト実行
npm test

# 型チェック
npm run type-check
```

### 統合テスト
```bash
# E2Eテスト実行
npm run test:e2e

# 全テスト実行
npm run test:all
```

## 開発フロー

### 設計フェーズ
1. **Figma**でUI/UXデザイン作成
2. **Figma→PNG/SVGエクスポート**（画面ごと）
3. **Notion**で計画・仕様書作成（エクスポート画像を埋め込み）
4. **仕様をプロジェクトに反映**

### 開発フェーズ
1. **Claude Code**で**TDD**実装
   - 仕様書の画像・仕様を参照
   - テストファースト開発
2. **コードレビューとリファクタリング**

### 継続的改善
1. 仕様変更時：Figma更新→エクスポート→Notion→プロジェクト反映
2. テスト拡充・リファクタリング

## テスト戦略

### テスト種別
- **単体テスト**: 各アプリのロジック（Jest, RSpec）
- **統合テスト**: アプリ間連携（Capybara, Cypress）
- **E2Eテスト**: ユーザーシナリオ（Playwright）
- **視覚回帰テスト**: UI変更の検証

### 開発手法
- **テスト駆動開発（TDD）**
- **継続的インテグレーション**
- **コードカバレッジ80%以上維持**

## セキュリティ考慮事項

### API セキュリティ
- Rails APIのCSRF保護
- JWT認証の実装
- レート制限の設定

### SQL実行環境の安全性
- サンドボックス環境の構築
- ユーザー権限の厳格な制限
- クエリ実行時間の制限

### 外部API連携
- APIキーの安全な管理
- リクエスト制限の実装

## パフォーマンス最適化

### フロントエンド
- React.memoによる不要な再描画防止
- Code Splittingによる初期読み込み最適化
- 画像の遅延読み込み

### バックエンド
- Redisによるセッション・クエリキャッシュ
- データベースインデックス最適化
- N+1問題の解決

## 開発ノート

- このリポジトリは現在基本的なドキュメント以外は空です
- 今後の開発でこのCLAUDE.mdファイルを選択した技術スタックとプロジェクト構造を反映して更新してください
- プロジェクトの技術的方向性を計画する際は「tech_forge」というリポジトリ名を考慮してください

## 学習目標

- React/TypeScript習得
- API設計・開発スキル向上
- データベース設計能力強化
- UI/UX設計経験蓄積
- プロジェクト管理手法習得
- テスト駆動開発の実践
- Claude Codeを活用した効率的開発
- モノレポ管理手法の習得

## 次のステップ

このプロジェクトをセットアップする際の考慮事項:
1. プライマリ技術スタックの選択（完了）
2. 適切なパッケージマネージャーと設定ファイルのセットアップ
3. プロジェクト構造とコーディング規約の確立
4. 選択した技術に対する具体的なガイダンスでこのCLAUDE.mdファイルを更新

## 即座に開始できること

1. **Figmaでオセロアプリの簡単なワイヤーフレーム作成**
2. **Notionでプロジェクト管理空間設定**
3. **基本的なプロジェクト構造の作成**