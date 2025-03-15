import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cursor Todo App",
  description: "Next.jsとTailwind CSSで作成されたシンプルなTodoアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
