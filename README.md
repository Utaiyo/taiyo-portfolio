# Taiyo Uehara — Portfolio

上原多一陽のポートフォリオサイト（Next.js / TypeScript / Tailwind CSS / Framer Motion）。

## 見る方法（Mac）

1. Node.js（v20 以上）が入っているか確認します：ターミナルで `node -v`
   - 入っていなければ https://nodejs.org から LTS 版をインストールします
2. ターミナルでこのフォルダに移動します
   ```bash
   cd ~/Desktop/taiyo-portfolio
   ```
3. 初回だけ、部品をインストールします
   ```bash
   npm install
   ```
4. 起動します
   ```bash
   npm run dev
   ```
5. ブラウザで http://localhost:3000 を開きます

止めるときは、ターミナルで `Ctrl + C` を押します。

## 文章を変えたいとき

`src/content/profile.ts` だけを編集すればOKです。保存すると、開いているブラウザにすぐ反映されます。

- プロジェクトの詳細 → `projects`
- SNSのリンク → `contact.links` の `href`
- 写真 → `public/images/` の画像を差し替えます

デザインの考え方は `docs/DESIGN.md` にまとめています。
