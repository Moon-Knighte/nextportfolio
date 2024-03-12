import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s  ",
    default: "Anjan Basnet",
  },
  authors: {
    name: "Anjan Basnet",
  },

  description: "Web Developer from Nepal.",
  openGraph: {
    title: "Anjan Basnet",
    description: "Web Dev NP",

    images: "/1.png",
  },
  keywords: ["daily web coding", "Anjan Basnet", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
