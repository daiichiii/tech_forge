FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install --legacy-peer-deps

# アプリケーションファイルをコピー
COPY . .

# Viteの開発サーバーを起動（開発用）
# 本番環境ではnpm run buildしてnginxで配信
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]