# Tech Forge - 100アプリケーション集約プロジェクト

個人のスキル向上を目的とした100アプリケーション開発プロジェクト。モダンなWeb技術を使用して複数のWebアプリケーションを単一プラットフォームに統合します。

## 🚀 クイックスタート

### 前提条件
- Docker Desktop
- Git

### 開発環境の起動

```bash
# リポジトリをクローン
git clone <repository-url>
cd tech_forge

# Docker環境を起動
docker compose up -d

# データベースのマイグレーション実行
docker compose exec api rails db:migrate
```

### アクセス先
- **フロントエンド**: http://localhost （Nginx経由）
- **React開発サーバー**: http://localhost:3000
- **Rails API**: http://localhost:3001
- **API経由**: http://localhost/api/v1/health

## 🛠 開発コマンド

### Docker操作

```bash
# 全サービス起動
docker compose up -d

# ログ確認
docker compose logs -f [service-name]

# 特定サービスの再起動
docker compose restart [service-name]

# 環境の停止
docker compose down

# 完全クリーンアップ（データも削除）
docker compose down --volumes
docker system prune -a -f --volumes
```

### Rails API操作

```bash
# Railsコンソール
docker compose exec api rails console

# データベース操作
docker compose exec api rails db:create
docker compose exec api rails db:migrate
docker compose exec api rails db:seed
docker compose exec api rails db:rollback

# テスト実行
docker compose exec api bundle exec rspec

# 新しいマイグレーション作成
docker compose exec api rails generate migration CreateTableName

# 新しいコントローラー作成
docker compose exec api rails generate controller Api::V1::ControllerName
```

### フロントエンド操作

```bash
# npm パッケージインストール
docker compose exec frontend npm install

# 型チェック
docker compose exec frontend npm run type-check

# テスト実行
docker compose exec frontend npm test

# ビルド
docker compose exec frontend npm run build

# Linter実行
docker compose exec frontend npm run lint
```

### データベース操作

```bash
# MySQLコンソールに接続
docker compose exec db mysql -u tech_forge_user -p tech_forge_development

# データベースバックアップ
docker compose exec db mysqldump -u root -p tech_forge_development > backup.sql

# データベースリストア
docker compose exec -T db mysql -u root -p tech_forge_development < backup.sql
```

## 🏗 技術スタック

### バックエンド
- **Ruby**: 3.2.4
- **Rails**: 7.1.5 (API-only)
- **データベース**: MySQL 8.0
- **キャッシュ**: Redis 7

### フロントエンド
- **React**: 18.x
- **TypeScript**: 5.x
- **ビルドツール**: Vite
- **テストフレームワーク**: Jest

### インフラ
- **コンテナ**: Docker & Docker Compose
- **Webサーバー**: Nginx
- **デプロイ**: Vercel

## 📁 プロジェクト構造

```
tech_forge/
├── app/                        # Rails + React統合ディレクトリ
│   ├── controllers/            # Rails APIコントローラー
│   │   └── api/v1/            # API v1エンドポイント
│   ├── models/                # Railsデータモデル
│   └── src/                   # React + TypeScriptフロントエンド
│       ├── components/        # Reactコンポーネント
│       ├── hooks/            # カスタムReactフック
│       ├── services/         # API通信サービス
│       └── types/            # TypeScript型定義
├── config/                    # Rails設定
├── docker/                    # Docker設定
├── nginx/                     # Nginx設定
├── tests/                     # テスト環境
└── .tech_forge_log/          # 開発ログ・議事録
```

## 🎮 フェーズ1アプリケーション

1. **オセロゲーム**: マルチプレイヤー対応のターン制戦略ゲーム
2. **勉強アプリ**: 進捗追跡機能付き学習管理システム
3. **壁当てゲーム**: アニメーション・物理演算学習

## 🔧 トラブルシューティング

### よくある問題

#### コンテナが起動しない
```bash
# ログを確認
docker compose logs [service-name]

# 完全リセット
docker compose down --volumes
docker system prune -a -f --volumes
docker compose up --build -d
```

#### Rails APIが応答しない
```bash
# APIヘルスチェック
curl http://localhost:3001/up

# Rails ログ確認
docker compose logs api
```

#### フロントエンドがビルドできない
```bash
# Node modulesクリア
docker compose exec frontend rm -rf node_modules
docker compose exec frontend npm install
```

#### データベース接続エラー
```bash
# データベース状態確認
docker compose exec db mysql -u root -p -e "SHOW DATABASES;"

# Rails設定確認
docker compose exec api cat config/database.yml
```

## 🧪 テスト実行

### Rails APIテスト
```bash
# 全テスト実行
docker compose exec api bundle exec rspec

# 特定のテストファイル実行
docker compose exec api bundle exec rspec spec/controllers/api/v1/health_controller_spec.rb

# テストカバレッジ確認
docker compose exec api bundle exec rspec --format html --out coverage/index.html
```

### フロントエンドテスト
```bash
# 単体テスト実行
docker compose exec frontend npm test

# E2Eテスト実行
docker compose exec frontend npm run test:e2e

# テストカバレッジ
docker compose exec frontend npm run test:coverage
```

## 📚 開発ガイドライン

### APIエンドポイント設計
- RESTful設計に従う
- バージョニング: `/api/v1/`
- エラーハンドリングの統一

### フロントエンド設計
- Atomic Design Pattern
- TypeScript strict mode
- カスタムフックでロジック分離

### Git ワークフロー
```bash
# 新機能開発
git checkout -b feature/new-feature
git add .
git commit -m "feat: 新機能の説明"
git push origin feature/new-feature
```

## 🚢 デプロイ

### Vercel デプロイ
```bash
# ビルド確認
npm run build

# Vercel設定確認
cat vercel.json
```

## 📞 サポート

問題や質問がある場合は、以下を確認してください：

1. [開発ログ](.tech_forge_log/discussions/) - 過去の議論と解決策
2. [トラブルシューティング](#-トラブルシューティング) - よくある問題
3. Docker ログの確認: `docker compose logs [service-name]`

## 📝 開発ログ

重要な技術的決定や議論は `.tech_forge_log/discussions/` に記録されています。
