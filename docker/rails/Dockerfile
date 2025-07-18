FROM ruby:3.3.0

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y \
  nodejs \
  npm \
  default-mysql-client \
  libmariadb-dev \
  libyaml-dev \
  build-essential \
  && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /app

# GemfileとGemfile.lockをコピー
COPY Gemfile Gemfile.lock ./

# Bundlerをインストールしてgemをインストール
RUN gem install bundler && bundle install

# アプリケーションファイルをコピー
COPY . .

# ポートを公開
EXPOSE 3000

# デフォルトコマンド
CMD ["rails", "server", "-b", "0.0.0.0"]