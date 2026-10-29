import type { Metadata, Viewport } from "next";

// フォントは npm パッケージから読み込み（外部CDNに頼らない）
import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/500.css";
import "@fontsource/zen-kaku-gothic-new/700.css";
import "@fontsource/dela-gothic-one/400.css";
import "@fontsource/anton/400.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taiyo Uehara — 上原多一陽 Portfolio",
  description: "宮崎から台湾へ。人と世界をつなぐ挑戦を。上原多一陽（Taiyo Uehara）のポートフォリオ。",
};

export const viewport: Viewport = {
  themeColor: "#f3efe6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
