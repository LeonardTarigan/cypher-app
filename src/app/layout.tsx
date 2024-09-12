import { mainFont } from "@/lib/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cypher App",
  description: "Anonymous messaging app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mainFont.className} bg-zinc-100 antialiased transition-all duration-200 dark:bg-zinc-950`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="mx-auto max-w-xl py-5 text-zinc-950 dark:text-zinc-100">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
