import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "杜文慧 · Product Manager Portfolio",
  description: "杜文慧的产品经理个人网站，涵盖教育背景、实习经历、产品项目、技能与个人兴趣。",
  icons: {
    icon: "/assets/photos/portrait.jpg",
    shortcut: "/assets/photos/portrait.jpg",
  },
  openGraph: {
    title: "杜文慧 · Product Manager Portfolio",
    description: "用户研究、需求分析、软硬件产品设计与跨团队落地。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
