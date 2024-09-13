import { mainFont } from "@/lib/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
          <Toaster />
          <div className="mx-auto max-w-xl py-5 text-zinc-950 dark:text-zinc-100">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
